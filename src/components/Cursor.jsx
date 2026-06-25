import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const ok = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    setEnabled(ok);
    if (!ok) return;

    let rx = 0, ry = 0, dx = 0, dy = 0, raf = 0;

    const onMove = (e) => {
      dx = e.clientX;
      dy = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${dx - 3}px, ${dy - 3}px)`;
    };
    const loop = () => {
      rx += (dx - rx) * 0.18;
      ry += (dy - ry) * 0.18;
      if (ring.current) ring.current.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onOver = (e) => {
      if (!ring.current) return;
      if (e.target && e.target.closest('a, button, [data-hover]')) ring.current.classList.add('hover');
      else ring.current.classList.remove('hover');
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div ref={ring} className="cursor-ring" />
      <div ref={dot} className="cursor-dot" />
    </>
  );
}
