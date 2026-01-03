export default function TabContent({ active }: { active: string }) {
  return (
    /* 🔒 LOCKED WIDTH CONTAINER */
    <div className="flex justify-center ">
      <div className="w-full max-w-3xl">

        {active === 'about' && (
          <p className="text-slate-600 leading-relaxed">
            Software Engineer with strong expertise in AI, ML, RAG systems,
            and cloud-native data platforms across GCP, AWS, and Azure.
          </p>
        )}

        {active === 'experience' && (
          <p>Experience timeline goes here</p>
        )}

        {active === 'projects' && (
          <p>Projects and case studies</p>
        )}

        {active === 'certifications' && (
          <p>Certifications list</p>
        )}

        {active === 'education' && (
          <p>Education details</p>
        )}

        {active === 'ongoing' && (
          <p>Current research & POCs</p>
        )}

        {active === 'thoughts' && (
          <p>Blogs / AI insights</p>
        )}

      </div>
    </div>
  )
}
