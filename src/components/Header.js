import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import navbaricon from '../images/icon-navbar.png'


export default function Header() {
  const [burgerActive, updateBurgerActive] = useState(false)

  return <header id="home">
    <nav className="navbar has-background-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <Link to={'/project-2/'}>
            <img src={navbaricon} />
          </Link>
        </div>
        <div className="navbar-item">
          <p className="has-text-white"> The Breaking Bad Project</p>
        </div>
        <a onClick={() => updateBurgerActive(!burgerActive)} role="button" className={`navbar-burger ${burgerActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className={`navbar-menu ${burgerActive ? 'is-active' : ''}`}>
        <div className="navbar-start">
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <Link
              className={`button ${burgerActive ? 'is-primary is-small has-text-weight-bold is-outlined' : 'is-light is-small has-text-weight-bold is-outlined'}`}
              to={'/project-2/characters'}>Characters</Link>
          </div>
          <div className="navbar-item">
            <Link className={`button ${burgerActive ? 'is-primary is-small has-text-weight-bold is-outlined' : 'is-light is-small has-text-weight-bold is-outlined'}`} to={'/project-2/episodes'}>Episodes</Link>
          </div>
        </div>
      </div>
    </nav>
  </header >
}