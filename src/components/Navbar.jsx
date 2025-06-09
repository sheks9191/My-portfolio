import { navLinks } from "../utils/utils"

const Navbar = () => {
  return (
    <nav className="bg-blue-100" id="home">
       <div className="mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold">
            MERN <span className="text-blue-800">Dev</span>
        </h2>
        <div className="flex gap-x-3">
            {navLinks.map(navLink => {
              const {id,href,text} = navLink  
              return <a key={id} href={href} className="capitalize text-lg tracking-wide hover:text-blue-800 duration-400 hover:underline">{text}</a>

            })}
        </div>
       </div>
    </nav>
  )
}

export default Navbar