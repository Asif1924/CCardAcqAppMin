import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import BRBDev from './BRBDev'
import BRBPrep from './BRBPrep'
import BRBPrepwaf from './BRBPrepwaf'
import BRBProd from './BRBProd'
import BRBProdwaf from './BRBProdwaf'

// The Main component renders one of the provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/BRBDev' component={BRBDev}/>
      <Route path='/BRBPrep' component={BRBPrep}/>
      <Route path='/BRBPrepwaf' component={BRBPrepwaf}/>
      <Route path='/BRBProd' component={BRBProd}/>
      <Route path='/BRBProdwaf' component={BRBProdwaf}/>
    </Switch>
  </main>
)

export default Main
