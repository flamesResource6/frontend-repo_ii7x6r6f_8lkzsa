import { useEffect, useState } from 'react';

function getTimeParts(target) {
  const now = new Date().getTime();
  const diff = Math.max(0, target - now);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { diff, days, hours, minutes, seconds };
}

export default function Countdown({ title = 'On Air In', targetDate }) {
  const initialTarget = targetDate ? new Date(targetDate).getTime() : new Date(Date.now() + 1000 * 60 * 60 * 24).getTime();
  const [target] = useState(initialTarget);
  const [time, setTime] = useState(getTimeParts(initialTarget));

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeParts(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const cell = (label, value) => (
    <div className="flex flex-col items-center">
      <div className="min-w-[64px] px-3 py-2 rounded-lg bg-black text-white text-2xl font-mono tabular-nums leading-none shadow-[inset_0_-6px_0_rgba(255,255,255,0.08)]">
        {String(value).padStart(2, '0')}
      </div>
      <div className="mt-1 text-xs uppercase tracking-wide text-black/60">{label}</div>
    </div>
  );

  return (
    <div className="w-full">
      <div className="text-xs uppercase tracking-[0.2em] text-black/60">{title}</div>
      <div className="mt-2 flex items-center gap-3">
        {cell('Days', time.days)}
        <span className="text-black/40">:</span>
        {cell('Hours', time.hours)}
        <span className="text-black/40">:</span>
        {cell('Min', time.minutes)}
        <span className="text-black/40">:</span>
        {cell('Sec', time.seconds)}
      </div>
    </div>
  );
}
