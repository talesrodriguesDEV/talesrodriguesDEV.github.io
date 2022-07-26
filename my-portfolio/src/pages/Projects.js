import React, { Component } from 'react'
import projects from '../data'
import Project from '../components/Project'
import TopBar from '../components/TopBar'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Projects extends Component {
  render () {
    const { language } = this.props
    let description
    language === 'pt' ? description = 'descriptionPT' : description = 'descriptionEN'
    return (
      <div className='bigger-container'>
        <TopBar atHome={false} />
        <div className='main-container'>
          <div className="projects-container">
            {projects.map((project, index) => <Project key={index} title={project.title} picture={project.picture} link={project.link} description={project[description]} />)}
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

Projects.propTypes = {
  language: PropTypes.string.isRequired,
  visualMode: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(Projects)
