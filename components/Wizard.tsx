
"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Wizard() {
  const [market, setMarket] = useState("EUUK");
  const [radio, setRadio] = useState("ble");
  const router = useRouter();

  return (
    <div className="mt-6 rounded-xl border bg-white p-4">
      <label className="font-medium">Market</label>
      <select value={market} onChange={(e)=>setMarket(e.target.value)} className="mt-1 w-full rounded-md border p-2">
        <option value="EUUK">EU/UK (RED / LVD)</option>
        <option value="US">US (FCC Part 15 / NRTL Safety)</option>
      </select>

      <label className="mt-4 block font-medium">Radio type</label>
      <select value={radio} onChange={(e)=>setRadio(e.target.value)} className="mt-1 w-full rounded-md border p-2">
        <option value="ble">Bluetooth / BLE (2.4 GHz)</option>
        <option value="wifi2g4">Wi‑Fi (2.4 GHz)</option>
        <option value="wifi5g">Wi‑Fi (5 GHz)</option>
        <option value="gnss">GNSS Receiver</option>
        <option value="lteNr">Cellular (LTE/NR UE)</option>
        <option value="srdSub1g">SRD (< 1 GHz, e.g., 868 MHz)</option>
      </select>

      <button className="mt-4 rounded-md px-4 py-2 text-white" style={{ background: "linear-gradient(90deg,var(--arte-from),var(--arte-to))" }} onClick={()=>router.push(`/results?market=${market}&radio=${radio}`)}>
        Recommend
      </button>
    </div>
  );
}
