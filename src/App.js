import React, { Fragment } from 'react'
import Home from './pages/Home'
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import './styles/index.css'
import Cart from './pages/Cart'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Search from './pages/Search'
import CustomPizza from './pages/CustomPizza'

const App = () => {
    return (
        
        <Router>
            <Fragment>
            <main>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/signin" element={<Signin/>}/>
              <Route path="/signup" element={<Signup/>}/>
             
              <Route path="/search" element={<Search/>}/>
              <Route path='/custom-pizza' element={<CustomPizza/>}/>
              
    
            </Routes>
             </main>
            </Fragment>
        </Router>
         
        
    )
}

export default App
