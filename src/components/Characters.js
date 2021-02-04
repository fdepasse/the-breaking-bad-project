import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { debounce } from 'lodash'


const debouncedSave = debounce((query, updateCharacters) => {
  axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
    .then(resp => {
      updateCharacters(resp.data)
    })
}, 500)

export default function Characters() {

  const [characters, updateCharacters] = useState([])
  const [filter, updateFilter] = useState('')

  useEffect(() => {
    debouncedSave(filter, updateCharacters)
  }, [filter])
  
  return <main>
    <input
      type="text"
      placeholder="Search a character..."
      onChange={(event) => updateFilter(event.target.value)}
      value={filter}
    />
    <h1>Characters List</h1>
    {characters.filter(character => {
      return character.category.includes('Breaking Bad')
    }).map(character => {
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
