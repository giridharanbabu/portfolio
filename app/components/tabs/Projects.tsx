// 'use client'

// import projects from '@/src/data/projects.json'
// import { useState } from 'react'
// import { GithubOutlined, LinkOutlined } from '@ant-design/icons'

// const normalizeProject = (p: any) => ({
//   ...p,
//   bullets: Array.isArray(p.bullets) ? p.bullets : [],
//   tech: Array.isArray(p.tech) ? p.tech : [],
// })

// export default function Projects() {
//   const [expandedId, setExpandedId] = useState<string | null>(null)

//   return (
//     /* ✅ SAME CONTAINER AS ABOUT */
//     <section className="max-w-3xl mx-auto space-y-6">

//       {projects.map(raw => {
//         const project = normalizeProject(raw)
//         const expanded = expandedId === project.id

//         return (
//           <article
//             key={project.id}
//             className="
//               bg-white
//               border border-slate-200
//               rounded-2xl
//               p-5
//               space-y-5
//               hover:bg-slate-50
//               transition
//             "
//           >
//             {/* ================= HEADER ================= */}
//             <div className="flex items-start gap-4">
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-12 h-12 rounded-full border object-cover"
//               />

//               <div className="flex-1">
//                 <h3 className="font-semibold text-slate-900">
//                   {project.title}
//                 </h3>
//                 <p className="text-sm text-slate-600 leading-relaxed">
//                   {project.summary}
//                 </p>
//               </div>
//             </div>

//             {/* ================= EXPAND TOGGLE ================= */}
//             <button
//               onClick={() =>
//                 setExpandedId(expanded ? null : project.id)
//               }
//               className="text-sm text-slate-500 hover:text-slate-800"
//             >
//               {expanded ? 'Show less' : 'Show more'}
//             </button>

//             {/* ================= EXPANDED CONTENT ================= */}
//             {expanded && (
//               <div className="space-y-3 pt-3 border-t border-slate-200">
//                 {project.description && (
//                   <p className="text-slate-600 leading-relaxed">
//                     {project.description}
//                   </p>
//                 )}

//                 {project.bullets.length > 0 && (
//                   <ul className="list-disc pl-5 space-y-1 text-slate-600">
//                     {project.bullets.map((b: string, i: number) => (
//                       <li key={i}>{b}</li>
//                     ))}
//                   </ul>
//                 )}

//                 {project.tech.length > 0 && (
//                   <p className="text-sm text-slate-500">
//                     <strong>Tech:</strong> {project.tech.join(', ')}
//                   </p>
//                 )}
//               </div>
//             )}

//             {/* ================= ACTIONS ================= */}
//             <div className="flex gap-6 pt-2 text-sm text-slate-600">
//               {project.github && (
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   className="flex items-center gap-1 hover:text-slate-900"
//                 >
//                   <GithubOutlined /> GitHub
//                 </a>
//               )}

//               {project.demo && (
//                 <a
//                   href={project.demo}
//                   target="_blank"
//                   className="flex items-center gap-1 hover:text-slate-900"
//                 >
//                   <LinkOutlined /> Demo
//                 </a>
//               )}
//             </div>

//           </article>
//         )
//       })}
//     </section>
//   )
// }
'use client'

import projects from '@/app/data/projects.json'
import { useState } from 'react'
import { GithubOutlined, LinkOutlined } from '@ant-design/icons'

const normalizeProject = (p: any) => ({
  ...p,
  bullets: Array.isArray(p.bullets) ? p.bullets : [],
  tech: Array.isArray(p.tech) ? p.tech : [],
})

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section className="space-y-6 w-full min-w-0">
      {projects.map(raw => {
        const project = normalizeProject(raw)
        const expanded = expandedId === project.id

        return (
          <article
            key={project.id}
            className="
              w-full
              min-w-0
              border border-yellow-200
              bg-[#f6f8f4]
              p-4
              shadow-sm
              hover:shadow-md
              transition-shadow
              border border-slate-200
              rounded-2xl
              p-5
              space-y-4
              overflow-hidden
            "
          >
            {/* HEADER */}
            <div className="flex items-start gap-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-12 h-12 rounded-xl border object-cover shrink-0"
              />

              <div className="min-w-0">
                <h3 className="font-semibold text-slate-900">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {project.summary}
                </p>
              </div>
            </div>

            {/* TOGGLE */}
            <button
              onClick={() =>
                setExpandedId(expanded ? null : project.id)
              }
              className="text-sm text-slate-500 hover:text-slate-800"
            >
              {expanded ? 'Show less' : 'Show more'}
            </button>

            {/* EXPANDABLE CONTENT (VERTICAL ONLY) */}
            <div
              className={`
                transition-all duration-300 ease-in-out
                ${expanded ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}
                overflow-hidden
              `}
            >
              <div className="pt-4 space-y-3 border-t border-slate-200">
                {project.description && (
                  <p className="text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                )}

                {project.bullets.length > 0 && (
                  <ul className="list-disc pl-5 space-y-1 text-slate-600">
                    {project.bullets.map((b: string, i: number) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}

                {project.tech.length > 0 && (
                  <p className="text-sm text-slate-500">
                    <strong>Tech:</strong> {project.tech.join(', ')}
                  </p>
                )}
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex gap-6 pt-2 text-sm text-slate-600">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-1 hover:text-slate-900"
                >
                  <GithubOutlined /> GitHub
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  className="flex items-center gap-1 hover:text-slate-900"
                >
                  <LinkOutlined /> Demo
                </a>
              )}
            </div>
          </article>
        )
      })}
    </section>
  )
}
