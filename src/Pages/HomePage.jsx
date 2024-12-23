import React from 'react'
import Banner from '../Components/Banner/Banner'
import { Outlet } from 'react-router-dom'
import Plant from '../Components/Plant/Plant'
import Live from '../Components/Live/Live'
import Save from '../Components/Save/Save'
import Help from '../Components/Help/Help'

const HomePage = () => {
  return (
    <>
        <Banner/>
        <Plant/>
        <Live/>
        <Save/>
        <Help/>
    
    </>
  )
}

export default HomePage