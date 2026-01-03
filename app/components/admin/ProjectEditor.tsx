'use client'

import { useState } from 'react'

export default function ProjectEditor() {
  const [project, setProject] = useState({
    id: '',
    title: '',
    summary: '',
    description: '',
    image: '',
    tech: '',
    bullets: '',
  })

  const output = {
    id: project.id,
    title: project.title,
    summary: project.summary,
    description: project.description,
    image: project.image,
    tech: project.tech.split(',').map(t => t.trim()),
    bullets: project.bullets.split('\n').map(b => b.trim()),
  }

  return (
    <div className="border border-slate-200 rounded-xl p-6 space-y-4 max-w-3xl">
      <h3 className="text-xl font-semibold">Add New Project</h3>

      {Object.keys(project).map(key => (
        <input
          key={key}
          placeholder={key}
          className="w-full border px-3 py-2 text-sm"
          value={(project as any)[key]}
          onChange={e =>
            setProject({ ...project, [key]: e.target.value })
          }
        />
      ))}

      <pre className="bg-slate-100 p-3 text-xs overflow-auto">
        {JSON.stringify(output, null, 2)}
      </pre>

      <p className="text-xs text-slate-500">
        Copy this JSON into <code>projects.json</code>
      </p>
    </div>
  )
}
