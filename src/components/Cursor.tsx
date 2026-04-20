import { useEffect, useState } from 'react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isBurst, setIsBurst] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseClick = (e: MouseEvent) => {
      setIsBurst(true);
      setTimeout(() => setIsBurst(false), 300);

      // Sound FX label
      const fx = document.createElement('div');
      fx.className = 'sfx';
      const words = ['ZAP!', 'BOOM!', 'WOW!', 'POP!', 'BAM!'];
      fx.textContent = words[Math.floor(Math.random() * words.length)];
      fx.style.left = `${e.clientX - 20}px`;
      fx.style.top = `${e.clientY - 30}px`;
      document.body.appendChild(fx);
      setTimeout(() => fx.remove(), 800);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('click', handleMouseClick);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('click', handleMouseClick);
    };
  }, []);

  return (
    <div
      className={`cursor ${isBurst ? 'burst' : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
}
