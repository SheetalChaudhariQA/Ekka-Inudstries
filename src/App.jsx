import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'sonner'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './Dashboard/Navbar'
import Services from './pages/Services'
import Footer from './pages/Footer'
import Test from './pages/Test'


const App = () => {
  return <>
    {/* <Test /> */}

    <BrowserRouter>
      <Toaster position='top-center' richColors />
      <Navbar />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />

      </Routes>
      <Footer />
    </BrowserRouter>

  </>
}

export default App