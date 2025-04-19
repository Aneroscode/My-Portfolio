import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { MdContentCopy } from "react-icons/md";


const Footer = () => {
    const [copied, setCopied] = useState("");

    const handleCopy = (text) => {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(text);
        setTimeout(() => setCopied(""), 2000);
      });
    };
    

  const email = "frankabbey2000@gmail.com";
  const phone = "+233548689882";

  return (
    
    <footer id='footer' className="bg-[#f7f7f7]/80 rounded-2xl text-slate py-10 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        {/* Social Icons */}
        <motion.div
          className="flex gap-6 text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className=" text-primary  transition-all hover:scale-150">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="text-primary  transition-all hover:scale-150">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" className="text-primary transition-all hover:scale-150">
            <FaTwitter />
          </a>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="flex flex-col items-center gap-4 w-full  max-w-md text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
         {/* Email */}
  <div className="flex items-center justify-between bg-[#f7f7f7]/60 bg-opacity/70 border border-solid border-[#efefef] w-full px-4 py-3 rounded-md">
    <p className="text-primary text-lg font-semi-bold truncate">
      📧 {email}
    </p>
    <button
      onClick={() => handleCopy(email)}
      className="text-primary hover:text-primary transition text-xl ml-3"
      title="Copy email"
    >
      <MdContentCopy />
    </button>
  </div>
        {copied === email && (
            <span className="text-primary text-xs -mt-3 mb-1 text-center">
            Email copied to clipboard!
            </span>
        )}

        {/* Phone */}
        <div className="flex items-center justify-between bg-[#f7f7f7]/60 bg-opacity-70 border border-solid border-[#efefef]  w-full px-4 py-3 rounded-md">
            <p className="text-primary text-lg  font-semi-bold truncate">
            📱 {phone}
            </p>
            <button
            onClick={() => handleCopy(phone)}
            className="text-primary hover:text-primary transition text-xl ml-3"
            title="Copy phone"
            >
            <MdContentCopy />
            </button>
        </div>
        {copied === phone && (
            <span className="text-primary text-xs -mt-3 mb-1 text-center">
            Phone number copied!
            </span>
        )}
        </motion.div>

        {/* Copyright */}
        <motion.p
          className="text-sm text-black/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} aneroscode. Built with React & Tailwind CSS.
        </motion.p>

        {/* Back to Top */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-4 text-sm text-primary hover:underline"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          ↑ Back to top
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
