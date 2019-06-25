import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <center><h1 className='App-link'>BRB Simulator !!!</h1></center>
    <nav>

    <table>
        <tbody>
            <tr>
                <th><Link to='/'></Link></th>
            </tr>
            <tr>
                <th><Link to='/BRBDev'>BRB Simulator DEVELOPMENT</Link></th>
                <th>Used for BRB DEV Simulation</th>
            </tr>
            <tr>
                <th><Link to='/BRBPrep'>BRB Simulator PREPROD</Link></th>
                <th>Used for local BRB PreProd Testing</th>
            </tr>
            <tr>
                <th><Link to='/BRBPrepwaf'>BRB Simulator PREPROD(WAF)</Link></th>
                <th>Used for local BRB PreProd Simulation via the CTFS WAF</th>
            </tr>
            <tr>
                <th><Link to='/BRBProd'>BRB Simulator PROD</Link></th>
                <th>Used to launch PROD BRB directly from szprod (do not test)</th>
            </tr>
            <tr>
                <th><Link to='/BRBProdwaf'>BRB Simulator PROD(WAF)</Link></th>
                <th>Used to launch PROD BRB via the WAF (do not test)</th>
            </tr>
        </tbody>
     </table>          
    </nav>
  </header>
)

export default Header
