
import { Suspense , lazy} from 'react'
import { AnimatePresence, motion } from "framer-motion";
import SkeletonLoader from './components/Skeleton'

const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Work = lazy(() => import("./components/Work"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));





function App() {
 

  return (
    
  <div>
    <Suspense fallback ={
      
      <AnimatePresence mode="wait">
      <motion.div
        key="loader"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.4 } }}
        className="absolute inset-0 z-50 bg-[#0a192f]"
      >
        <SkeletonLoader />
      </motion.div>
    </AnimatePresence>
      }>

      
    <motion.div
       initial={{ opacity: 0, filter: "blur(8px)" }}
       animate={{ opacity: 1, filter: "blur(0px)" }}
       transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Navbar/>
      <main className='max-w-6xl mx-auto px-6 sm:px-12'>
        <Hero/>
        <About/>
        <Work/>
        <Skills/>

      </main>
      <Footer/>
    </motion.div> 
    </Suspense>
  </div>

     
  )
}

export default App
