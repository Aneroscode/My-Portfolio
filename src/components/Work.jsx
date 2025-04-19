import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Crypto-World',
    image: '/images/crypto-dashboard.png', // Make sure to place images in public/images/
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

const Work = () => {
  return (
    <section
      id="work"
      className="min-h-screen px-6 sm:px-12 py-20 bg-background text-primary"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-light mb-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Some Things I’ve Built
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-background/80 rounded-xl overflow-hidden shadow-lg group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-primary">
                  {project.title}
                </h3>
                <p className="text-slate text-sm">{project.description}</p>
                <ul className="flex flex-wrap gap-2 text-xs text-primary mt-2">
                  {project.stack.map((tech, idx) => (
                    <li key={idx} className="bg-background/10 px-2 py-1 rounded">
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex gap-4 text-sm">
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline text-primary"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline text-light"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
