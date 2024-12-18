import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { BotFooter } from './components/BotFooter'
import { Dobleuve } from './pages/Dobleuve'
import { ScrollToTop } from './context/ScrollToTop'
import { WorkActive } from './components/WorkActive'
import { LoadingScreen } from './components/LoadingScreen'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { DrochGaleria } from './pages/DrochGaleria'
import { DrochPortfolio } from './pages/DrochPortfolio'


function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div className="flex flex-col min-h-screen" >
      {loadingComplete &&(<motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.6, ease: "easeOut" }}
      className='sticky top-0 z-50' 
      >
         <Navbar />
         </motion.div>) }
      {loadingComplete && <WorkActive />}
      <ScrollToTop />
      {loadingComplete ? (
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dobleuve" element={<Dobleuve />} />
          <Route path="/drochgaleria" element={<DrochGaleria />} />
          <Route path="/drochportfolio" element={<DrochPortfolio />} />
        </Routes>
      </div>
       ) : (
        <LoadingScreen setLoadingComplete={setLoadingComplete} />
      )}
      {loadingComplete && <Footer />}
      {loadingComplete && <BotFooter />}
    </div>
  )
}

export default App
