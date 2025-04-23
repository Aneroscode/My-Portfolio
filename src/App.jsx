
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
    
  <div className='flex flex-col items-center gap-8 sm:gap-10 md:gap-14 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 py-10 md:py-16 max-w-screen-xl mx-auto bg-background relative'>
    <Suspense fallback ={
      
      <AnimatePresence mode="wait">
      <motion.div
        key="loader"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.4 } }}
        className="absolute inset-0 z-50 bg-[#dee5ee]"
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
      <main className='w-full '>
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
