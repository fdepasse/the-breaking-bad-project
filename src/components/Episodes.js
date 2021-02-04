import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Episodes() {
  const [episodes, updateEpisodes] = useState([])

  useEffect(() => {
    axios.get('https://breakingbadapi.com/api/episodes?series=Breaking+Bad')
      .then(resp => {
        updateEpisodes(resp.data)
      })
  }, [])
  return <div>
    {episodes.map((episode, i) => {
      return <div key={i}>
        <h4>{episode.title}</h4>
        <h4>{episode.air_date}</h4>
        <h4>{episode.season}</h4>
        <h4>{episode.episode}</h4>
        <p>{episode.characters.join(' , ')}</p>
      </div>
    }
    )}
  </div>
}