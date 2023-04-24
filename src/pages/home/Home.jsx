/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from 'react-router-dom'
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';

import './Home.css'
import Search from '../search/Search';

function Home() {
  return (
    <div className='home'>
      <div className="home_header">
        <div className="header_left">
          <Link to='/about' >About</Link>
          <Link to='/store'>Store</Link>
        </div>
        <div className="header_right">
          <Link to='/gmail'>Gmail</Link>
          <Link to='/images'>Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className="home_body">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google Logo" />
        <div className="input_container">
          {/* hideButtons */}
         <Search />
        </div>
      </div>
    </div>
  )
}

export default Home