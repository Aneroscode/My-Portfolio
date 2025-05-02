// import { AnimatePresence, motion } from 'framer-motion';
// import { FaGithub, FaExternalLinkAlt, FaArrowCircleRight, FaArrowRight } from 'react-icons/fa';
// import AliceCarousel from 'react-alice-carousel'
// import { Link } from 'react-router-dom';
// import Crypto from './Crypto';
// import { useState } from 'react';




// const projects = [
//   {
//     id: 1,
//     title: 'Crypto-World',
//     image: '/crypto.png', 
//     description:
//       'A sleek, responsive crypto dashboard displaying real-time data using CoinGecko API.',
//     stack: ['React', 'Tailwind', 'Framer Motion'],
//     code: 'https://github.com/yourusername/crypto-dashboard',
//     demo: 'https://crypto-dashboard.vercel.app',
//   },
//   {
//     id: 2,
//     title: 'Portfolio Website',
//     image: '/images/portfolio.png',
//     description:
//       'My personal portfolio showcasing my web projects, skills, and contact info.',
//     stack: ['React', 'Tailwind', 'Vite'],
//     code: 'https://github.com/yourusername/portfolio',
//     demo: 'https://yourportfolio.vercel.app',
//   },
  
// ];

// // 

// const Work = () => {
//   const[open, setOpen] = useState(false)

//   const items = projects.map((project, index) => (
//     <div className=' '>
//     <motion.div
//       key={project.id}
//       className=" p-8 gap-6 md:p-6 bg-[#fafafa] backdrop-blur-lg    border border-white/20 rounded-2xl shadow-lg hover:shadow-2xl transition-all max-w-md mx-auto "
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.7, delay: index * 0.2 }}
//       viewport={{ once: true }}
//     >
//       <div className="p-5 md:flex md:flex-col items-center   justify-between gap-6 w-full max-w-4xl mx-auto ">
//         <div className="space-y-4 h-[300px]">
//           <h3 className="text-3 xl md:text-5xl font-[yellowtail] text-accent">
//             {project.title}
//           </h3>
//           <p className="text-primary leading-relaxed text-sm md:text-base">
//             {project.description}
//           </p>
//         </div>

//         <div className="absolute bottom-0 left-0 right-0   bg-white/80 backdrop-blur-sm bg-opacity/70  flex  items-center justify-between py-3 px-4">
//             <h1 className="text-accent text-sm sm:text-base md:text-lg border-l-4 border-gray-500 pl-3 ">View Case Study</h1>
            
//             <FaArrowRight
//             onClick={(() => setOpen(true))}
//             className='text-white text-2xl md:text-3xl bg-accent hover:bg-accent/40 hover:text-accent rounded-full p-2 transition'/>
//          </div>

//         <div className="mt-6 flex flex-row gap-6 text-sm mb-6">
//           <a
//             href={project.code}
//             target="_blank"
//             rel="noreferrer"
//             className="text-primary  hover:underline transition"
//           >
//             <FaGithub className="inline-block w-4 h-4 mr-2" />
//             GitHub
//           </a>
//           <a
//             href={project.demo}
//             target="_blank"
//             rel="noreferrer"
//             className="text-primary hover:underline transition"
//           >
//             <FaExternalLinkAlt className="inline-block w-4 h-4 mr-2" />
//             Live Demo
//           </a>
//         </div>
//       </div>

      
//     </motion.div>
//     </div>
//   ));

//   return (
//     <>
//     <section
//       id="work"
//       className=" px-8 md:px-12 py-12   bg-background text-primary"
//     >
//       <motion.h2
//         className="text-3xl md:text-4xl font-bold font-[berkshireswash]  mb-12 text-center"
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         Some Things I’ve Built
//       </motion.h2>
//       <div className=' flex flex-col md:flex-row gap-8 '>
//        {items}

//       </div>
    
    
//     </section>

//     <AnimatePresence>
//         {open && (
//           <motion.div
//             className="fixed inset-0 h-fit  bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 "
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="bg-background text-primary rounded-2xl max-w-2xl w-full p-8 shadow-lg relative"
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               exit={{ scale: 0.8 }}
//               transition={{ duration: 0.4 }}
//             >
//               {/* Close button */}
//               <button
//                 onClick={() => setOpen(false)}
//                 className="absolute top-4 right-4 text-2xl font-bold text-primary hover:text-accent"
//               >
//                 &times;
//               </button>

//               {/* Popup content */}
//               <Crypto/>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>

    
//     </>
//   );
// };


// export default Work;

import { motion,AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Crypto from './Crypto';
import { Link } from 'react-router-dom';


const projects = [
  {
    id: 1,
    slug: 'crypto', 
    title: 'Crypto Dashboard',
    description: 'A live crypto price tracker using CoinGecko API and React.',
    image: '/crypto.png',
    link: '#',
    caseStudyLink: '/crypto',
  },

  {
    id: 2,
    slug:'portfolio',
    title: 'Portfolio Website',
    description: 'My personal portfolio showcasing my skills and projects.',
    image: 'https://via.placeholder.com/400x250?text=Portfolio+Website',
    link: '#',
    caseStudyLink: '/case-study/portfolio-website',
  },

  {
    id: 3,
    slug:'e-commerce',
    title: 'E-commerce App',
    description: 'A fully functional e-commerce front-end built with React and Tailwind.',
    image: 'https://via.placeholder.com/400x250?text=E-commerce+App',
    link: '#',
    caseStudyLink: '/case-study/ecommerce-app',
  },
];

const Projects = () => {
  const[open, setOpen] = useState(false)

  return (
    <section
      id="work"
      className="min-h-[80vh] flex flex-col items-center justify-center bg-background text-primary py-16 px-6"
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-[lobster-two] italic font-bold text-light mb-12 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="rounded-3xl bg-neutral-50 border border-solid border-[#efefef]   shadow-xl overflow-hidden hover:scale-105 hover:shadow-lg transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover "
            />

            <div className="p-6  bg-[#fcfcfc] border border-solid border-[#efefef] ">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-3 mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent text-background px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition"
                >
                  View Project
                </a>

                <Link
                  to={project.caseStudyLink}
                  className="inline-block border border-accent text-accent px-4 py-2 rounded-full text-sm font-semibold hover:bg-accent hover:text-background transition"
                >
                  Case Study
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
        
      </div>
      <AnimatePresence>
         {open && (
          <motion.div
          key="modal-backdrop"
            className="fixed inset-0 h-fit  bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
            key="modal-backdrop"
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
              <Crypto/>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

