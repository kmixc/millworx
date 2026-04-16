import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//COMPONENTS
import Navbar from './components/Navbar'
import Footer from './components/Footer'

//PAGES
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import ProjectsDetail from './pages/ProjectsDetail'
import Contact from './pages/Contact'


import './App.css'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectsDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
