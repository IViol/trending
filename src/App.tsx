import React from 'react'
import { Provider } from 'react-redux'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { store } from './store'
import { Developers, Repositories } from './pages'

import './styles/index.scss'

const App = () => (
  <Provider store={store}>
      <Router>
        <Switch>
          <Redirect exact from='/' to='repositories' />
          <Route path='/repositories'>
            <Repositories />
          </Route>
          <Route path='/developers'>
            <Developers />
          </Route>
        </Switch>
    </Router>
  </Provider>
)

export default App
