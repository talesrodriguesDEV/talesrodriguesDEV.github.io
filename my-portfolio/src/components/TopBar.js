import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { changeLanguage, changeVisualMode } from '../redux/actions'

class TopBar extends Component {
  renderText = () => {
    const { language, visualMode } = this.props
    const displayLanguage = language === 'pt' ? 'Português' : 'English'
    let displayVisualMode
    switch (language) {
      case 'en':
        displayVisualMode = visualMode
        break
      case 'pt':
        displayVisualMode = visualMode === 'Light' ? 'Claro' : 'Escuro'
        break
    }
    const buttonText = language === 'pt' ? 'Voltar à Home' : 'Back To Home'
    return { displayLanguage, buttonText, displayVisualMode }
  }

  render () {
    const { atHome, changeLanguage, changeVisualMode } = this.props
    const { displayLanguage, buttonText, displayVisualMode } = this.renderText()
    return (
      <div className='top-bar'>
        <div className="form-check form-switch">
          <label
            className="form-check-label"
            htmlFor='language'>
            <input
              type="checkbox"
              className="form-check-input"
              id='language'
              onChange={changeLanguage}
            />
            {displayLanguage}
          </label>
        </div>
        {!atHome && <Link className='home-button' to='/'>{buttonText}</Link>}
        <div className="form-check form-switch">
          <label
            className="form-check-label"
            htmlFor='visual-mode'>
            <input
              type="checkbox"
              className="form-check-input"
              id='visual-mode'
              onChange={changeVisualMode}
            />
            {displayVisualMode}
          </label>
        </div>
      </div>)
  }
}

const mapStateToProps = (state) => ({
  language: state.language,
  visualMode: state.visualMode
})

const mapDispatchToProps = (dispatch) => ({
  changeLanguage: () => dispatch(changeLanguage()),
  changeVisualMode: () => dispatch(changeVisualMode())
})

TopBar.propTypes = {
  atHome: PropTypes.bool.isRequired,
  language: PropTypes.string.isRequired,
  changeLanguage: PropTypes.func.isRequired,
  visualMode: PropTypes.string.isRequired,
  changeVisualMode: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar)
