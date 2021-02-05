import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
    return <section className="section">
      <p>Loading in progress...</p>
    </section>
  }

  return <main>
    <section className="section">
      <div className="modal is-active">
        <div className="modal-background">
        </div>
        <div className="modal-content">
          <div className="card">
            <div className="card-image">
              <figure className="image is-3by4">
                <img src={character.char_id === 39 ?
                  'https://i.imgur.com/g9PdgRf.png'
                  : `${character.img}`} alt={`${character.name}`} />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-3">{character.name}</p>
                  <p className="subtitle is-6">aka: {character.nickname}</p>
                </div>
              </div>
              <div className="content">
                <p className="is-size-6 has-text-weight-bold">Occupation: <span className="has-text-weight-normal">{character.occupation.join(' , ')}</span>
                </p>
                <p className="is-size-6 has-text-weight-bold">Status: <span className="has-text-weight-normal">{character.status}</span>
                </p>
                <p className="is-size-6 has-text-weight-bold">Cast: <span className="has-text-weight-normal">{character.portrayed}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Link to={'/project-2/characters'}>
          <button className="modal-close is-large" aria-label="close"></button>
        </Link>
      </div>
    </section>
  </main>
}