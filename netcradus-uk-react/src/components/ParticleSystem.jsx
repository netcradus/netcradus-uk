import React, { useEffect } from 'react';

export default function ParticleSystem() {
  useEffect(() => {
    const stage = document.getElementById('heroStage');
    if (!stage) return;

    // Remove only existing particle divs so video and overlay remain intact
    stage.querySelectorAll('.hero-particle').forEach((el) => el.remove());

    const count = 35;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'hero-particle';
      const size = Math.random() * 3 + 1;
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.left = (65 + Math.random() * 35) + '%';
      p.style.top = (100 + Math.random() * 20) + '%';
      const dur = 8 + Math.random() * 14;
      p.style.animationDuration = dur + 's';
      p.style.animationDelay = (-Math.random() * dur) + 's';
      stage.appendChild(p);
    }
  }, []);

  return null;
}
