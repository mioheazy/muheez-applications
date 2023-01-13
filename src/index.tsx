import * as ReactDOM from 'react-dom'
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Home from './Components/home'
import './styles/style.scss'
import Navbar from './Components/Navbar'

function App (): JSX.Element {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<Home />}>
          </Route>
        </Routes>
      </div>
    </Router>
  )
}
const element = document.getElementById('app-root')
ReactDOM.render(<App />, element)
