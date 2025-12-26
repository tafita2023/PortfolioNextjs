"use client";

import React from 'react';
import ScrollStack, { ScrollStackItem } from '@/components/Effets/ScrollStack';
import ClickSpark from '@/components/Effets/ClickSpark';

function Services() {
  return (
    <ClickSpark>
      <div style={{ 
        minHeight: '150vh',
        width: '100%',
        padding: '20px',
        boxSizing: 'border-box',
      }}>
        <h1 style={{ 
          textAlign: 'center', 
          color: 'white', 
          margin: '40px 0 30px',
          fontSize: '2.5rem',
          fontWeight: '800',
          letterSpacing: '-0.5px'
        }}>
          Mes Services
        </h1>        
        <div style={{ 
          width: '100%',
          maxWidth: '900px',
          margin: '0 auto 50px',
          position: 'relative'
        }}>
          <ScrollStack
            itemDistance={120}
            itemStackDistance={30}
            stackPosition="40%"
            baseScale={0.92}
            itemScale={0.04}
            rotationAmount={0.3}
            blurAmount={0.2}
            useWindowScroll={true}
          >
            <ScrollStackItem>
              <div style={{ 
                background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.9))',
                color: 'white',
                padding: '48px',
                borderRadius: '24px',
                minHeight: '320px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '0',
                  right: '0',
                  width: '120px',
                  height: '120px',
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  borderRadius: '0 24px 0 100px',
                  opacity: '0.1'
                }} />
                <div style={{ 
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '28px',
                }}>
                  <span>
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" style={{ color: 'white' }}>
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
                    </svg>
                  </span>
                </div>
                <h2 style={{ 
                  fontSize: '2rem', 
                  marginBottom: '20px', 
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Développement Web Sur Mesure
                </h2>
                <p style={{ 
                  fontSize: '1.125rem', 
                  color: '#cbd5e1', 
                  lineHeight: '1.8',
                  marginBottom: '32px'
                }}>
                  Création de sites web modernes, performants et adaptés à vos besoins spécifiques. 
                  Des solutions responsive qui s'adaptent à tous les appareils.
                </p>
              </div>
            </ScrollStackItem>
            
            <ScrollStackItem>
              <div style={{ 
                background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.9))',
                color: 'white',
                padding: '48px',
                borderRadius: '24px',
                minHeight: '320px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '0',
                  right: '0',
                  width: '120px',
                  height: '120px',
                  background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
                  borderRadius: '0 24px 0 100px',
                  opacity: '0.1'
                }} />
                <div style={{ 
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '28px',
                }}>
                  <span>
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" style={{ color: 'white' }}>
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7h.01m3.486 1.513h.01m-6.978 0h.01M6.99 12H7m9 4h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 3.043 12.89 9.1 9.1 0 0 0 8.2 20.1a8.62 8.62 0 0 0 3.769.9 2.013 2.013 0 0 0 2.03-2v-.857A2.036 2.036 0 0 1 16 16Z"/>
                    </svg>
                  </span>
                </div>
                <h2 style={{ 
                  fontSize: '2rem', 
                  marginBottom: '20px', 
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Design UX/UI Innovant
                </h2>
                <p style={{ 
                  fontSize: '1.125rem', 
                  color: '#cbd5e1', 
                  lineHeight: '1.8',
                  marginBottom: '32px'
                }}>
                  Conception d'interfaces utilisateur intuitives et d'expériences mémorables. 
                  Design centré sur l'utilisateur pour maximiser l'engagement.
                </p>
              </div>
            </ScrollStackItem>
            
            <ScrollStackItem>
              <div style={{ 
                background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.9))',
                color: 'white',
                padding: '48px',
                borderRadius: '24px',
                minHeight: '320px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '0',
                  right: '0',
                  width: '120px',
                  height: '120px',
                  background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                  borderRadius: '0 24px 0 100px',
                  opacity: '0.1'
                }} />
                <div style={{ 
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '28px',
                }}>
                  <span>
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" style={{ color: 'white' }}>
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 9a3 3 0 0 1 3-3m-2 15h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 6 9c0 4 4 5 4 9h4Z"/>
                    </svg>
                  </span>
                </div>
                <h2 style={{ 
                  fontSize: '2rem', 
                  marginBottom: '20px', 
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Intégration & Performance
                </h2>
                <p style={{ 
                  fontSize: '1.125rem', 
                  color: '#cbd5e1', 
                  lineHeight: '1.8',
                  marginBottom: '32px'
                }}>
                  Transformation précise de maquettes en code optimisé. 
                  Focus sur les performances, l'accessibilité et les meilleures pratiques.
                </p>
              </div>
            </ScrollStackItem>
          </ScrollStack>
        </div>
      </div>
    </ClickSpark>
  );
}

export default Services;