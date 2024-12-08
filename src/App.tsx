import { Route, Routes } from 'react-router'
import { Intro } from './components/Intro'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Resume } from './components/Resume'

function App() {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Intro />} />
            <Route path='/home' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='resume' element={<Resume />} />
        </Routes>
    </>
  )
}

export default App
