import React, { useState, useEffect } from 'react'
import axios from 'axios'



export default function Character({ match }) {
  const id = match.params.id
  const [character, updateCharacter] = useState([])
  const [loading, updateLoading] = useState(true)

  useEffect(() => {
    axios.get(`https://www.breakingbadapi.com/api/characters/${id}`)
      .then(resp => {
        updateCharacter(resp.data[0])
        updateLoading(false)
      })
  }, [])

  if (loading) {
    return <h1>Loading in progress...</h1>
  }

  return <main>
    <div>
      <p>Name: {character.name}</p>
      <img
        src={character.char_id === 39 ?
          'https://i.imgur.com/g9PdgRf.png'
          : `${character.img}`}
        alt={`${character.name}`}
      />
      <p>Nickname: {character.nickname}</p>
      <p>Occupation: {character.occupation.join(' , ')}</p>
      <p>Status: {character.status}</p>
      <p>Cast: {character.portrayed}</p>
    </div>
  </main>
}