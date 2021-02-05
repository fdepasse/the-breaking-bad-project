import axios from 'axios'
import React, { useEffect, useState } from 'react'
export default function Episodes() {
  const [episodes, updateEpisodes] = useState([])
  const [season, updateSeason] = useState('All')
  const images = {
    1: '../images/1.jpg',
    2: '../images/2.jpg',
    3: '../images/3.jpg',
    4: '../images/4.jpg',
    5: '../images/5.jpg',
    6: '../images/6.jpg',
    7: '../images/7.jpg',
    8: '../images/8.jpg',
    9: '../images/9.jpg',
    10: '../images/10.jpg',
    11: '../images/11.jpg',
    12: '../images/12.jpg',
    13: '../images/13.jpg',
    14: '../images/14.jpg',
    15: '../images/15.jpg',
    16: '../images/16.jpg',
    17: '../images/17.jpg',
    18: '../images/18.jpg',
    19: '../images/19.jpg',
    20: '../images/20.jpg',
    21: '../images/21.jpg',
    22: '../images/22.jpg',
    23: '../images/23.jpg',
    24: '../images/24.jpg',
    25: '../images/25.jpg',
    26: '../images/26.jpg',
    27: '../images/27.jpg',
    28: '../images/28.jpg',
    29: '../images/29.jpg',
    30: '../images/30.jpg',
    31: '../images/31.jpg',
    32: '../images/32.jpg',
    33: '../images/33.jpg',
    34: '../images/34.jpg',
    35: '../images/35.jpg',
    36: '../images/36.jpg',
    37: '../images/37.jpg',
    38: '../images/38.jpg',
    39: '../images/39.jpg',
    40: '../images/40.jpg',
    41: '../images/41.jpg',
    42: '../images/42.jpg',
    43: '../images/43.jpg',
    44: '../images/44.jpg',
    45: '../images/45.jpg',
    46: '../images/46.jpg',
    47: '../images/47.jpg',
    48: '../images/48.jpg',
    49: '../images/49.jpg',
    50: '../images/50.jpg',
    51: '../images/51.jpg',
    52: '../images/52.jpg',
    53: '../images/53.jpg',
    54: '../images/54.jpg',
    55: '../images/55.jpg',
    56: '../images/56.jpg',
    57: '../images/57.jpg',
    58: '../images/58.jpg',
    59: '../images/59.jpg',
    60: '../images/60.jpg',
    61: '../images/61.jpg',
    62: '../images/62.jpg'
  }
  useEffect(() => {
    axios.get('https://breakingbadapi.com/api/episodes?series=Breaking+Bad')
      .then(resp => {
        updateEpisodes(resp.data)
      })
  }, [])
  return <main>

    <section className="section">
      <h1 className="title">Episodes List</h1>
    </section>

    <section className="section">
      <label>Select a season</label>
      <select onChange={(event) => updateSeason(event.target.value)}>
        <option value='All'>All</option>
        <option value='1'>Season 1</option>
        <option value='2'>Season 2</option>
        <option value='3'>Season 3</option>
        <option value='4'>Season 4</option>
        <option value='5'>Season 5</option>
      </select>
    </section>
    <section className="section has-background-primary">
      {episodes.filter((episode) => {
        return 'All' === season || episode.season === season
      }).map((episode, i) => {
        return <div key={i} className="card my-3">
          <div className="card-content py-5">
            <div className="media">
              <div className="media-left">
                <figure className="image is-128x128">
                  <img src={images[episode.episode_id]} alt={`${episode.episode_id}`}/>
                </figure>
              </div>
              <div className="media-content" >
                <p className="title is-6 pb-4">Season {episode.season} - Episode {episode.episode} </p>
                <p className="subtitle is-7 has-text-weight-bold pb-2">Title: <span className="has-text-weight-normal">{episode.title}</span></p>
                <p className="subtitle is-7 has-text-weight-bold pb-5">Air Date: <span className="has-text-weight-normal">{episode.air_date}</span></p>
                <p className="subtitle is-7 has-text-weight-bold pb-4">Characters: <span className="has-text-weight-normal">{episode.characters.join(' , ')}</span></p>
              </div>
            </div>
          </div>
        </div>
      }
      )}
    </section>
  </main >
}