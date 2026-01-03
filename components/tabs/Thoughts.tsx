import Image from 'next/image'

export default function ThoughtsPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-1xl w-full bg-white border border-slate-400 rounded-3xl shadow-sm overflow-hidden">

        {/* Image */}
        <div className="relative h-80 bg-slate-200">
          <Image
            src="/vivek.png"
            alt="Swami Vivekananda"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Thought */}
        <div className="p-8 text-center">
          <h1 className="text-2xl font-semibold mb-4">Thought of the Day</h1>

          <p className="text-lg text-slate-700 leading-relaxed italic">
            “Never give up, for the soul knows no failure.
            <br />
            Arise, awake, and stop not until the goal is reached.”
          </p>

          <p className="mt-6 text-sm text-slate-500">
            — Swami Vivekananda
          </p>
        </div>

      </div>
    </main>
  )
}
