import Header from './components/Header'
import Hero from './components/Hero'
import Education from './components/Education'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import Footer from './components/Footer'
import Separator from './components/separator'
import About from './components/About'

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Separator/>
      <About/>
      <Separator/>
      <Education/>
      <Separator/>
      <Projects/>
      <Separator/>
      <Technologies/>
      <Footer/>
    </div>
  )
}

export default App
