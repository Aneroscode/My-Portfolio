import { FiChevronDown } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    
    <section
      id="hero"
      className="relative h-screen w-full bg-gradient-to-b from-[#f0f4f8] via-white to-[#f0f4f8] flex flex-col justify-center items-center "
     >
      
      <motion.div className="    flex flex-col gap-6 md:px-4 py-6  justify-center items-center rounded-xl  "

            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
                
      >
        <p className="text-primary md:text-5xl font-[yellowtail]  text-4xl font-bold">Welcome to my Portfolio</p>

      
        <h2 className="text-2xl md:text-3xl font-[lobster-two] text-black/80">
          I build things for the web.
        </h2>

        <p className=" relative self-stretch font-normal text-base mx-auto text-neutral-700 text-center max-w-[800px] md:text-lg text-black/70 ">
          I'm a web developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products.
        </p>

        <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2'>
        <Link
          to="footer"
          smooth={true}
          duration={500}
          className="inline-block bg-accent border border-white/80 shadow-lg text-background px-6 py-3 mt-4 rounded-xl hover:scale-110 transition delay-150 ease-in cursor-pointer "
        >
          Get in Touch
        </Link>
        </div>
       </motion.div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <a href="#about" className="text-blue-700 animate-bounce text-3xl">
          <FiChevronDown />
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
