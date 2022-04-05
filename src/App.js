import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'
import logo from './images/new-logo.jpeg'

import './app.css'
import FooterComponent from './components/FooterComponent'
import  Header from "./pages/Header"
import BackToTop from "react-back-to-top-button"
// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      {/* <h1>Hello</h1> */}
      {/* <img className = "logo-img" src = {logo} /> */}
      {/* <nav>
       
        
        
        <div>
       
        <Link to="/">Home</Link>
        <Link to="/National">National</Link>
        <Link to="/Sport">Sport</Link>
        <Link to="/Entertainment">Entertainment</Link>
        <Link to="/Health">Health</Link>
        <Link to="/Crime">Crime</Link>
        <Link to="/Darbhanga">Darbhanga</Link>
        <Link to="/Patna">Patna</Link>
        <Link to="/Madhubani">Madhubani</Link>
        <Link to="/Samastipur">Samastipur</Link>
        <Link to="/Gujrat">Gujrat</Link>
        <Link to="/Delhi">Delhi</Link>
        </div>
        
        
      </nav> */}

      <Header />
      <BackToTop className="text-center"
        style={{ backgroundColor: "#d71821" }}
        children={<div className="text-light" style={{ overflow: "hidden", height: "50px" }}> ↑ </div>}
        showAt={100}
        speed={2000}
        easing="easeInOutQuint"
      ></BackToTop>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
         
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
      
      <FooterComponent />
    </Root>
    
  )
}

export default App
