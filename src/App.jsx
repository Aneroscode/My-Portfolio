
import { Suspense , lazy} from 'react'
import { AnimatePresence, motion } from "framer-motion";
import SkeletonLoader from './components/Skeleton'
import Crypto from './components/Crypto';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';



const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Work = lazy(() => import("./components/Work"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));





function App() {
 

  return (
    
  <div className='flex flex-col  gap-6  md:gap-12   py-6 md:py-12 relative   '>
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
    className=''
       initial={{ opacity: 0, filter: "blur(8px)" }}
       animate={{ opacity: 1, filter: "blur(0px)" }}
       transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Navbar/>


      <Routes>
        {/* Main portfolio landing page */}
        <Route
          path="/"
          element={
           <Home/>
          }
        />

        {/* Case Study Page */}
        <Route path="/crypto" element={<Crypto />} />
      </Routes>
      <Footer />
    </motion.div> 
    </Suspense>
  </div>

     
  )
}

export default App
