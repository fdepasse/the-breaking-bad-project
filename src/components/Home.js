import React from 'react'
import ReactPlayer from 'react-player/youtube'


export default function Home() {

  const gallery = [
    '../images/gallery1.jpg',
    '../images/gallery2.jpg',
    '../images/gallery3.jpg',
    '../images/gallery4.jpg',
    '../images/gallery5.jpg',
    '../images/gallery6.jpg',
    '../images/gallery7.jpg',
    '../images/gallery8.jpg',
    '../images/gallery9.jpg',
    '../images/gallery10.jpg',
    '../images/gallery11.jpg',
    '../images/gallery12.jpg'
  ]

  return <main>
    <section className="section">
      <div className="has-text-centered my-6">
        <img src={'../images/logo.png'} alt='Breaking Bad Logo' width="35%" />
      </div>
      <div className="buttons are-small">
        <a className="button is-primary mx-1" href="#trailer">Trailer</a>
        <a className="button is-primary mx-1" href="#gallery">Gallery</a>
      </div>
    </section>

    <section className="hero mb-6">
      <div className="hero-body has-background-primary">
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
      <div className="columns is-multiline is-centered has-background-primary">
        {gallery.map((image, i) => {
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

  // Add tiles with pictures and quotes

}
