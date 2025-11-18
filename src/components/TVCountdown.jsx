import { useEffect, useRef } from 'react';

export default function TVCountdown({ seconds = 10 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let start = Date.now();
    const duration = seconds * 1000;

    function draw() {
      const w = canvas.width = canvas.clientWidth * window.devicePixelRatio;
      const h = canvas.height = canvas.clientHeight * window.devicePixelRatio;
      const now = Date.now();
      const elapsed = Math.min(now - start, duration);
      const remaining = Math.max(0, duration - elapsed);
      const pct = remaining / duration;

      // Background
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, w, h);

      // Outer ring
      const cx = w / 2;
      const cy = h / 2;
      const r = Math.min(w, h) / 2 - 10 * window.devicePixelRatio;

      ctx.lineWidth = 14 * window.devicePixelRatio;
      ctx.strokeStyle = '#aedde8';
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.stroke();

      // Progress ring
      ctx.strokeStyle = '#0891b2';
      ctx.beginPath();
      ctx.arc(cx, cy, r, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * pct, false);
      ctx.stroke();

      // Text
      ctx.fillStyle = '#000000';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = `${48 * window.devicePixelRatio}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`;
      const secs = Math.ceil(remaining / 1000);
      ctx.fillText(secs.toString(), cx, cy);

      if (elapsed < duration) {
        requestAnimationFrame(draw);
      }
    }

    const id = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(id);
  }, [seconds]);

  return (
    <div className="w-full aspect-video rounded-2xl border border-black/10 bg-white overflow-hidden flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
