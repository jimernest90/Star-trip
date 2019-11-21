import React from 'react'
import { Routes } from './components/routes'
import Nav from './components/shared/Nav'
import Widget from './components/screens/Widget'
import './App.css'

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Widget />
        <Routes />
      </main>
    </>
  )
}

export default App