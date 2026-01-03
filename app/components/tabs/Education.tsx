export default function Education() {
  return (
    <section className="content-container space-y-6">

      <h2 className="text-3xl font-bold text-slate-900 text-left">
        Education
      </h2>

      <div className="space-y-4">

        <div className="border  bg-[#f6f8f4] rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-slate-900">M.Tech</h3>
          <p className="text-sm text-slate-700">
            Anna University (MIT Campus)
          </p>
          <p className="text-xs text-slate-500">2016 – 2018</p>
        </div>

        <div className="border bg-[#f6f8f4] rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-slate-900">B.Tech</h3>
          <p className="text-sm text-slate-700">
            St. Peter’s College of Engineering
          </p>
          <p className="text-xs text-slate-500">2012 – 2016</p>
        </div>

      </div>
    </section>
  )
}
