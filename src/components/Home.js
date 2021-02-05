import React from 'react'
import ReactPlayer from 'react-player/youtube'
import gallery1 from '../images/gallery1.jpg'
import gallery2 from '../images/gallery2.jpg'
import gallery3 from '../images/gallery3.jpg'
import gallery4 from '../images/gallery4.jpg'
import gallery5 from '../images/gallery5.jpg'
import gallery6 from '../images/gallery6.jpg'
import gallery7 from '../images/gallery7.jpg'
import gallery8 from '../images/gallery8.jpg'
import gallery9 from '../images/gallery9.jpg'
import gallery10 from '../images/gallery10.jpg'
import gallery11 from '../images/gallery11.jpg'
import gallery12 from '../images/gallery12.jpg'
import logo from '../images/logo.png'


export default function Home() {

  const gallery = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery7,
    gallery8,
    gallery9,
    gallery10,
    gallery11,
    gallery12
  ]

  return <main>
    <section className="section">
      <div className="has-text-centered my-6">
        <img src={logo} alt='Breaking Bad Logo' width="35%" />
      </div>
      <div className="buttons are-small">
        <a className="button is-primary mx-1" href="#trailer">Trailer</a>
        <a className="button is-primary mx-1" href="#gallery">Gallery</a>
      </div>
    </section>

    <section className="hero mb-6">
      <div className="hero-body has-background-info">
        <img width={'100%'} src={'https://images.hdqwalls.com/download/breaking-bad-van-artwork-27-1920x1080.jpg'} alt='' />
      </div>
    </section>

    <section className="section mb-6" id="trailer">
      <a className="button is-small is-primary mb-3" href="#home">Back to top</a>
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=lrcqbavlbyQ&ab_channel=kimi"
          width="100%"
        />
      </div>
    </section>

    <section className="section" id="gallery">
      <a className="button is-small is-primary mb-5" href="#home">Back to top</a>
      <div className="columns is-multiline is-centered has-background-info">
        {gallery.map((image, i) => {
          console.log(image)
          return <div key={i} className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile">
            <div className="card">
              <div className="card-image">
                <figure className="image is-3by4">
                  <img src={image} alt="artwork" />
                </figure>
              </div>
            </div>
          </div>
        })}
      </div>
    </section>

  </main>
}
