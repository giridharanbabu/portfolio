import { CalendarOutlined } from '@ant-design/icons'

const events = [
  {
    title: 'Toronto ML Meetup',
    description: 'Attended discussions on RAG & LLM Ops',
    date: 'Oct 2024',
  },
  {
    title: 'GCP AI Community Event',
    description: 'Hands-on GenAI pipelines & Vertex AI',
    date: 'Aug 2024',
  },
  {
    title: 'Startup Tech Networking',
    description: 'AI founders & early-stage product talks',
    date: 'May 2024',
  },
]

export default function EventsCard() {
  return (
    <div className="border border-yellow-200
        bg-[#f6f8f4]
        p-4
        shadow-sm
        hover:shadow-md
        transition-shadow
       border border-slate-200 rounded-3xl shadow-sm p-6">

      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <CalendarOutlined className="text-slate-500" />
        <h3 className="font-semibold text-slate-900">
          Events & Meetups
        </h3>
      </div>

      {/* List */}
      <ul className="space-y-4">
        {events.map((event, idx) => (
          <li key={idx} className="space-y-1">
            <p className="text-sm font-medium text-slate-900">
              {event.title}
            </p>
            <p className="text-xs text-slate-600">
              {event.description}
            </p>
            <p className="text-xs text-slate-400">
              {event.date}
            </p>
          </li>
        ))}
      </ul>

    </div>
  )
}
