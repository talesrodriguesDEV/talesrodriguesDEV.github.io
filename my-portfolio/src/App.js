import './App.css'
import { HashRouter, Route, Switch } from 'react-router-dom'
import React, { Component } from 'react'
import Projects from './pages/Projects'
import NotFound from './pages/NotFound'
import AboutMe from './pages/AboutMe'
import Contact from './components/Contact'
import Home from './pages/Home'
import Skills from './pages/Skills'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class App extends Component {
  render () {
    const { visualMode } = this.props
    let appClass
    visualMode === 'Dark' ? appClass = 'App' : appClass = 'App light-mode'
    return (
      <div className={appClass}>
        <Contact />
          <HashRouter>
            <Switch>
              <Route path={'/projects'} exact component={Projects} />
              <Route path={'/aboutme'} exact component={AboutMe} />
              <Route path={'/skills'} exact component={Skills} />
              <Route path={'/'} exact component={Home} />
              <Route path={'*'} component={NotFound} />
            </Switch>
          </HashRouter>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  visualMode: state.visualMode
})

App.propTypes = {
  visualMode: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(App)
