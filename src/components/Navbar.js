import React from 'react'
import { links } from '../data'
import { FaSearch } from 'react-icons/fa'

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-center'>
          <div className='logo-img'>
            <p>H</p>
          </div>
          <div className='logo-text'>
            <p>
              the<span>Ham</span>
            </p>
          </div>
          <div className='navbar-menu'>
            <ul className='menu-container'>
              {' '}
              {links.map((link) => {
                const { id, url, text } = link
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                )
              })}
            </ul>
          </div>
          <FaSearch className='navbar-search' />
        </div>
      </nav>
      <section className='headear'>
        <h1>
          The Ham is <span>Wordpress theme</span>
        </h1>
        <h2>we are creative</h2>
        <h3>Just Buy And Enjoy These Awesome Features</h3>
        <div className='navbar-btn'>
          <button className=' btn navbar-btn-explore'>EXPLORE NOW</button>
          <button className='btn'>purchase now</button>
        </div>
      </section>
    </>
  )
}

export default Navbar
