import React from 'react'
import './App.scss'
import Header from './components/Header'
import Content from './components/Content'
import Products from './components/Products'
import Menu from './components/Menu'
import Customers from './components/Customers'
import Reservation from './components/Reservation'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='App'>
      <Header/>
      <Content/>
      <Products/>
      <Menu/>
      <Customers/>
      <Reservation/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default App