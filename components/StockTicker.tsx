"use client";

import { useEffect, useState } from "react";

interface StockData {
  price: number;
  change: number;
  changePct: number;
  currency: string;
}

interface SlotProps {
  exchange: string;
  symbol: string;
  data: StockData | null;
  loading: boolean;
  href: string;
}

const fmt = (n: number) => n.toFixed(2);
const sign = (n: number) => (n >= 0 ? "+" : "");

function Slot({ exchange, symbol, data, loading, href }: SlotProps) {
  const up = data ? data.change >= 0 : true;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 px-6 py-4 flex-1 hover:bg-gray-50 transition-colors duration-150 group"
    >
      <div className="shrink-0">
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">{exchange}</p>
        <p className="text-xs font-bold text-ats-black group-hover:text-ats-blue transition-colors">{symbol}</p>
      </div>
      {loading ? (
        <div className="h-5 w-28 bg-gray-100 rounded animate-pulse" />
      ) : data ? (
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="text-lg font-extrabold text-ats-black tabular-nums">
            {data.currency === "CAD" ? "C" : "US"}${fmt(data.price)}
          </span>
          <span className={`text-xs font-bold tabular-nums ${up ? "text-green-600" : "text-red-500"}`}>
            {sign(data.change)}{fmt(data.change)} ({sign(data.changePct)}{fmt(data.changePct)}%)
          </span>
        </div>
      ) : (
        <span className="text-xs text-gray-300 italic">Unavailable</span>
      )}
    </a>
  );
}

export default function StockTicker() {
  const [tsx,  setTsx]  = useState<StockData | null>(null);
  const [nyse, setNyse] = useState<StockData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [t, n] = await Promise.all([
          fetch("/api/stock?sym=ATS.TO").then((r) => r.json()),
          fetch("/api/stock?sym=ATS").then((r)   => r.json()),
        ]);
        if (!t.error) setTsx(t);
        if (!n.error) setNyse(n);
      } catch { /* silent — shows unavailable state */ }
      setLoading(false);
    }
    load();
  }, []);

  return (
    <div className="w-full border border-gray-200 bg-white rounded-sm mb-14 overflow-hidden">
      <div className="flex items-stretch divide-x divide-gray-100 flex-wrap sm:flex-nowrap">

        {/* Live badge */}
        <div className="flex items-center gap-2 px-5 py-4 shrink-0 border-b border-gray-100 sm:border-b-0">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Live</span>
        </div>

        {/* TSE slot */}
        <Slot
          exchange="TSE"
          symbol="ATS"
          data={tsx}
          loading={loading}
          href="https://finance.yahoo.com/quote/ATS.TO"
        />

        <div className="hidden sm:block w-px bg-gray-100" />

        {/* NYSE slot */}
        <Slot
          exchange="NYSE"
          symbol="ATS"
          data={nyse}
          loading={loading}
          href="https://finance.yahoo.com/quote/ATS"
        />

        {/* Disclaimer */}
        <div className="hidden lg:flex items-center px-5 py-4 shrink-0 border-l border-gray-100">
          <span className="text-[10px] text-gray-300 uppercase tracking-widest">~15 min delay</span>
        </div>

      </div>
    </div>
  );
}
