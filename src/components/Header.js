import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {

  return <header id="home">
    <nav className="navbar has-background-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <Link to={'/project-2'}>
            <img src="../images/icon-navbar.png" />
          </Link>
        </div>
        <div className="navbar-item">
          <p className="has-text-white"> The Breaking Bad Project</p>
        </div>
        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <Link className="button is-light is-small has-text-weight-bold is-outlined" to={'/project-2/characters'}>Characters</Link>
          </div>
          <div className="navbar-item">
            <Link className="button is-light is-small has-text-weight-bold is-outlined" to={'/project-2/episodes'}>Episodes</Link>
          </div>
        </div>
      </div>
    </nav>
  </header >
}