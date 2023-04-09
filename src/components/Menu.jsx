import React from 'react'
import menu_c1 from './img/menu_1.png'
import menu_c2 from './img/menu_2.png'
import menu_c3 from './img/menu_3.png'
import menu_c4 from './img/menu_4.png'
import menu_c5 from './img/menu_5.png'

const Menu = () => {
  return (
    <div className='menu'>
        <h1>Coffee popular menu</h1>
        <div className="menu_items">
            <div className="item">
                <img src={menu_c1}/>
                <h2>Americano rosted gred</h2>
                <p>$12:00</p>
            </div>
            <div className="item">
                <img src={menu_c2}/>
                <h2>Americano rosted gred</h2>
                <p>$12:00</p>
            </div>
            <div className="item">
                <img src={menu_c3}/>
                <h2>Americano rosted gred</h2>
                <p>$12:00</p>
            </div>
            <div className="item">
                <img src={menu_c4}/>
                <h2>Americano rosted gred</h2>
                <p>$12:00</p>
            </div>
            <div className="item">
                <img src={menu_c5}/>
                <h2>Americano rosted gred</h2>
                <p>$12:00</p>
            </div>
            <div className="item">
                <img src={menu_c1}/>
                <h2>Americano rosted gred</h2>
                <p>$12:00</p>
            </div>
            <div className="item">
                <img src={menu_c3}/>
                <h2>Americano rosted gred</h2>
                <p>$12:00</p>
            </div>
            <div className="item">
                <img src={menu_c3}/>
                <h2>Americano rosted gred</h2>
                <p>$12:00</p>
            </div>
        </div>

    </div>
  )
}

export default Menu