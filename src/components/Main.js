import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Local Pages
import Home from '../pages/Home'
import SiteAnatomy from '../pages/SiteAnatomy'
import SmileCentral from '../pages/SmileCentral'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/homepage' component={Home}/>
      <Route path='/siteanatomy' component={SiteAnatomy}/>
      <Route path='/smilecentral' component={SmileCentral}/>
    </Switch>
  </main>
)

export default Main
