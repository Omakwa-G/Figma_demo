
import React from 'react';
import './App.css'
import {Routes, Route, Router} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Page/Home';
import About from './Page/About';
import Product from './Page/Product';
import Contact from './Page/Contact';




function App() {
  

  return (
    <div className="m-0 p-0 box-border bg-[#181818] text-white overflow-hidden">
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product'element={<Product/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/contact'element={<Contact/>}/>
      </Routes>

    </div>
  )
}

export default App;