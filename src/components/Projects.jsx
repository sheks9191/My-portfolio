import { projects } from "../utils/utils"
import SectionTitle from "./SectionTitle"
import { TbWorldWww } from "react-icons/tb";
import {FaGithub} from 'react-icons/fa';

const Projects = () => {
  return (
    <div className="mx-auto max-w-7xl px-8 py-20" id="projects">
        <SectionTitle text='Projects'/>

        <section className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map(project => {
                const {id,url,img,github,title,textArray} = project

                return <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-500" key={id}>
                  <img src={img} alt={title} className="w-full object-cover rounded-t-lg h-64"/>

                  <div className="capitalize p-8">
                    <h2 className="text-xl tracking-wide font-medium">{title}</h2>
                    <ul className="mt-4 text-slate-700 leading-loose text-sm">{textArray.map((text,index )=> {
                        return <li key={text+index}>{text}</li>
                    })}</ul>

                    <p className="mt-4 flex gap-x-4">
                        {url&&<a href={url} target='_blank'><TbWorldWww className="h-6 w-6 text-slate-700 hover:text-blue-800 duration-500"/></a>}
                        <a href={github} target='_blank'><FaGithub className="h-6 w-6 text-slate-700 hover:text-blue-800 duration-500"/></a>
                    </p>
                  </div>
                  
                </article>
            })}

        </section>

    </div>
  )
}

export default Projects