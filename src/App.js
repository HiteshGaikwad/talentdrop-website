import React from "react"
import "./App.css"
import "./About.css"
import {Routes,Route} from "react-router-dom"

import Home from "./Components/Home.js"
import About from "./Components/About"
import TermsConditions from "./Components/TermsConditions"
import Privacy from "./Components/Privacy"
import Signin from "./Components/Signin"
import Signup from "./Components/Signup"

const App= ()=>{

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/termsConditions" element={<TermsConditions/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/login" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      
    </div>
  )
}

export default App;