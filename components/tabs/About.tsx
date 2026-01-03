'use client'

import { useState } from 'react'
import { profile } from '@/data/portfolio'

export default function About() {
  const [expanded, setExpanded] = useState(false)

  const visibleItems = expanded ? profile.summary : profile.summary.slice(0, 5)
  const shouldExpand = profile.summary.length > 5

  return (
    <section className="space-y-6 w-full min-w-0">
      <article
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
        "
      >
        {/* ================= HEADER ================= */}
        <h3 className="font-bold text-slate-900 text-left">
          About
        </h3>

        {/* ================= BULLETS ================= */}
        <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600 leading-relaxed text-left">
          {visibleItems.map((text, i) => {
            const [head, ...rest] = text.split(':')
            const hasHeader = rest.length > 0

            return (
              <li key={i}>
                {hasHeader ? (
                  <>
                    <strong className="text-slate-800 font-semibold">
                      {head}:
                    </strong>{' '}
                    {rest.join(':').trim()}
                  </>
                ) : (
                  text
                )}
              </li>
            )
          })}
        </ul>

        {/* ================= TOGGLE ================= */}
        {shouldExpand && (
          <button
            onClick={() => setExpanded(prev => !prev)}
            className="text-sm text-slate-500 hover:text-slate-800 text-left"
          >
            {expanded ? 'Show less' : 'Show more'}
          </button>
        )}
      </article>
    </section>
  )
}