import HeroImg from '../assets/HeroImg.svg'
import { socialLinks } from '../utils/utils'
const Hero = () => {
  return (
    <div className='bg-blue-100 py-24'>
        <div className='mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8'>

           <section className='hidden md:block'>
                <img src={HeroImg} alt="hero img" className='h-80 lg:h-95'/>
            </section>

            <section>

            <h1 className='text-5xl font-bold tracking-wide'>Hi, <span className='text-3xl'>My name is Bola .</span></h1> 
            
            <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>Full-Stack Developer</p>
            <p className='mt-2 text-blue-900 capitalize tracking-wide'>
                Innovative - Creative - Continuous Learning
            </p>
            <div className='flex gap-x-4 mt-4'>
                {socialLinks.map(socialLink => {
                    const {id,icon,url} = socialLink
                    return <a href={url} target='_blank' key={id}>{icon}</a>
                })}
            </div>
            </section>
           
        </div>
    </div>
  )
}

export default Hero