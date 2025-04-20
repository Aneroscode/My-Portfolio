import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 sm:px-12 bg-background text-primary"
    >
      <motion.div
        className="max-w-4xl mx-auto flex flex-col gap-3"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-[lobster-two] italic font-bold text-light mb-4">
          About Me
        </h2>

        <p className="text-slate font-base text-lg leading-relaxed">
          Hello! I’m <span className="text-primary font-[lobster two] font-semibold">Frank Abbey</span>,
          a passionate web developer who loves turning ideas into digital
          experiences. I specialize in building exceptional front-end products
          that are fast, responsive, and accessible.
        </p>

        <p className="text-slate leading-relaxed">
          With a strong foundation in <span className="text-primary">React</span> and
          <span className="text-primary"> Tailwind CSS</span>, I create dynamic interfaces that are both visually
          appealing and user-focused. I’m also constantly exploring new
          technologies and best practices to refine my skills.
        </p>

        <p className="text-slate leading-relaxed">
          When I’m not coding, you’ll find me reading, exploring new tools, or
          contributing to open source projects.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
