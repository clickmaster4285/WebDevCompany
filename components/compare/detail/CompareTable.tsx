type CompareTableProps = {
  title?: string;
  subtitle?: string;
  table?: {
    headers: string[];
    rows: Record<string, string>[];
  };
};

export function CompareTable({ title, subtitle, table }: CompareTableProps) {
  if (!table) return null;

  return (
    <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.06)]">
      {(title || subtitle) && (
        <div className="border-b border-slate-100 p-6 md:p-8">
          {title && (
            <p className="text-sm font-black uppercase tracking-[0.25em] text-violet">
              {title}
            </p>
          )}

          {subtitle && (
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-500">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] border-collapse text-left">
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
              <tr
                key={rowIndex}
                className="border-t border-slate-100 transition hover:bg-slate-50"
              >
                {Object.values(row).map((value, valueIndex) => (
                  <td
                    key={valueIndex}
                    className={`px-5 py-4 text-sm leading-6 ${
                      valueIndex === 0
                        ? "font-black text-slate-950"
                        : "font-medium text-slate-600"
                    }`}
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