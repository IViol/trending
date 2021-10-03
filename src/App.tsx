import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Developers, Repositories } from './pages'

import './styles/index.scss'

const App = () => (
  <Router>
      <Switch>
        <Redirect exact from="/" to="repositories" />
        <Route path="/repositories">
          <Repositories />
        </Route>
        <Route path="/developers">
          <Developers />
        </Route>
      </Switch>
  </Router>
)

export default App
