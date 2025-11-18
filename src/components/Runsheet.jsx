import { useMemo } from 'react';

export default function Runsheet({ items = [] }) {
  const rows = useMemo(() => items.map((it, i) => ({
    no: (i + 1).toString().padStart(2, '0'),
    time: it.time || '--:--',
    cue: it.cue || 'Cue',
    owner: it.owner || '—',
    notes: it.notes || '',
  })), [items]);

  return (
    <div className="w-full rounded-2xl border border-black/10 bg-white overflow-hidden">
      <div className="px-4 md:px-6 py-3 border-b border-black/10 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-black">Runsheet</h3>
        <span className="text-xs uppercase tracking-[0.2em] text-black/60">Local {new Date().toLocaleTimeString()}</span>
      </div>
      <div className="divide-y divide-black/10">
        <div className="grid grid-cols-12 px-4 md:px-6 py-2 text-xs uppercase tracking-wide text-black/60 bg-[#aedde8]/40">
          <div className="col-span-1">#</div>
          <div className="col-span-2">Time</div>
          <div className="col-span-4">Cue</div>
          <div className="col-span-2">Owner</div>
          <div className="col-span-3">Notes</div>
        </div>
        {rows.map((r, idx) => (
          <div key={idx} className="grid grid-cols-12 px-4 md:px-6 py-3 text-sm">
            <div className="col-span-1 font-mono tabular-nums text-black/80">{r.no}</div>
            <div className="col-span-2 font-mono tabular-nums text-black">{r.time}</div>
            <div className="col-span-4 text-black">{r.cue}</div>
            <div className="col-span-2 text-black/80">{r.owner}</div>
            <div className="col-span-3 text-black/70">{r.notes}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
