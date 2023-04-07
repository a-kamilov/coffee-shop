import React from 'react'
import './App.scss'
import Header from './components/Header'
import Content_1 from './components/Content_1'
import Products from './components/Products'

const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Content_1/>
      <Products/>
    </div>
  )
}

export default App