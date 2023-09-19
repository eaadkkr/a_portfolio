import './App.css'
import About from './components/About'
import CV from './components/CV'
import Footer from './components/Footer'
import FrontPage from './components/FrontPage'
import Navbar from './components/Nav/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Skills from './components/Skills'

function App() {

  return (
    <>
      <Navbar />

      <FrontPage />

      <Skills />

      <About />

      <CV />

      <Footer />

      <ScrollToTop />
    </>
  )
}

export default App
