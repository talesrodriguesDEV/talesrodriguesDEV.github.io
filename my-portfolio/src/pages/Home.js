import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TopBar from '../components/TopBar'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Home extends Component {
  renderText = () => {
    const { language } = this.props
    let proj
    let about
    let skill
    if (language === 'pt') {
      proj = 'Projetos'
      about = 'Sobre mim'
      skill = 'Habilidades'
    } else {
      proj = 'Projects'
      about = 'About Me'
      skill = 'Skills'
    }
    return { proj, about, skill }
  }

  render () {
    const { proj, about, skill } = this.renderText()
    return (
      <div className='bigger-container'>
        <TopBar atHome={true} />
        <div className='main-container'>
          <div className='main-links-container'>
            <Link className='main-links' to="/projects">{proj}</Link>
            <Link className='main-links' to="/aboutme">{about}</Link>
            <Link className='main-links' to="/skills">{skill}</Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  language: state.language
})

Home.propTypes = {
  language: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(Home)
