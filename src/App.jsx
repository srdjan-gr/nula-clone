import React from 'react'

import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import Home from './Pages/Home'
import Beatz from './Pages/Beatz'
import Organic from './Pages/Organic'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>} >
      <Route  index element={<Home/>} />
      <Route path='/organic'  element={<Organic/>}/>
      <Route path='/beatz' element={<Beatz/>} />
    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
