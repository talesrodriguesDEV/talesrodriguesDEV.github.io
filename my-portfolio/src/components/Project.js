import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Project extends Component {
  render () {
    const { title, picture, link, description, language } = this.props
    let aText
    language === 'pt' ? aText = 'Confira!' : aText = 'Check out!'
    return (
      <div className="project-container">
        <img src={picture} alt={title} className='project-picture' />
        <div className='project-info'>
          <h1>{title}</h1>
          <p>{description}</p>
          <a href={link} target='_blank' rel="noreferrer">{aText}</a>
        </div>
      </div>)
  }
}

const mapStateToProps = (state) => ({
  language: state.language,
  visualMode: state.visualMode
})

Project.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(Project)
