
import Wizard from "@/components/Wizard";

export default function Home() {
  return (
    <main>
      <h1 className="text-2xl font-semibold">AI Standards Recommender</h1>
      <p className="mt-2 text-slate-600">Choose your market and radio type. We’ll recommend Radio, EMC, Safety, and RF Exposure standards — including key clauses and official sources.</p>
      <Wizard />
    </main>
  );
}
