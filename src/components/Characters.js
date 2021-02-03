import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Characters() {

  const [characters, updateCharacters] = useState([])


  useEffect(() => {
    axios.get('https://www.breakingbadapi.com/api/characters?category=Breaking+Bad')
      .then(resp => {
        updateCharacters(resp.data)
      })
  }, [])


  return <main>
    <h1>Characters List</h1>
    {characters.map(character => {
      return <div key={character.char_id}>
        <Link key={character.char_id} to={`/project-2/characters/${character.char_id}`}>
          <p>Name: {character.name}</p>
          <img
            src={character.char_id === 39 ?
              'https://i.imgur.com/g9PdgRf.png'
              : `${character.img}`}
            alt={`${character.name}`}
          />
        </Link>
        <p>Nickname: {character.nickname}</p>
        <p>Occupation: {character.occupation.join(' , ')}</p>
        <p>Status: {character.status}</p>
        <p>Cast: {character.portrayed}</p>
      </div>
    })}
  </main>
} 
