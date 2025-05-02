// import { motion } from 'framer-motion';
// import {
//     SiReact,
//     SiTailwindcss,
//     SiJavascript,
//     SiFramer,
//     SiGithub,
//     SiFigma,
//   } from 'react-icons/si';

// const skills = [
//   { label: 'React', level: 90, icon: <SiReact className="text-sky-400" /> },
//   { label: 'Tailwind CSS', level: 90, icon: <SiTailwindcss className="text-cyan-400" />  },
//   { label: 'JavaScript', level: 85, icon: <SiJavascript className="text-yellow-400" /> },
//   { label: 'Framer Motion', level: 75, icon: <SiFramer className="text-pink-400" />  },
//   { label: 'Git / GitHub', level: 80, icon: <SiGithub className="text-primary" /> },
//   { label: 'Figma', level: 70, icon: <SiFigma className="text-pink-500" /> },
// ];

// const Skills = () => {
//   return (
//     <section
//       id="skills"
//       className="min-h-screen px-6 sm:px-12 py-20 bg-background/80 text-primary my-20"
//     >
//       <div className="max-w-4xl mx-auto">
//         <motion.h2
//           className="text-3xl sm:text-4xl font-bold font-[berkshireswash] text-primary mb-12 text-center"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           My Skills
//         </motion.h2>

//         <div className="space-y-6">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               className="w-full"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               viewport={{ once: true }}
//             >
//               <div className="flex justify-between mb-1">
//                 <span className="text-lg">{skill.icon}</span>
//                 <span className="text-sm md:text-lg font-medium text-primary">{skill.label}</span>
//                 <span className="text-sm text-slate">{skill.level}%</span>
//               </div>
//               <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden shadow-inner">
//                 <motion.div
//                   className="h-full bg-accent rounded"
//                   initial={{ width: 0 }}
//                   whileInView={{ width: `${skill.level}%` }}
//                   transition={{ duration: 1.2, ease: 'easeOut' }}
//                   viewport={{ once: true }}
//                 />
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiFramer } from 'react-icons/si';

const skills = [
  { id: 1, name: 'React', icon: <FaReact className="text-blue-400" /> },
  { id: 2, name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
  { id: 3, name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { id: 4, name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
  { id: 5, name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
  { id: 6, name: 'Framer Motion', icon: <SiFramer className="text-pink-400" /> },
  { id: 7, name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { id: 8, name: 'GitHub', icon: <FaGithub className="text-gray-600" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-[80vh] flex flex-col items-center justify-center bg-background text-primary py-16 px-6"
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-[lobster-two] italic font-bold text-light mb-12 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My Skills
      </motion.h2>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 }
          }
        }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.id}
            className="flex flex-col items-center justify-center p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300 cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <div className="text-5xl mb-4">{skill.icon}</div>
            <p className="text-lg font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
