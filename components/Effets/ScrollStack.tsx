import React, { useLayoutEffect, useRef, useCallback } from 'react';
import type { ReactNode } from 'react';
import Lenis from 'lenis';

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '' }) => (
  <div
    className={`scroll-stack-card ${itemClassName}`.trim()}
    style={{
      position: 'relative',
      width: '100%',
      maxWidth: '800px',
      margin: '0 auto 150px',
      backfaceVisibility: 'hidden',
      transformStyle: 'flat',
      willChange: 'transform',
      opacity: 1, // Toujours visible
      visibility: 'visible', // Toujours visible
      zIndex: 10 // Base z-index
    }}
  >
    {children}
  </div>
);

interface ScrollStackProps {
  className?: string;
  children: ReactNode;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 150,
  itemScale = 0.05,
  itemStackDistance = 40,
  stackPosition = '50%', // Position plus basse
  scaleEndPosition = '30%', // Position plus basse
  baseScale = 0.9,
  scaleDuration = 0.5,
  rotationAmount = 0.5, // Réduit
  blurAmount = 0.3, // Réduit
  useWindowScroll = true,
  onStackComplete
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const lastTransformsRef = useRef(new Map<number, any>());
  const isUpdatingRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value as string);
  }, []);

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
        scrollContainer: document.documentElement
      };
    } else {
      const scroller = scrollerRef.current;
      return {
        scrollTop: scroller ? scroller.scrollTop : 0,
        containerHeight: scroller ? scroller.clientHeight : 0,
        scrollContainer: scroller
      };
    }
  }, [useWindowScroll]);

  const getElementOffset = useCallback(
    (element: HTMLElement) => {
      if (useWindowScroll) {
        const rect = element.getBoundingClientRect();
        return rect.top + window.scrollY;
      } else {
        return element.offsetTop;
      }
    },
    [useWindowScroll]
  );

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return;

    isUpdatingRef.current = true;

    const { scrollTop, containerHeight } = getScrollData();
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

    // Position fixe pour l'empilement (au milieu de l'écran)
    const fixedStackPosition = containerHeight * 0.4;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = getElementOffset(card);
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);
      
      // Rotation réduite et stabilisée
      const rotation = rotationAmount ? 
        (i * rotationAmount * scaleProgress * 0.3) * (i % 2 === 0 ? 1 : -1) : 0;

      let blur = 0;
      if (blurAmount) {
        if (i > 0) {
          // Seulement les cartes au-dessus de la première ont du flou
          const depthInStack = i;
          blur = Math.max(0, depthInStack * blurAmount * scaleProgress);
        }
      }

      let translateY = 0;
      
      // Si la carte est dans la zone d'empilement
      if (scrollTop >= triggerStart) {
        // Pour la première carte, on la laisse presque fixe
        if (i === 0) {
          // Première carte: mouvement minimal
          translateY = (scrollTop - cardTop) * 0.1;
        } else {
          // Autres cartes: elles montent pour s'empiler
          const stackProgress = Math.min(1, (scrollTop - triggerStart) / (Math.max(1, triggerEnd - triggerStart)));
          // Décalage vertical pour l'empilement
          translateY = -itemStackDistance * (i - 1) * stackProgress;
        }
      }

      const newTransform = {
        translateY: Math.round(translateY),
        scale: Math.round(scale * 100) / 100,
        rotation: Math.round(rotation * 10) / 10,
        blur: Math.round(blur * 10) / 10,
        zIndex: cardsRef.current.length - i
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 1 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.01 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 ||
        Math.abs(lastTransform.blur - newTransform.blur) > 0.1 ||
        lastTransform.zIndex !== newTransform.zIndex;

      if (hasChanged) {
        // Transformations simplifiées
        const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale})`;
        const rotationTransform = rotation !== 0 ? `rotate(${newTransform.rotation}deg)` : '';
        const fullTransform = rotationTransform 
          ? `${transform} ${rotationTransform}`
          : transform;
          
        const filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : '';

        card.style.transform = fullTransform;
        card.style.filter = filter;
        card.style.zIndex = `${newTransform.zIndex}`;
        
        // Garantir la visibilité
        card.style.opacity = '1';
        card.style.visibility = 'visible';
        card.style.pointerEvents = 'auto';
        
        // Transition douce
        card.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), filter 0.3s ease';

        lastTransformsRef.current.set(i, newTransform);
      }

      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= triggerStart;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });

    isUpdatingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    calculateProgress,
    parsePercentage,
    getScrollData,
    getElementOffset
  ]);

  const handleScroll = useCallback(() => {
    updateCardTransforms();
  }, [updateCardTransforms]);

  const setupLenis = useCallback(() => {
    const lenis = new Lenis({
      duration: 0.8,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
      infinite: false,
      wheelMultiplier: 0.8,
      lerp: 0.08,
      syncTouch: true,
      syncTouchLerp: 0.05
    });

    lenis.on('scroll', handleScroll);

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    };
    animationFrameRef.current = requestAnimationFrame(raf);

    lenisRef.current = lenis;
    return lenis;
  }, [handleScroll]);

  useLayoutEffect(() => {
    console.log('ScrollStack mounted, useWindowScroll:', useWindowScroll);

    if (!useWindowScroll && !scrollerRef.current) {
      console.log('No scroller ref found');
      return;
    }

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll('.scroll-stack-card')
        : (scrollerRef.current?.querySelectorAll('.scroll-stack-card') ?? [])
    ) as HTMLElement[];
    
    console.log('Found cards:', cards.length);
    cardsRef.current = cards;

    // Initialiser les cartes
    cards.forEach((card, i) => {
      // Styles initiaux
      card.style.transform = 'translate3d(0, 0, 0) scale(1)';
      card.style.transformOrigin = 'top center';
      card.style.willChange = 'transform';
      card.style.backfaceVisibility = 'hidden';
      card.style.opacity = '1';
      card.style.visibility = 'visible';
      card.style.zIndex = `${cards.length - i}`;
      
      // Pas de marginBottom car on gère le positionnement différemment
      if (i < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`;
      }
    });

    setupLenis();
    
    // Initial update avec un délai
    setTimeout(() => {
      updateCardTransforms();
    }, 100);

    return () => {
      console.log('ScrollStack unmounting');
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      stackCompletedRef.current = false;
      cardsRef.current = [];
      lastTransformsRef.current.clear();
      isUpdatingRef.current = false;
    };
  }, [
    itemDistance,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    scaleDuration,
    rotationAmount,
    blurAmount,
    useWindowScroll,
    onStackComplete,
    setupLenis,
    updateCardTransforms
  ]);

  return (
    <div
      className={`${className}`.trim()}
      ref={useWindowScroll ? null : scrollerRef}
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh'
      }}
    >
      <div 
        className="scroll-stack-inner"
        style={{
          position: 'relative',
          paddingTop: '5px'
        }}
      >
        {children}
        
      </div>
    </div>
  );
};

export default ScrollStack;