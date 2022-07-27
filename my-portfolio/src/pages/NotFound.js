import React, { Component } from 'react'
import TopBar from '../components/TopBar'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class NotFound extends Component {
  render () {
    const { language } = this.props
    const text = language === 'en' ? <h1>It seems like you got lost...</h1> : <h1>Acho que se perdeu...</h1>
    return (
      <div className='bigger-container'>
        <TopBar atHome={false} />
        <div className='main-container'>
          {text}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  language: state.language,
  visualMode: state.visualMode
})

NotFound.propTypes = {
  language: PropTypes.string.isRequired,
  visualMode: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(NotFound)
