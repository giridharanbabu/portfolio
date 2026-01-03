'use client'

import {
  UserOutlined,
  ProjectOutlined,
  ExperimentOutlined,
  TrophyOutlined,
  BookOutlined,
  RocketOutlined,
  BulbOutlined,
} from '@ant-design/icons'

const icons = [
  { key: 'About', icon: <UserOutlined /> },
  { key: 'Projects', icon: <ProjectOutlined /> },
  { key: 'Experience', icon: <ExperimentOutlined /> },
  { key: 'Certifications', icon: <TrophyOutlined /> },
  { key: 'Education', icon: <BookOutlined /> },
  { key: 'Ongoing', icon: <RocketOutlined /> },
  { key: 'Thoughts', icon: <BulbOutlined /> },
]

export default function TopIcons({
  active,
  setActive,
}: {
  active: string
  setActive: (tab: string) => void
}) {
  return (
    <div className="flex gap-4">
      {icons.map(item => {
        const isActive = active === item.key

        return (
          <button
            key={item.key}
            onClick={() => setActive(item.key)}
            className={`
              group
              flex items-center gap-2
              h-9
              px-1.5
              rounded-xl
              transition-all duration-200
              ${
                isActive
                  ? 'bg-green-200/70 text-green-800 shadow-sm'
                  : 'text-slate-500 hover:bg-yellow-100/70 hover:text-slate-800'
              }
            `}
          >
            {/* ICON */}
            <span className="text-sm">{item.icon}</span>

            {/* LABEL */}
            <span
              className="
                max-w-0
                overflow-hidden
                whitespace-nowrap
                text-sm
                font-medium
                transition-all duration-200
                group-hover:max-w-[120px]
                group-hover:opacity-100
                opacity-0
              "
            >
              {item.key}
            </span>
          </button>
        )
      })}
    </div>
  )
}
