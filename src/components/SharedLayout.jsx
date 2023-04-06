import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Cards from './Cards'
import Card from './Card'
import MiddleElement from './MiddleElement'
// import { relative } from 'path'

function SharedLayout() {
  return (
  <>
     <div style={{ marginTop:"4em",marginBottom:"4em",height:"36.5em",position:'absolute',width:"100%"}}>
      <MiddleElement />
   </div>
  </>
  )
}

export default SharedLayout