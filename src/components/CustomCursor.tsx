import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const [isHoveringHero, setIsHoveringHero] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorSize, setCursorSize] = useState(1.5);

  useEffect(() => {
    let cursor = { x: 0, y: 0 };
    let currentPosition = { x: 0, y: 0 };
    let raf: number;

    const updatePosition = (e: MouseEvent) => {
      cursor = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.classList.contains('interactive')) {
        setIsHoveringButton(true);
        setCursorSize(1.8);
      }
      if (target.closest('#hero') || target.closest('video')) {
        setIsHoveringHero(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.classList.contains('interactive')) {
        setIsHoveringButton(false);
        setCursorSize(1.5);
      }
      if (target.closest('#hero') || target.closest('video')) {
        setIsHoveringHero(false);
      }
    };

    const animate = () => {
      const ease = 0.15;
      currentPosition.x += (cursor.x - currentPosition.x) * ease;
      currentPosition.y += (cursor.y - currentPosition.y) * ease;

      setPosition({
        x: Math.round(currentPosition.x * 100) / 100,
        y: Math.round(currentPosition.y * 100) / 100
      });

      raf = requestAnimationFrame(animate);
    };

    currentPosition = { x: cursor.x, y: cursor.y };
    animate();

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseEnter);
    window.addEventListener('mouseout', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseEnter);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(raf);
    };
  }, [isVisible]);

  return (
    <>
      {/* Football Image Cursor */}
      <div
        className={`fixed pointer-events-none z-50 transition-opacity duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          width: '35px',
          height: '35px',
          transform: `translate3d(${position.x - 17}px, ${position.y - 17}px, 0) scale(${cursorSize})`,
          backgroundImage: `url(${isHoveringHero ? '/images/football-white.png' : '/images/football.png'})`,
          backgroundSize: 'cover',
          filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.2))',
          transition: 'transform 0.3s ease-out',
          willChange: 'transform',
        }}
      />
      {/* Small Dot Cursor */}
      <div
        className={`fixed pointer-events-none z-40 mix-blend-difference ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          width: '8px',
          height: '8px',
          backgroundColor: isHoveringHero ? '#ffffff' : '#333333',
          borderRadius: '50%',
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
          transition: 'opacity 0.2s ease-out',
        }}
      />
    </>
  );
};

export default CustomCursor;
