import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'


import './App.css'
import NavBar from './components/NavBar';
import Root from './pages/Root';
import Projects from './pages/Projects';

import { AnimatePresence } from 'framer-motion';
import ProjectLayout from './layouts/ProjectLayout';
import About from './components/About';



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: 
      <>
        <NavBar />
        <Root /> 
      </>,
    },
    {
      path: 'projects',
      element: 
      <>
        <NavBar />
        <ProjectLayout />
      </>
    }, 
    {
      path: 'about',
      element: 
      <>
        <NavBar />
        <About />
      </>
    }
    
  ])

  return (
    
  <RouterProvider router={router} />
  )
}

export default App
