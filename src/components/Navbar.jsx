import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'


export const Navbar = () => {
  return (
    <>
        <section className="navbar icon-list">
            {/* <!-- Copyright Nintendo --> */}
            <i class="nes-octocat animate"></i>
            <div>
              <h1 className='nes-text is-error'>Welcome to my space</h1>
              <Link to='/' type="button" class="nes-btn is-primary">Home</Link>
              <Link to='/about-me' type="button" class="nes-btn is-success">About Me</Link>
              <Link to='/contact' type="button" class="nes-btn is-warning">Contacts</Link>
              <Link to='/my-post' type="button" class="nes-btn is-error">Post</Link>


            </div>
            </section>
    </>
  )
}
