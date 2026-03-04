import { Route, Routes } from 'react-router'
import { Intro } from './components/Intro'
import { Footer } from './components/Footer'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'

function App() {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Intro />} />
            <Route path='/home' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
        </Routes>
        <Footer />
    </>
  )
}

export default App
