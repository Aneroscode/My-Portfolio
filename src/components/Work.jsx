import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import AliceCarousel from 'react-alice-carousel'


const responsive = {
  0: { items: 1 },
  502: { items: 1 },
}

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
  {
    id: 2,
    title: 'Portfolio Website',
    image: '/images/portfolio.png',
    description:
      'My personal portfolio showcasing my web projects, skills, and contact info.',
    stack: ['React', 'Tailwind', 'Vite'],
    code: 'https://github.com/yourusername/portfolio',
    demo: 'https://yourportfolio.vercel.app',
  },
  // Add more projects here
];

// 

const Work = () => {
  const items = projects.map((project, index) => (
    <motion.div
      key={project.id}
      className="grid md:grid-cols-2 gap-4 p-4 bg-[#f7f7f7]/60 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg hover:shadow-2xl transition-all max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="p-5 md:flex md:flex-col  justify-between gap-3 ">
        <div className="space-y-4">
          <h1 className="text-6xl font-[lobster two] text-primary">{project.id}</h1>
          <h3 className="text-3xl md:text-5xl font-[yellowtail] text-[#ff6903]">
            {project.title}
          </h3>
          <p className="text-primary leading-relaxed text-sm">
            {project.description}
          </p>
        </div>

        <ul className="flex flex-wrap gap-2 border-b-2 border- pb-2 mt-4">
          {project.stack.map((tech, idx) => (
            <li
              key={idx}
              className="bg-[#ff6903] text-background text-xs md:text-base font-medium px-2 py-1 rounded-full"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex gap-4 text-sm">
          <a
            href={project.code}
            target="_blank"
            rel="noreferrer"
            className="text-primary  hover:underline transition"
          >
            <FaGithub className="inline-block w-4 h-4 mr-1" />
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:underline transition"
          >
            <FaExternalLinkAlt className="inline-block w-4 h-4 mr-1" />
            Live Demo
          </a>
        </div>
      </div>

      <div className="h-[250px] sm:h-[300px] md:h-auto">
        <img
          loading="lazy"
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover rounded-md transition-transform duration-300 sm:hover:scale-105 sm:cursor-pointer cursor-none"
        />
      </div>
    </motion.div>
  ));

  return (
    <section
      id="work"
      className="px-4 sm:px-8 md:px-12 py-20 bg-background text-primary"
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold font-[berkshireswash] text-light mb-12 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Some Things I’ve Built
      </motion.h2>

      <div className="max-w-6xl mx-auto">
        <AliceCarousel
          mouseTracking
          touchTracking
          infinite
          animationDuration={800}
          disableButtonsControls={false}
          disableDotsControls={false}
          responsive={responsive}
          items={items}
        />
      </div>
    </section>
  );
};


export default Work;
