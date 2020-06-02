import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>I am Stan Kutlin</strong>, just a student
        <br />
        of Moscow Witte University 
        <br />
        crafted by <a href="https://dothis.tech">dothis.tech</a>.
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
