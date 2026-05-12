import { NextRequest, NextResponse } from "next/server";

async function fetchQuote(sym: string) {
  const hosts = ["query1", "query2"];
  for (const host of hosts) {
    try {
      const res = await fetch(
        `https://${host}.finance.yahoo.com/v8/finance/chart/${sym}?interval=1d&range=1d`,
        {
          headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "Accept": "application/json",
            "Accept-Language": "en-US,en;q=0.9",
          },
          next: { revalidate: 300 },
        }
      );
      if (!res.ok) continue;
      const json = await res.json();
      const result = json?.chart?.result?.[0];
      if (!result) continue;
      const meta = result.meta;
      const price: number = meta.regularMarketPrice;
      const prev: number =
        meta.chartPreviousClose ??
        meta.regularMarketPreviousClose ??
        meta.previousClose;
      if (!price || !prev) continue;
      const change = price - prev;
      return {
        price,
        change,
        changePct: (change / prev) * 100,
        currency: (meta.currency as string) ?? "USD",
      };
    } catch { /* try next host */ }
  }
  return null;
}

export async function GET(req: NextRequest) {
  const sym = req.nextUrl.searchParams.get("sym") ?? "ATS";
  const data = await fetchQuote(sym);
  if (!data) return NextResponse.json({ error: true }, { status: 503 });
  return NextResponse.json(data);
}
