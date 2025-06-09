import { skills } from "../utils/utils"
import SectionTitle from "./SectionTitle"

const Skills = () => {
  return (
    <section className="mx-auto max-w-7xl px-8 py-20" id="skills">
        <SectionTitle text='My Tech Stack'/>
        <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map(skill => {
            const {id,title,icon,text} = skill
            return <article key={id}>
                <span>{icon}</span>
                <h4 className="mt-6 font-bold">{title}</h4>
                <p className="mt-2 text-slate-500">{text}</p>
            </article>
          })}  
        </div>
    </section>
  )
}

export default Skills