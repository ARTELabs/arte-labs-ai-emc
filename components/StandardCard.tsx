
export default function StandardCard({ title, clauses, link, badge }: { title: string; clauses: string[]; link?: string; badge?: string }) {
  return (
    <div className="mt-3 rounded-lg border p-3">
      <div className="flex items-center justify-between">
        <div className="font-medium">{title}</div>
        {badge && <span className="rounded-full bg-indigo-50 px-2 py-1 text-xs text-indigo-700">{badge}</span>}
      </div>
      {clauses?.length > 0 && (
        <ul className="mt-2 list-disc pl-5 text-sm">
          {clauses.map((c,i)=><li key={i}>{c}</li>)}
        </ul>
      )}
      {link && (
        <div className="mt-2 text-xs">
          <a href={link} target="_blank" rel="noopener" className="text-blue-600 underline">Official source</a>
        </div>
      )}
    </div>
  );
}
