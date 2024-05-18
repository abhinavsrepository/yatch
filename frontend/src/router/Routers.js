import React from 'react'
import {Route,Routes,Navigate} from 'react-router-dom'
const Routers = () => {
  return (
    <Routes>
        <Route path ='' element ={<Navigate/>}/>
    </Routes>
  )
}

export default Routers
