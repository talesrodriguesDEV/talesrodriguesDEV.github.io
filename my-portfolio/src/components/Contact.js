import React, { Component } from 'react'
import minhaFoto from '../images/minha-foto.jpeg'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Contact extends Component {
  render () {
    const { language } = this.props
    let p1
    let p2
    let p3
    if (language === 'pt') {
      p1 = <p>Aoba!</p>
      p2 = <p>Sou o Tales! Desenvolvedor &#128578;</p>
      p3 = <p>Comé que cê tá?</p>
    } else {
      p1 = <p>Haaave you met me ?</p>
      p2 = <p>I&#39;m Tales! Web Developer &#128578;</p>
      p3 = <p>How u doin&#39; ?</p>
    }
    return (
      <div className='side-bar'>
        <div className='contact'>
          <div>
            {p1}
            {p2}
            {p3}
          </div>
          <div className='picture-links-container'>
            <img src={minhaFoto} alt="Tales" />
            <div className='links'>
              <a href="https://github.com/talesrodriguesDEV" target='_blank' rel="noreferrer"><i className="fa-brands fa-github"></i></a>
              <a href="mailto:tales00001@gmail.com"><i className="fa-solid fa-envelope"></i></a>
              <a href="https://www.linkedin.com/in/talesrodriguesdev/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
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

Contact.propTypes = {
  language: PropTypes.string.isRequired,
  visualMode: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(Contact)
