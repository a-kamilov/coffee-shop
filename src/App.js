import React from 'react'
import './App.scss'
import Header from './components/Header'
import Content from './components/Content'
import Products from './components/Products'
import Menu from './components/Menu'

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Content/>
      <Products/>
      <Menu/>
    </div>
  )
}

export default App