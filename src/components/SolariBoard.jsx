import { useEffect, useMemo, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ░';

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

function flipSequence(from, to) {
  // Generate an array of interim characters to create a flip animation
  const steps = 8;
  const seq = [];
  for (let i = 0; i < steps; i++) seq.push(randomChar());
  seq.push(to);
  return seq;
}

function Cell({ value, accent = false, delay = 0 }) {
  const [index, setIndex] = useState(0);
  const [sequence, setSequence] = useState(() => flipSequence(' ', value));

  useEffect(() => {
    setSequence(flipSequence(sequence[sequence.length - 1] || ' ', value));
    setIndex(0);
  }, [value]);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => {
        if (i >= sequence.length - 1) return i;
        return i + 1;
      });
    }, 40 + delay);
    return () => clearInterval(id);
  }, [sequence, delay]);

  const display = sequence[Math.min(index, sequence.length - 1)] || ' ';

  return (
    <div className={`h-10 md:h-12 w-8 md:w-9 rounded border border-black/10 bg-white relative overflow-hidden shadow-sm ${accent ? 'ring-1 ring-[#0891b2]' : ''}`}>
      <div className="absolute inset-0 grid grid-rows-2">
        <div className="border-b border-black/10" />
        <div />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-mono text-lg md:text-2xl text-black leading-none">{display}</span>
      </div>
    </div>
  );
}

export default function SolariBoard({ rows = [] }) {
  const normalized = useMemo(() => rows.map((r) => ({
    left: r.left || '',
    right: r.right || '',
    status: r.status || '',
  })), [rows]);

  const makeCells = (text, max = 16) => {
    const t = (text || '').toUpperCase().padEnd(max, ' ');
    return t.slice(0, max).split('');
  };

  return (
    <div className="w-full rounded-2xl border border-black/10 bg-white p-4 md:p-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl md:text-2xl font-semibold text-black">Live Board</h3>
        <div className="text-xs uppercase tracking-[0.2em] text-black/60">Updated {new Date().toLocaleTimeString()}</div>
      </div>
      <div className="mt-4 grid gap-3">
        {normalized.map((r, idx) => (
          <div key={idx} className="grid grid-cols-12 md:grid-cols-16 items-center gap-2">
            <div className="col-span-6 md:col-span-8 flex gap-1">
              {makeCells(r.left, 14).map((c, i) => (
                <Cell key={i} value={c} delay={(i % 6) * 10} />
              ))}
            </div>
            <div className="col-span-3 md:col-span-4 flex gap-1">
              {makeCells(r.right, 8).map((c, i) => (
                <Cell key={i} value={c} delay={(i % 6) * 10} />
              ))}
            </div>
            <div className="col-span-3 md:col-span-4 flex gap-1">
              {makeCells(r.status, 8).map((c, i) => (
                <Cell key={i} value={c} delay={(i % 6) * 10} accent />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
