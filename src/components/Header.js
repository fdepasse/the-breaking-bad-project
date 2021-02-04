import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {

  return <header>
    <nav className="navbar has-background-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <Link to={'/project-2'}>
            <img src="../images/icon-navbar.png" />
          </Link>
        </div>
      </div>
      <div className="navbar-menu is-active">
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