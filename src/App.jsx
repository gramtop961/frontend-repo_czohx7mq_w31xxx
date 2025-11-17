import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Ecosystem from './components/Ecosystem'
import FeaturedGames from './components/FeaturedGames'
import TokenUtility from './components/TokenUtility'
import Roadmap from './components/Roadmap'
import Partners from './components/Partners'
import Team from './components/Team'
import Community from './components/Community'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative">
      <Navbar />
      <Hero />
      <About />
      <Ecosystem />
      <FeaturedGames />
      <TokenUtility />
      <Roadmap />
      <Partners />
      <Team />
      <Community />
      <Footer />
    </div>
  )
}

export default App
