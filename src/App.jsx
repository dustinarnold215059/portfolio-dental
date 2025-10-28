import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'

// Lazy load pages
const Services = lazy(() => import('./pages/Services'))
const Team = lazy(() => import('./pages/Team'))
const NewPatients = lazy(() => import('./pages/NewPatients'))
const Resources = lazy(() => import('./pages/Resources'))
const Testimonials = lazy(() => import('./pages/Testimonials'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

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
