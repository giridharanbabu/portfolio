import About from './tabs/About'
import Experience from './tabs/Experience'
import Projects from './tabs/Projects'
import Education from './tabs/Education'
import Certifications from './tabs/Certifications'
import Ongoing from './tabs/Ongoing'
import Thoughts from './tabs/Thoughts'

export default function PortfolioTabs({ active }: { active: string }) {
  return (
    /* 🔒 LOCK LAYOUT HERE */
    <div className="flex justify-center w-full">
      <div
        className="
          w-full
          max-w-3xl
          min-h-[65vh]
          transition-all
        "
      >
        {active === 'About' && <About />}
        {active === 'Experience' && <Experience />}
        {active === 'Projects' && <Projects />}
        {active === 'Certifications' && <Certifications />}
        {active === 'Education' && <Education />}
        {active === 'Ongoing' && <Ongoing />}
        {active === 'Thoughts' && <Thoughts />}
      </div>
    </div>
  )
}
