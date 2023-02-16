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
import { Provider } from 'react-redux'
import store from './store'

function App (): JSX.Element {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}
const element = document.getElementById('app-root')
ReactDOM.render(<App />, element)
