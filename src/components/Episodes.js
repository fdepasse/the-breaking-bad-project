
import axios from 'axios'
// import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

export default function Episodes() {

  const [episodes, updateEpisodes] = useState([])

  useEffect(() => {
    axios.get('https://breakingbadapi.com/api/episodes?series=Breaking+Bad')
      .then(resp => {
        updateEpisodes(resp.data)
      })
  }, [])
  console.log(episodes)

  return <div>Episodes Page</div>


}