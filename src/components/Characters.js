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

    <section className="section">
      <h1 className="title">Characters List</h1>
    </section>

    <section className="section">
      <input
        className="input is-primary"
        type="text"
        placeholder="Search a character..."
        onChange={(event) => updateFilter(event.target.value)}
        value={filter}
      />
    </section>

    <section className="section has-background-primary" id="card-section">
      <div className="columns is-multiline is-centered">
        {characters.filter(character => {
          return character.category.includes('Breaking Bad')
        }).map(character => {
          return <div key={character.char_id} className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile">
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
                    <p className="title is-6">{character.name}</p>
                    <p className="subtitle is-7">aka: {character.nickname}</p>
                  </div>
                </div>
                <div className="content">
                  <Link to={`/project-2/characters/${character.char_id}`} className="is-size-7">Find out more...</Link>
                </div>
              </div>
            </div>
          </div>
        })
        }
      </div>
    </section>
  </main>
}