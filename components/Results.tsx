
"use client";
import StandardCard from "./StandardCard";
import ExportButton from "./ExportButton";

export default function Results({ market, radio, rules, catalogue }: any) {
  const ruleSet = market === "EUUK" ? rules.euUkRadioRules : rules.usRadioRules;
  const match   = ruleSet.find((r: any) => r.radioType === radio);
  if(!match) return <p className="mt-4 text-red-600">No rule match found.</p>;

  const safetyCat = catalogue.find((c: any)=>c.id==="EN_IEC_62368_1");
  const rfCat     = catalogue.find((c: any)=>c.id==="EN_IEC_62311");

  const payload = {
    market, radio,
    radioStandards: market==="EUUK" ? match.radioStandards.map((s:any)=>s.id) : match.fcc.map((s:any)=>`FCC ${s.section}`),
    emc: market==="EUUK" ? [match.emcCommon?.id, match.emcTech?.id, ...(match.immunityTests||[]).map((t:any)=>t.id)] : [`Measurement: ${match.measurement?.join(", ")}`, `Labeling: ${match.labeling?.join(", ")}`],
    safety: [safetyCat?.title || "EN/IEC 62368-1"],
    rfExposure: [rfCat?.title || "EN/IEC 62311"],
    citations: [
      "ETSI standards: https://www.etsi.org/standards-search",
      "FCC eCFR Part 15: https://www.ecfr.gov/current/title-47/part-15",
      "IEC Webstore 62368-1: https://webstore.iec.ch/en/publication/27412",
      "IEC Webstore 62311: https://webstore.iec.ch/en/publication/33985"
    ]
  };

  return (
    <section className="mt-4 grid gap-4 md:grid-cols-2">
      <div className="rounded-xl border bg-white p-4">
        <h2 className="text-lg font-semibold">Radio</h2>
        {market==="EUUK" ? (
          match.radioStandards.map((s:any, i:number)=>(<StandardCard key={i} title={s.id} clauses={s.clauses} link={s.officialUrl} />))
        ) : (
          match.fcc.map((s:any, i:number)=>(<StandardCard key={i} title={`FCC ${s.section}`} clauses={[]} link={s.officialUrl} />))
        )}
      </div>

      <div className="rounded-xl border bg-white p-4">
        <h2 className="text-lg font-semibold">EMC</h2>
        {market==="EUUK" ? (
          <>
            <StandardCard title={match.emcCommon?.id} clauses={[]} link={match.emcCommon?.officialUrl} />
            <StandardCard title={match.emcTech?.id}   clauses={[]} link={match.emcTech?.officialUrl} />
            <div className="mt-2 text-sm text-slate-600">Immunity: {(match.immunityTests||[]).map((t:any)=>t.id).join(", ")}</div>
          </>
        ) : (
          <>
            <div className="text-sm text-slate-600">Measurement: {match.measurement.join(", ")}</div>
            <div className="text-sm text-slate-600">Labeling/User Info: {match.labeling.join(", ")}</div>
          </>
        )}
      </div>

      <div className="rounded-xl border bg-white p-4">
        <h2 className="text-lg font-semibold">Safety</h2>
        <StandardCard title={safetyCat?.title || "EN/IEC 62368-1"} clauses={(safetyCat?.editions||[]).map((e:any)=>`${e.label}`)} link={safetyCat?.editions?.[0]?.officialUrl} badge="Safety" />
        <div className="mt-2 text-xs text-slate-500">IEC 62368‑1 (2018/2023). Check current EU/EN OJEU status; UL/CSA 62368‑1 used for NRTL in NA.</div>
      </div>

      <div className="rounded-xl border bg-white p-4">
        <h2 className="text-lg font-semibold">RF Exposure</h2>
        <StandardCard title={rfCat?.title || "EN/IEC 62311"} clauses={(rfCat?.editions||[]).map((e:any)=>`${e.label}`)} link={rfCat?.editions?.[0]?.officialUrl} badge="EMF" />
        <div className="mt-2 text-xs text-slate-500">Generic EMF assessment per EN/IEC 62311 (0 Hz–300 GHz).</div>
      </div>

      <div className="md:col-span-2">
        <ExportButton payload={payload} />
      </div>
    </section>
  );
}
