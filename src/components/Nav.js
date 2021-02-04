import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [search, updateSearch] = useState('')

  return <header>
    <nav>
      <input
        type="text" className="input" placeholder="Search ..."
        onChange={(event) => updateSearch(event.target.value)} value={search} />
      <ul>
        <li><Link to={'/project-2'}>Home</Link></li>
        <li><Link to={'/project-2/characters'}>Characters</Link></li>
        <li><Link to={'/project-2/episodes'}>Episodes</Link></li>
        
      </ul>
    </nav>
  </header>
}