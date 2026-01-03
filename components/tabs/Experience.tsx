// // 'use client'

// import { useState } from 'react'
// import { ArrowRightOutlined } from '@ant-design/icons'
// import { experience } from '@/src/data/portfolio'

// /* -----------------------------
//    Helper
// ------------------------------ */
// const normalizeJob = (job: any) => ({
//   ...job,
//   highlights: Array.isArray(job.highlights) ? job.highlights : [],
// })

// /* -----------------------------
//    Component
// ------------------------------ */
// export default function Experience() {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null)

//   return (
//     /* DO NOT CONTROL WIDTH HERE */
//     <section className="w-full min-w-0 space-y-8">

//       {/* ================= EXPERIENCE LIST ================= */}
//       <div className="space-y-3">
//         {experience.map((job, idx) => {
//           const normalized = normalizeJob(job)
//           const isOpen = activeIndex === idx

//           return (
//             <div key={idx} className="space-y-3">

//               {/* CARD */}
//               <button
//                 onClick={() => setActiveIndex(isOpen ? null : idx)}
//                 className="
//                   w-full min-w-0
//                   text-left
//                   border border-slate-200
//                   rounded-2xl
//                   px-5 py-4
//                   bg-white
//                   flex items-start gap-4
//                   hover:bg-slate-50
//                   transition
//                 "
//               >
//                 {/* LEFT LOGO / AVATAR */}
//                 <div className="w-11 h-11 shrink-0">
//                   {normalized.logo ? (
//                     <img
//                       src={normalized.logo}
//                       alt={normalized.company}
//                       className="
//                         w-11 h-11
//                         rounded-full
//                         object-cover
//                         border border-slate-300
//                       "
//                     />
//                   ) : (
//                     <div
//                       className="
//                         w-11 h-11
//                         rounded-full
//                         bg-slate-200
//                         flex items-center justify-center
//                         text-xs font-semibold text-slate-600
//                       "
//                     >
//                       {normalized.company?.[0]}
//                     </div>
//                   )}
//                 </div>

//                 {/* CENTER CONTENT */}
//                 <div className="flex-1 min-w-0">
//                   <h3 className="font-medium text-base text-slate-900 truncate">
//                     {normalized.role}
//                   </h3>
//                   <p className="text-sm text-slate-600 truncate">
//                     {normalized.company} · {normalized.period}
//                   </p>
//                 </div>

//                 {/* RIGHT ARROW */}
//                 <div
//                   className={`
//                     text-slate-400 pt-1 shrink-0
//                     transition-transform
//                     ${isOpen ? 'rotate-90' : ''}
//                   `}
//                 >
//                   <ArrowRightOutlined className="text-xs" />
//                 </div>
//               </button>

//               {/* DETAILS (VERTICAL ONLY) */}
//               {isOpen && normalized.highlights.length > 0 && (
//                 <ul className="
//                   // ml-16
//                   list-disc
//                   space-y-1
//                   text-sm
//                   text-slate-600
//                 ">
//                   {normalized.highlights.map((point: string, i: number) => (
//                     <li key={i}>{point}</li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           )
//         })}
//       </div>
//     </section>
//   )
// }
// 'use client'
import { useState } from 'react'
import { ArrowRightOutlined } from '@ant-design/icons'
import { experience } from '@/data/portfolio'

/* -----------------------------
   Helper
------------------------------ */
const normalizeJob = (job: any) => ({
  ...job,
  highlights: Array.isArray(job.highlights) ? job.highlights : [],
})

/* -----------------------------
   Component
------------------------------ */
export default function Experience() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    /* DO NOT CONTROL WIDTH HERE */
    <section className="w-full min-w-0 space-y-8">
      <div className="space-y-3">
        {experience.map((job, idx) => {
          const normalized = normalizeJob(job)
          const isOpen = activeIndex === idx

          return (
            <div key={idx} className="space-y-3">
              {/* CARD */}
              <button
                onClick={() => setActiveIndex(isOpen ? null : idx)}
                className="
                  w-full min-w-0
                  text-left
                  border border-slate-900
                  rounded-2xl
                  px-5 py-4
                  border border-yellow-200
                  bg-[#f6f8f4]
                  p-4
                  shadow-sm
                  hover:shadow-md
                  transition-shadow
                  flex items-start gap-4
                  hover:bg-slate-50
                  transition
                "
              >
                {/* LEFT LOGO / AVATAR */}
                <div className="w-11 h-11 shrink-0">
                  {normalized.logo ? (
                    <img
                      src={normalized.logo}
                      alt={normalized.company}
                      className="
                        w-11 h-11
                        rounded-full
                        object-cover
                        border border-slate-300
                      "
                    />
                  ) : (
                    <div
                      className="
                        w-11 h-11
                        rounded-full
                        bg-slate-200
                        flex items-center justify-center
                        text-xs font-semibold text-slate-900
                      "
                    >
                      {normalized.company?.[0]}
                    </div>
                  )}
                </div>

                {/* CENTER CONTENT */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-base text-slate-900 truncate">
                    {normalized.role}
                  </h3>
                  <p className="text-sm text-slate-600 truncate">
                    {normalized.company} · {normalized.period}
                  </p>
                </div>

                {/* RIGHT ARROW */}
                <div
                  className={`
                    text-slate-400 pt-1 shrink-0
                    transition-transform
                    ${isOpen ? 'rotate-90' : ''}
                  `}
                >
                  <ArrowRightOutlined className="text-xs" />
                </div>
              </button>

              {/* DETAILS — PROJECT-STYLE EXPAND */}
              <div
                className={`
                  transition-all duration-300 ease-in-out
                  overflow-hidden
                  ${isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}
                `}
              >
                <div className="
                  border-t border-slate-200
                  px-5 pt-3
                ">
                  {normalized.highlights.length > 0 && (
                    <ul className="
                      list-disc
                      pl-5
                      space-y-1
                      text-sm
                      text-slate-600
                    ">
                      {normalized.highlights.map((point: string, i: number) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
