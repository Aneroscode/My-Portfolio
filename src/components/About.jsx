import { AnimatePresence, easeOut, motion } from 'framer-motion';
import { useState } from 'react';

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="min-h-screen flex items-center justify-center px-4 sm:px-12 bg-background text-primary"
//     >
//       <motion.div
//         className="max-w-4xl mx-auto flex flex-col gap-6"
//         initial={{ opacity: 0, scale: 0.95 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8, ease: easeOut }}
//         viewport={{ once: true }}
//       >
//         <h2 className="text-3xl sm:text-4xl font-[lobster-two] italic font-bold text-light mb-6 text-center">
//           About Me
//         </h2>

//         <p className=" text-slate text-base sm:text-lg leading-relaxed">
//           Hello! I’m <span className="text-accent font-[lobster-two] font-semibold">Frank Abbey</span>,
//           a passionate web developer who loves turning ideas into digital
//           experiences. I specialize in building exceptional front-end products
//           that are fast, responsive, and accessible.
//         </p>

//         <p className=" text-slate text-base sm:text-lg leading-relaxed">
//           With a strong foundation in <span className="text-accent font-semibold">React</span> and
//           <span className="text-accent font-semibold"> Tailwind CSS</span>, I create dynamic interfaces that are both visually
//           appealing and user-focused. I’m also constantly exploring new
//           technologies and best practices to refine my skills.
//         </p>

//         <p className="text-slate text-base sm:text-lg leading-relaxed">
//           When I’m not coding, you’ll find me reading, exploring new tools, or
//           contributing to open source projects.
//         </p>
//       </motion.div>
//     </section>
//   );
// };

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <section
      id="about"
      className="min-h-[100px] mt-10 mb-36 flex flex-col items-center justify-center px-4 sm:px-12 bg-background text-primary"
    >
      <motion.div
        className="max-w-4xl mx-auto flex flex-col text- gap-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-[lobster-two] italic font-bold text-light mb-6 ">
          About Me
        </h2>

        <p className="text-slate text-base sm:text-lg leading-relaxed">
          Hi, I'm <span className="text-accent font-[lobster-two] font-semibold">Frank Abbey</span>, a front-end developer with a passion for crafting clean, responsive, and user-focused web experiences. I specialize in building modern interfaces using <span className="text-accent font-semibold">React</span>, <span className="text-accent font-semibold">Tailwind CSS</span>, and <span className="text-accent font-semibold">Framer Motion</span> to deliver seamless and interactive UI designs.
        </p>

        <p className="text-slate text-base sm:text-lg leading-relaxed mt-4">
          My work blends creativity and performance, ensuring every project not only looks great but performs efficiently across all devices. I enjoy translating design concepts into functional products, focusing on accessibility, reusability, and intuitive user journeys.
        </p>

        <p className="text-slate text-base sm:text-lg leading-relaxed mt-4">
          When I'm not coding, you'll find me exploring new design trends, building side projects, or contributing to open source communities. I'm always eager to learn and collaborate on meaningful digital solutions.
        </p>


        {/* Button to open popup */}
        <button
          onClick={() => setIsOpen(true)}
          className="mt-6 px-6 py-3 bg-accent  mx-auto border-white/80 shadow-lg  text-background rounded-xl hover:scale-110 hover:bg-accent/80 transition"
        >
          Read More
        </button>
      </motion.div>

      </section>

      {/* Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 mb-[700px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-background text-primary rounded-2xl max-w-2xl w-full p-8 shadow-2xl relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {/* Close button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-2xl font-bold text-primary hover:text-accent"
              >
                &times;
              </button>

              {/* Popup content */}
              <h3 className="text-2xl font-bold mb-6 text-center font-[berkshireswash]">More About Me</h3>

              <div className="space-y-4 text-slate text-base sm:text-lg leading-relaxed">
                <p>
                  I'm a <span className="text-accent font-semibold">Web Developer</span> who believes in turning
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

export default About;
