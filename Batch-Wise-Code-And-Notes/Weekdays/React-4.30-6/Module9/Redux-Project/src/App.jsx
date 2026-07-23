import React from 'react'
import Counter from "./components/Counter"
import { store } from './store/store'

store

function App() {
  return (
    <div>
      <h1>Redux-Toolkit Demo</h1>
      <br />
      <hr />
      <Counter />
    </div>
  )
}

export default App