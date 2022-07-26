import React, { Component } from 'react'
import TopBar from '../components/TopBar'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Skills extends Component {
  render () {
    const { language } = this.props
    let humanSkills
    let workSkills
    if (language === 'en') {
      humanSkills = (
        <div className='skills-block'>
          <h1>My Best Human Skills</h1>
          <br />
          <ul>
            <li>Analytical Capability</li>
            <li>Willpower</li>
            <li>Emotional Intelligence</li>
            <li>Problem Solving</li>
            <li>Focus</li>
            <li>Commitment</li>
            <li>Responsibility</li>
          </ul>
        </div>)
      workSkills = (
        <div className='skills-block'>
          <h1>My Stacks</h1>
          <br />
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>RTL</li>
            <li>Agile Methodologies</li>
            <li>JavaScript ES6</li>
            <li>Jest</li>
            <li>Git/GitHub</li>
            <li>CSS/Flexbox</li>
            <li>HTML</li>
            <li>Unix/Bash</li>
          </ul>
        </div>
      )
    } else {
      humanSkills = (
        <div className='skills-block'>
          <h1>Habilidades humanas</h1>
          <br />
          <ul>
            <li>Capacidade Analítica</li>
            <li>Força de Vontade</li>
            <li>Inteligência Emocional</li>
            <li>Resolução de problemas</li>
            <li>Foco</li>
            <li>Comprometimento</li>
            <li>Responsabilidade</li>
          </ul>
        </div>)
      workSkills = (
        <div className='skills-block'>
          <h1>Minhas Ferramentas</h1>
          <br />
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>RTL</li>
            <li>Metodologias Ágeis</li>
            <li>JavaScript ES6</li>
            <li>Jest</li>
            <li>Git/GitHub</li>
            <li>CSS/Flexbox</li>
            <li>HTML</li>
            <li>Unix/Bash</li>
          </ul>
        </div>
      )
    }
    return (
      <div className='bigger-container'>
        <TopBar atHome={false} />
        <div className='main-container'>
          <div className='skills-container'>
            {humanSkills}
            {workSkills}
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

Skills.propTypes = {
  language: PropTypes.string.isRequired,
  visualMode: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(Skills)
