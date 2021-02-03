import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return <header>
    <nav>
      <ul>
        <li><Link to={'/project-2/characters'}>Characters</Link></li>
        <li><Link to={'/project-2/episodes'}>Episodes</Link></li>
        <li><Link to={'/project-2/home'}>Home</Link></li>
      </ul>
    </nav>
  </header>
}