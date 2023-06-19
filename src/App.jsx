import React from 'react'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useLocation } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import Home from './Pages/Home'
import Beatz from './Pages/Beatz'
import Organic from './Pages/Organic'
import Donatepg from './Pages/Donatepg'
import DonateLayout from './Layouts/DonateLayout'




// const location = useLocation()

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>} >
        <Route  index element={<Home/>} />
        <Route path='organic'  element={<Organic/>} />
        <Route path='beatz' element={<Beatz/>} />

        <Route path='donatepg' element={<DonateLayout/>} >
          <Route index element={<Donatepg/>}/>
        </Route>
      </Route>
    )
  )
  

const App = () => {
    

  return (
    <RouterProvider router={router} />
  )
}

export default App
