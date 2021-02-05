import axios from 'axios'
import React, { useEffect, useState } from 'react'
import image1 from '../images/1.jpg'
import image2 from '../images/2.jpg'
import image3 from '../images/3.jpg'
import image4 from '../images/4.jpg'
import image5 from '../images/5.jpg'
import image6 from '../images/6.jpg'
import image7 from '../images/7.jpg'
import image8 from '../images/8.jpg'
import image9 from '../images/9.jpg'
import image10 from '../images/10.jpg'
import image11 from '../images/11.jpg'
import image12 from '../images/12.jpg'
import image13 from '../images/13.jpg'
import image14 from '../images/14.jpg'
import image15 from '../images/15.jpg'
import image16 from '../images/16.jpg'
import image17 from '../images/17.jpg'
import image18 from '../images/18.jpg'
import image19 from '../images/19.jpg'
import image20 from '../images/20.jpg'
import image21 from '../images/21.jpg'
import image22 from '../images/22.jpg'
import image23 from '../images/23.jpg'
import image24 from '../images/24.jpg'
import image25 from '../images/25.jpg'
import image26 from '../images/26.jpg'
import image27 from '../images/27.jpg'
import image28 from '../images/28.jpg'
import image29 from '../images/29.jpg'
import image30 from '../images/30.jpg'
import image31 from '../images/31.jpg'
import image32 from '../images/32.jpg'
import image33 from '../images/33.jpg'
import image34 from '../images/34.jpg'
import image35 from '../images/35.jpg'
import image36 from '../images/36.jpg'
import image37 from '../images/37.jpg'
import image38 from '../images/38.jpg'
import image39 from '../images/39.jpg'
import image40 from '../images/40.jpg'
import image41 from '../images/41.jpg'
import image42 from '../images/42.jpg'
import image43 from '../images/43.jpg'
import image44 from '../images/44.jpg'
import image45 from '../images/45.jpg'
import image46 from '../images/46.jpg'
import image47 from '../images/47.jpg'
import image48 from '../images/48.jpg'
import image49 from '../images/49.jpg'
import image50 from '../images/50.jpg'
import image51 from '../images/51.jpg'
import image52 from '../images/52.jpg'
import image53 from '../images/53.jpg'
import image54 from '../images/54.jpg'
import image55 from '../images/55.jpg'
import image56 from '../images/56.jpg'
import image57 from '../images/57.jpg'
import image58 from '../images/58.jpg'
import image59 from '../images/59.jpg'
import image60 from '../images/60.jpg'
import image61 from '../images/61.jpg'
import image62 from '../images/62.jpg'

export default function Episodes() {
  const [episodes, updateEpisodes] = useState([])
  const [season, updateSeason] = useState('All')

  const images = {
    1: image1,
    2: image2,
    3: image3,
    4: image4,
    5: image5,
    6: image6,
    7: image7,
    8: image8,
    9: image9,
    10: image10,
    11: image11,
    12: image12,
    13: image13,
    14: image14,
    15: image15,
    16: image16,
    17: image17,
    18: image18,
    19: image19,
    20: image20,
    21: image21,
    22: image22,
    23: image23,
    24: image24,
    25: image25,
    26: image26,
    27: image27,
    28: image28,
    29: image29,
    30: image30,
    31: image31,
    32: image32,
    33: image33,
    34: image34,
    35: image35,
    36: image36,
    37: image37,
    38: image38,
    39: image39,
    40: image40,
    41: image41,
    42: image42,
    43: image43,
    44: image44,
    45: image45,
    46: image46,
    47: image47,
    48: image48,
    49: image49,
    50: image50,
    51: image51,
    52: image52,
    53: image53,
    54: image54,
    55: image55,
    56: image56,
    57: image57,
    58: image58,
    59: image59,
    60: image60,
    61: image61,
    62: image62
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

    <section className="section">
      <div className="column has-background-info">
        {episodes.filter((episode) => {
          return 'All' === season || episode.season === season
        }).map((episode, i) => {
          return <div key={i} className="card my-4">
            <div className="card-content py-5">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-128x128">
                    <img src={images[episode.episode_id]} alt={`${episode.episode_id}`} />
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
      </div>
    </section>
  </main >
}