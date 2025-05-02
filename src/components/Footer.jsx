import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
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
    
    <footer id='footer' className="bg-navy text-white  items-center py-12   flex justify-center mt-20  text-slate ">
      <div className=" mx-auto flex  md:w-[800px] bg-white text-primary2  rounded-3xl w-full max-w-3xl  shadow-xl p-10 flex-col items-center   gap-6">

      <p className='text-primary text-lg'>~Let's build something amazing together~</p>

        {/* Contact Info */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-start gap-4 w-full   text-xs"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
         {/* Email */}
      <div className="flex flex-row rounded-xl items-center justify-between bg-gray-100 border  border-gray-200 w-full px-4 py-3 ">

      <FaEnvelope
      className='text-accent2  text-lg  '
      
      />
   
    <div className='text-primary2 flex-1 text-xs ml-4'>
    <p>Email</p>
    <p className=" text-xs  truncate">
      {email}
    </p>
    </div>
    
    <button
      onClick={() => handleCopy(email)}
      className=" hover:text-accent2 transition  text-xl "
      title="Copy email"
    >
      <MdContentCopy  className=' transition-all hover:scale-90'/>
    </button>
  </div>
        <AnimatePresence>
          {copied === email && (
            <motion.span
              key="email-copied"
              className="text-accent2 text-xs "
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              Email copied to clipboard!
            </motion.span>
          )}
        </AnimatePresence>

        {/* Phone */}
        <div className="flex flex-row rounded-xl items-center justify-between  bg-gray-100 border  border-gray-200 w-full px-4 py-3 ">

          <FaPhone
          className='text-[#000298]  text-lg  '
          
          />
          
            <div className='text-primary2 flex-1 ml-4'>
            <p className=''>Phone</p>
            <p className="text-xs text-accent2 truncate">
              {phone}
            </p>
            </div>
            
            <button
              onClick={() => handleCopy(phone)}
              className="hover:text-accent2 transition  text-xl "
              title="Copy email"
            >
              <MdContentCopy  className=' transition-all hover:scale-90'/>
            </button>
          </div>
        <AnimatePresence>
          {copied === phone && (
            <motion.span
              key="phone-copied"
              className="text-accent2 text-xs mt-2 "
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              Phone number copied!
            </motion.span>
          )}
        </AnimatePresence>

        </motion.div>

        {/* Copyright */}
        <div className='flex flex-col md:flex  md:flex-row-reverse  w-full justify-between  '>
          

        <motion.p
          className="text-sm text-gray-600 mt-4 "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} aneroscode. 
        </motion.p>

            {/* Social Icons */}
        <motion.div
          className="flex items-center justify-center text-primary2 gap-6 text-xl "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className=" hover:text-accent2  transition-all ">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="hover:text-accent2  transition-all ">
            <FaLinkedin />  
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-accent2 transition-all ">
            <FaTwitter />
          </a>
        </motion.div>


        </div>
       

        
        {/* <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-4 text-sm text-primary hover:underline"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          ↑ Back to top
        </motion.button> */}
      </div>
    </footer>
  );
};

export default Footer;
