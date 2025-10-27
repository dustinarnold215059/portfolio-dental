import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Team from './pages/Team'
import NewPatients from './pages/NewPatients'
import Resources from './pages/Resources'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="team" element={<Team />} />
        <Route path="new-patients" element={<NewPatients />} />
        <Route path="resources" element={<Resources />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
