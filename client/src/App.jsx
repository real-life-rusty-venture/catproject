import React, { useState } from 'react'
import Auth from './components/authStuff/Auth'
import './App.css'
import { UserContext, UserContextProvider } from './components/context/UserContextProvider'
import { Routes, Route, Navigate } from "react-router-dom"
import NavBar from './components/pages/NavBar'
import Profile from './components/pages/Profile'
import Public from './components/pages/Public'
import NewCat from './components/pages/NewCat'
import ProtectedRoutes from './components/protected_routes/ProtectedRoutes'
// import ProtectedRoutes from "./ProtectedRoutes"


function App() {
  
  const { token, logout } = React.useContext(UserContext)




  // const divStyle = {
  //   backgroundColor : "#36454f"
  // }

  //this doesnt work the way i want it to on the auth page because imm not grabbing the app component yet



    const divStyle = {
      backgroundcolor : "#213547"
    }
  return (
    // <UserContextProvider>
    //   <Auth/>
    // </UserContextProvider>



    
    <div style = {divStyle}>
      {token && <NavBar logout = {logout}/>}
      <Routes>
        <Route
        exact path = "/"
        element = { token ? <Navigate to = "Profile"/> : <Auth/>}
        />
        <Route
        path = "/profile"
        element = {<ProtectedRoutes token = {token} >
          <Profile/>
        </ProtectedRoutes>}
        />
         <Route path = "/public"
         element = {<ProtectedRoutes token = {token}>
           <Public/>
         </ProtectedRoutes>}/>
        <Route path = "/newCat" element = {<ProtectedRoutes token = {token}>
          <NewCat/>
        </ProtectedRoutes>}
        />
      </Routes>
    </div>
  )
}

export default App
