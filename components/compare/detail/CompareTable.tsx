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
    <div className="mt-8 w-full max-w-full overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.06)] sm:rounded-[2rem]">
      {(title || subtitle) && (
        <div className="border-b border-slate-100 p-4 sm:p-6 md:p-8">
          {title && (
            <p className="text-xs font-black uppercase tracking-[0.2em] text-violet sm:text-sm sm:tracking-[0.25em]">
              {title}
            </p>
          )}

          {subtitle && (
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-500 sm:leading-7">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="w-full max-w-full overflow-x-auto">
        <table className="w-full min-w-[680px] border-collapse text-left sm:min-w-[760px]">
          <thead className="bg-slate-950 text-white">
            <tr>
              {table.headers.map((header) => (
                <th
                  key={header}
                  className="whitespace-nowrap px-4 py-4 text-[11px] font-black uppercase tracking-[0.16em] sm:px-5 sm:text-xs sm:tracking-[0.18em]"
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
                    className={`px-4 py-4 text-sm leading-6 sm:px-5 ${
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