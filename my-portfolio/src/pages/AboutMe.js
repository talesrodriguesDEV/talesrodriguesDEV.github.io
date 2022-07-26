import React, { Component } from 'react'
import TopBar from '../components/TopBar'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Map, Marker, ZoomControl } from 'pigeon-maps'

class AboutMe extends Component {
  render () {
    const { language } = this.props
    let title
    let text
    let mapTitle
    let certificatesTitle
    let cert1
    if (language === 'en') {
      title = <h1>A Little bit more about myself</h1>
      text = <p>I&#39;m extremely analytical in what regards life. I study Web Development at <a href='https://www.betrybe.com/' target='_blank' rel="noreferrer">Trybe</a> and I&#39;m completely focused in the pursuit of my financial independence. I love running and listening to music!</p>
      mapTitle = <h1>I live here!</h1>
      certificatesTitle = <h1>My certificates (for now...)</h1>
      cert1 = <a href='https://www.credential.net/54016758-6cc9-4ffe-8bc6-54d1a967eeca#gs.7i1go1' target='_blank' rel="noreferrer">Web Development Fundamentals</a>
    } else {
      title = <h1>Um pouco mais sobre mim</h1>
      text = <p>Sou uma pessoa bastante analítica. Estudo Desenvolvimento Web na <a href='https://www.betrybe.com/' target='_blank' rel="noreferrer">Trybe</a> e estou completamente focado na busca pela minha independência financeira. Adoro correr e ouvir música!</p>
      mapTitle = <h1>Eu moro aqui!</h1>
      certificatesTitle = <h1>Certificados (por enquanto...)</h1>
      cert1 = <a href='https://www.credential.net/54016758-6cc9-4ffe-8bc6-54d1a967eeca#gs.7i1go1' target='_blank' rel="noreferrer">Fundamentos de Desenvolvimento Web</a>
    }
    return (
      <div className='bigger-container'>
        <TopBar atHome={false} />
        <div className='main-container'>
          <div className='about-me-container'>
            <div className='text-about-me'>
              {title}
              {text}
            </div>
            <div className='map-cert-container'>
              <div className='certificates-container'>
                {certificatesTitle}
                <br/>
                <ul>
                  <li>{cert1}</li>
                </ul>
              </div>
              <div className='map-container'>
                {mapTitle}
                <br/>
                <div className='map'>
                  <Map
                    height={350}
                    width={350}
                    defaultCenter={[-16.6799, -49.255]} defaultZoom={4.5}
                  >
                    <Marker
                      width={40}
                      color='red'
                      anchor={[-16.6799, -49.255]}
                    />
                    <ZoomControl />
                  </Map>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  language: state.language,
  visualMode: state.visualMode
})

AboutMe.propTypes = {
  language: PropTypes.string.isRequired,
  visualMode: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(AboutMe)
