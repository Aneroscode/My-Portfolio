import { AnimatePresence, motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowCircleRight, FaArrowRight } from 'react-icons/fa';
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'react-router-dom';
import Crypto from './Crypto';
import { useState } from 'react';




const projects = [
  {
    id: 1,
    title: 'Crypto-World',
    image: '/crypto.png', 
    description:
      'A sleek, responsive crypto dashboard displaying real-time data using CoinGecko API.',
    stack: ['React', 'Tailwind', 'Framer Motion'],
    code: 'https://github.com/yourusername/crypto-dashboard',
    demo: 'https://crypto-dashboard.vercel.app',
  },
  // {
  //   id: 2,
  //   title: 'Portfolio Website',
  //   image: '/images/portfolio.png',
  //   description:
  //     'My personal portfolio showcasing my web projects, skills, and contact info.',
  //   stack: ['React', 'Tailwind', 'Vite'],
  //   code: 'https://github.com/yourusername/portfolio',
  //   demo: 'https://yourportfolio.vercel.app',
  // },
  // Add more projects here
];

// 

const Work = () => {
  const[open, setOpen] = useState(false)

  const items = projects.map((project, index) => (
    <motion.div
      key={project.id}
      className="grid grid-cols-1 md:grid-cols-2 p-8 gap-6 md:p-6 bg-[#f7f7f7]/60 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg hover:shadow-2xl transition-all max-w-5xl mx-auto "
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="p-5 md:flex md:flex-col  justify-between gap-6 w-full max-w-4xl mx-auto ">
        <div className="space-y-4">
          <h1 className="text-6xl font-[lobster two] text-primary">{project.id}</h1>
          <h3 className="text-3 xl md:text-5xl font-[yellowtail] text-accent">
            {project.title}
          </h3>
          <p className="text-primary leading-relaxed text-sm md:text-base">
            {project.description}
          </p>
        </div>

        <ul className="flex flex-wrap gap-2 border-b-2 border-primary pb-2 mt-6">
          {project.stack.map((tech, idx) => (
            <li
              key={idx}
              className="bg-accent text-background text-sm md:text-base font-medium px-3 py-1 rounded-full"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex gap-6 text-sm flex-wrap">
          <a
            href={project.code}
            target="_blank"
            rel="noreferrer"
            className="text-primary  hover:underline transition"
          >
            <FaGithub className="inline-block w-4 h-4 mr-2" />
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline transition"
          >
            <FaExternalLinkAlt className="inline-block w-4 h-4 mr-2" />
            Live Demo
          </a>
        </div>
      </div>

      <div className=" relative group w-full h-[250px] sm:h-[300px] md:h-[350px] bg-vertical-wave rounded-2xl overflow-hidden flex flex-col justify-end mt-8">
        <img
          loading="lazy"
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-2xl  "
        />
         <div className="absolute bottom-0 left-0 right-0  bg-black/50 backdrop-blur-sm  flex  items-center justify-between py-3 px-4">
            <h1 className="text-white text-sm sm:text-base md:text-lg border-l-4 border-white pl-3 ">View Case Study</h1>
            
            <FaArrowRight
            onClick={(() => setOpen(true))}
            className='text-white text-xl md:text-2xl bg-white/20 hover:bg-white/40 rounded-full p-2 transition'/>
         </div>
        
      </div>
    </motion.div>
  ));

  return (
    <>
    <section
      id="work"
      className=" px-8 md:px-12 py-12 bg-background text-primary"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold font-[berkshireswash]  mb-12 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Some Things I’ve Built
      </motion.h2>
    {items}
    
    </section>

    <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-background text-primary rounded-2xl max-w-2xl w-full p-8 shadow-lg relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.4 }}
            >
              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-2xl font-bold text-primary hover:text-accent"
              >
                &times;
              </button>

              {/* Popup content */}
              <h3 className="text-2xl font-bold mb-4 text-center font-[berkshireswash]">CRYPTO-WORLD</h3>

              <div className="space-y-4 text-slate text-base sm:text-lg leading-relaxed">
                <p>
                  I'm a <span className="text-accent font-semibold">Frontend Developer</span> who believes in turning
                  ideas into real-world digital solutions. I build websites that not only look stunning but also work seamlessly across devices.
                </p>
                <p>
                  I'm deeply skilled in <span className="text-accent font-semibold">React</span>,
                  <span className="text-accent font-semibold"> Tailwind CSS</span>, and
                  <span className="text-accent font-semibold"> Framer Motion</span>, specializing in smooth animations and responsive designs.
                </p>
                <p>
                  I love solving problems creatively and constantly push myself to learn new technologies and design patterns.
                  From UI polish to performance optimization — every detail matters to me.
                </p>
                <p>
                  Outside of work, I enjoy reading about new tech trends, experimenting with Figma designs, and contributing to open-source.
                </p>
                <p className="text-center italic font-semibold mt-6">
                  "Let's build something amazing together."
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    
    </>
  );
};


export default Work;
