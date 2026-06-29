export function TechnologiesSearch() {
  return (
    <section className="-mt-8 px-6">
      <div className="mx-auto max-w-4xl rounded-[1.4rem] border border-slate-200 bg-white p-4 shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <input
            type="text"
            placeholder="Search technologies..."
            className="h-12 flex-1 rounded-full border border-slate-200 bg-slate-50 px-5 text-sm font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-violet focus:bg-white"
          />

          <button className="h-12 rounded-full bg-violet px-6 text-sm font-bold text-white transition hover:bg-violet/90">
            Search
          </button>
        </div>
      </div>
    </section>
  );
}