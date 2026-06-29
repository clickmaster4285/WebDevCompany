type TechnologyOutcomeProps = {
  challenge?: string;
  solution?: string;
  results?: {
    headers: string[];
    rows: Record<string, string>[];
  };
};

export function TechnologyOutcome({
  challenge,
  solution,
  results,
}: TechnologyOutcomeProps) {
  if (!challenge && !solution && !results) return null;

  return (
    <div className="mt-8">
      {(challenge || solution) && (
        <div className="grid gap-5 md:grid-cols-2">
          {challenge && (
            <div className="rounded-2xl border border-red-100 bg-red-50 p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-red-500">
                Challenge
              </p>

              <p className="mt-3 text-sm font-semibold leading-7 text-slate-700">
                {challenge}
              </p>
            </div>
          )}

          {solution && (
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600">
                Solution
              </p>

              <p className="mt-3 text-sm font-semibold leading-7 text-slate-700">
                {solution}
              </p>
            </div>
          )}
        </div>
      )}

      {results && (
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
          <div className="bg-slate-950 px-5 py-4">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-white">
              Results
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse bg-white text-left">
              <thead className="bg-slate-100">
                <tr>
                  {results.headers.map((header) => (
                    <th
                      key={header}
                      className="px-5 py-4 text-xs font-black uppercase tracking-[0.18em] text-slate-500"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {results.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="border-t border-slate-100">
                    {Object.values(row).map((value, valueIndex) => (
                      <td
                        key={valueIndex}
                        className="px-5 py-4 text-sm font-medium leading-6 text-slate-600"
                      >
                        {String(value)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}