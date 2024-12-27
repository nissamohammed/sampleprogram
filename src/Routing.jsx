import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import Recoil from './Recoil'
import Recoil2 from './Recoil2'
function Routing() {
  return (
    <>
    <Routes>
        <Route path={'/'} element={<App/>}/>
        <Route path={'/recoil'} element={<Recoil/>}/>
        <Route path={'/recoil2'} element={<Recoil2/>}/>
    </Routes>
    </>
  )
}

export default Routing