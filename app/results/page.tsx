
import Rules from "@/data/radio_rules.json";
import Catalogue from "@/data/standards_catalogue.json";
import Results from "@/components/Results";

export default function ResultsPage({ searchParams }: { searchParams: { market?: string; radio?: string } }) {
  const market = searchParams.market ?? "EUUK";
  const radio = searchParams.radio ?? "ble";
  return (
    <main>
      <h1 className="text-2xl font-semibold">Recommendations</h1>
      <p className="text-slate-600">Market: <b>{market}</b> • Radio: <b>{radio}</b></p>
      <Results market={market} radio={radio} rules={Rules} catalogue={Catalogue} />
    </main>
  );
}
