
// import Image from 'next/image'

// export default function ProfileCard() {
//   return (
//     <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5">

//       {/* IMAGE (SQUARE) */}
//       <div className="relative w-full aspect-square overflow-hidden bg-slate-100">
//         <Image
//           src="/profile.jpg"
//           alt="Profile"
//           fill
//           className="object-cover"
//           priority
//         />
//       </div>

//       {/* INFO */}
//       <div className="mt-4">
//         <h2 className="text-xl font-semibold">
//           Giridharan Chandrababu
//         </h2>
//         <p className="text-slate-600 text-sm mt-1">
//           Software Engineer – AI & Data Science
//         </p>
//         <p className="text-xs text-slate-500 mt-3 leading-relaxed">
//           7+ years building scalable AI and cloud-native platforms.
//         </p>
//       </div>

//     </div>
//   )
// }

import Image from 'next/image'

export default function ProfileCard() {
  return (
    <div className="border border-yellow-200
        bg-[#f6f8f4]
        p-4
        shadow-sm
        hover:shadow-md
        transition-shadow
        border border-green-200
        bg-gradient-to-br
      
        transition-shadowborder border-slate-200 rounded-2xl shadow-sm p-5">

      {/* SHARED WIDTH CONTAINER */}
      <div className="mx-auto w-[85%]">

        {/* IMAGE */}
        <div className="
          relative
          w-full
          aspect-square
          overflow-hidden
          rounded-2xl
          bg-slate-100
        ">
          <Image
            src="/profile.jpg"
            alt="Profile"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* INFO */}
        <div className="mt-5 text-center">
          <h2 className="text-xl font-semibold">
            Giridharan Chandrababu
          </h2>

          <p className="text-slate-600 text-sm mt-1">
            Software Engineer – AI & Data Science
          </p>

          <p className="text-xs text-slate-500 mt-3 leading-relaxed">
            7+ years building scalable AI and cloud-native platforms.
          </p>
        </div>

      </div>

    </div>
  )
}
