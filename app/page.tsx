'use client'

import { useState } from 'react'
import ProfileCard from '@/app/components/ProfileCard'
import EventsCard from '@/app/components/EventsCard'
import HighlightsCard from '@/app/components/HighlightsCard'
import Tabs from '@/app/components/Tabs'
import TopIcons from '@/app/components/TopIcons'

export default function Home() {
  const [activeTab, setActiveTab] = useState('Experience')

  return (
    <main className="min-h-screen flex flex-col bg-white">

      {/* ================= TOP BAR ================= */}
      <header className="
          sticky top-0 z-50
          h-14
          flex items-center justify-center
          px-3 sm:px-6
          border-b border-green-200
          bg-gradient-to-r from-green-100 via-lime-100 to-yellow-100
        ">
        {/* <TopIcons active={activeTab} setActive={setActiveTab} /> */}
        <TopIcons
          active={activeTab}
          setActive={setActiveTab}
          
        />
      </header>

      {/* ================= MAIN ================= */}
      <div className="
        flex-1
        max-w-[1400px]
        mx-auto
        px-4 sm:px-6
        pt-4 sm:pt-8
        grid
        grid-cols-1
        lg:grid-cols-[260px_minmax(0,1fr)_220px]
        gap-4 lg:gap-6
      ">

        {/* LEFT COLUMN */}
        <aside className="
          flex flex-col gap-4
          order-1
          lg:order-none
        ">
          <ProfileCard />
          <EventsCard />
        </aside>

        {/* CENTER */}
        <section className="
          order-2 lg:order-none
          lg:h-[calc(100vh-56px)]
          lg:overflow-y-auto
          pb-4
        ">
          <div className="w-[768px] max-w-full mx-auto pr-2">
            <Tabs active={activeTab} />
          </div>
        </section>

        {/* RIGHT */}
        <aside
          className="
            order-3 lg:order-none
            -mt-2 sm:mt-0
            lg:h-[calc(100vh-56px)]
            lg:overflow-y-auto
            pb-16
          "
        >
          <HighlightsCard />
        </aside>

      </div>
    </main>
  )
}
