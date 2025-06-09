import AboutImg from '../assets/AboutImg.svg'
import SectionTitle from './SectionTitle'
const About = () => {
  return (
    <div className="bg-white py-20" id="about">
        <section className="mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-16">
            <img src={AboutImg} alt="about img" className='w-full h-64'/>
            <article>
                <SectionTitle text='Focus. Goal-Oriented. Team-Spirit.'/>
                <p className='text-slate-500 mt-8 leading-loose'>Hello, my name is Olumide Bola.I have years of experience working with start-up tech companies in the industry. I am always motivated when it comes to working with passionate team in achieving new set goals in an effective and efficient ways. I am always open to learning something new each day and also, mastering the already acquired skills. The joy of using these skills to solve real world problems, always keep me going. I am open to remote jobs, on-site or hybrid.   </p>
            </article>

        </section>
    </div>
  )
}

export default About