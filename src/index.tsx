import * as ReactDOM from 'react-dom'
import React from 'react'
import Home from './Components/home'

function App (): JSX.Element {
  return (
      <div>
          <h1>Ready to get rocking</h1>
          <Home />
      </div>
  )
}

const element = document.getElementById('app-root')
ReactDOM.render(<App />, element)
