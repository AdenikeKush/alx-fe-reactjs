import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import './App.css'

function App() {
  return (
    <div>
      {/* Always visible */}
      <Navbar />

      {/* Page content changes by route */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
