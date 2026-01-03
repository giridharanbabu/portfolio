// 'use client'

// import { useState } from 'react'
// import ProfileCard from '@/src/components/ProfileCard'
// import EventsCard from '@/src/components/EventsCard'
// import HighlightsCard from '@/src/components/HighlightsCard'
// import Tabs from '@/src/components/Tabs'
// import TopIcons from '@/src/components/TopIcons'

// export default function Home() {
//   const [activeTab, setActiveTab] = useState('Experience')

//   return (
//     <main className="h-screen bg-white flex flex-col overflow-hidden">

//       {/* ================= TOP BAR (FIXED) ================= */}
//       <header className="h-14 shrink-0 border-b border-slate-200 flex items-center justify-center">
//         <TopIcons active={activeTab} setActive={setActiveTab} />
//       </header>

//       {/* ================= MAIN LAYOUT (FIXED HEIGHT) ================= */}
//       <div
//         className="
//           flex-1
//           max-w-[1200px]
//           mx-auto
//           px-12
//           pt-8
//           grid
//           grid-cols-[320px_minmax(0,1fr)_280px]
//           gap-6
//           overflow-hidden
//         "
//       >


//       {/* LEFT: PROFILE + EVENTS */}
//       <aside className="flex flex-col gap-4 h-full">

//         {/* Fixed-size profile */}
//         <div className="shrink-0">
//           <ProfileCard />
//         </div>

//         {/* Fixed-size events with internal scroll */}
//         <div className="flex-1 overflow-y-auto pr-1 pb-24">
//           <EventsCard />
//         </div>

//       </aside>

//       {/* CENTER */}
//       <section className="h-full overflow-y-auto pr-2 pb-24">
//         <Tabs active={activeTab} />
//         <div className="h-6" />
//       </section>

//       {/* RIGHT */}
//       <aside className="h-full overflow-y-auto pr-1 pb-20">
//         <HighlightsCard />
//       </aside>


//       </div>

//     </main>
//   )
// }
'use client'

import { useState } from 'react'
import ProfileCard from '@/src/components/ProfileCard'
import EventsCard from '@/src/components/EventsCard'
import HighlightsCard from '@/src/components/HighlightsCard'
import Tabs from '@/src/components/Tabs'
import TopIcons from '@/src/components/TopIcons'

export default function Home() {
  const [activeTab, setActiveTab] = useState('Experience')

  return (
    <main className="h-screen flex flex-col overflow-hidden bg-white">

      {/* ================= TOP BAR ================= */}
      <header
        className="
          h-14
          shrink-0
          flex items-center justify-center
          border-b border-green-200
          bg-gradient-to-r
          from-green-100
          via-lime-100
          to-yellow-100
        "
      >
        <TopIcons active={activeTab} setActive={setActiveTab} />
      </header>

      {/* ================= MAIN LAYOUT (WHITE WINDOW) ================= */}
      <div
        className="
          flex-1
          max-w-[1400px]
          mx-auto
          px-6
          pt-8
          grid
          grid-cols-[260px_minmax(0,1fr)_220px]
          gap-6
          overflow-hidden
         bg-black/3
          transition-shadow
        "
      >
        {/* LEFT SIDEBAR */}
        <aside className="flex flex-col gap-4 h-full min-h-0 ">
          <ProfileCard />
          <EventsCard />
        </aside>

        {/* CENTER */}
        {/* <section className="h-full overflow-y-auto pb-24 min-h-0">
          <div className="max-w-[860px] mx-auto pr-2">
            <Tabs active={activeTab} />
          </div>
        </section> */}
      <section className="h-full overflow-y-auto pb-24 min-h-0">
        <div className="w-[768px] max-w-full mx-auto pr-2">
          <Tabs active={activeTab} />
        </div>
      </section>
        {/* RIGHT SIDEBAR */}
        <aside className="h-full overflow-y-auto pb-20 min-h-0">
          <HighlightsCard />
        </aside>
      </div>

    </main>
  )
}

