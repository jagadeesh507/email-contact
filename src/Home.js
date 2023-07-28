import React from 'react'
import { Link } from 'react-router-dom';
import './App.css';
function Home() {
  return (
    <div>
    <nav className="navBar">
        <div className="Main">
           <div className='Header'> <h1><Link to="/">ContentQL</Link></h1></div>
            <ul className='ul-items'>
            <li className='li-item1'>
          <Link to="/ContactUs">ContactUs</Link>
          </li>
          <li className='li-item2'>
         <Link to="/Apply" >Apply</Link>
         </li>
         </ul>
           </div>
    </nav>
    </div>
  )
}

export default Home