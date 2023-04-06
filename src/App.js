import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import SharedLayout from './components/SharedLayout'
import './style.scss'
import { Route,Routes } from 'react-router-dom'


function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
            {/* <Route index path="/" element={<BucketView/>} />
            <Route path="/history" element={<History />} />
            <Route path="*" element={<Error />} /> */}
        </Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App