import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'

// pages import

import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'
import Blog from './pages/Blog.jsx'
import Contact from './pages/Contact.jsx'

import Error from './pages/Error.jsx'
import Navbar from './components/Navbar.jsx'
import User from './pages/User'


const App = () => {
  return (
    <BrowserRouter>

        <Navbar />

       <Routes>

            <Route path='/' element={<Home />}/>
            <Route path='/blog' element={<Blogs />}/>
            <Route path='/blog/:title' element={<Blog />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/user/' element={<User />} />
            <Route path='*' element={<Error />}/>

           




       </Routes>


    </BrowserRouter>
  )
}

export default App
