type TechnologyTableProps = {
  table?: {
    headers: string[];
    rows: Record<string, string>[];
  };
};

export function TechnologyTable({ table }: TechnologyTableProps) {
  if (!table) return null;

  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse bg-white text-left">
          <thead className="bg-slate-950 text-white">
            <tr>
              {table.headers.map((header) => (
                <th
                  key={header}
                  className="px-5 py-4 text-xs font-black uppercase tracking-[0.18em]"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {table.rows.map((row, rowIndex) => (
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
  );
}