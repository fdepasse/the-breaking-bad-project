import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Home from './components/Home'
import Characters from './components/Characters'
import Character from './components/Character'
import Episodes from './components/Episodes'
import Quotes from './components/Quotes'


import 'bulma'
import './styles/style.scss'

export default function App() {
  return <BrowserRouter>
    <Nav />
    <Switch>
      <Route exact path="/project-2" component={Home} />
      <Route exact path="/project-2/characters" component={Characters} />
      <Route exact path="/project-2/characters/:id" component={Character} />
      <Route exact path="/project-2/episodes" component={Episodes} />
      <Route exact path="/project-2/quotes" component={Quotes} />
    </Switch>
  </BrowserRouter>
}