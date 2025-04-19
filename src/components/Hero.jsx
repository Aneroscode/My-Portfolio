import { FiChevronDown } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center px-6 sm:px-12 bg-[#0a192f] text-white"
     >
      <motion.div className="max-w-4xl mx-auto flex flex-col gap-6"

            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
                
      >
        <p className="text-primary text-sm sm:text-base">Hi, my name is</p>

        <h1 className="text-4xl sm:text-5xl font-bold text-light">
          Miran Ahmad<span className="text-primary">.</span>
        </h1>

        <h2 className="text-2xl sm:text-3xl text-slate">
          I build things for the web.
        </h2>

        <p className="text-slate max-w-md">
          I'm a web developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products.
        </p>

        <div>
          <a
            href="#contact"
            className="inline-block bg-transparent border border-primary text-primary px-6 py-3 mt-4 rounded hover:bg-primary hover:text-[#0a192f] transition"
          >
            Get in Touch
          </a>
        </div>
       </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <a href="#about" className="text-primary animate-bounce text-3xl">
          <FiChevronDown />
        </a>
      </div>
    </section>
  );
};

export default Hero;
