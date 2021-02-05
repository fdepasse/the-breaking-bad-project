import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Characters from './components/Characters'
import Character from './components/Character'
import Episodes from './components/Episodes'
import Footer from './components/Footer'

import 'bulma'
import './styles/style.scss'

export default function App() {
  return <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/project-2" component={Home} />
      <Route exact path="/project-2/characters" component={Characters} />
      <Route exact path="/project-2/characters/:id" component={Character} />
      <Route exact path="/project-2/episodes" component={Episodes} />
    </Switch>
    <Footer />
  </BrowserRouter>
}