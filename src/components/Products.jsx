import React from 'react';
import product from './img/product.png';

const Products = () => {
  return (
    <div className='products'>
        <h5>Popular Product</h5>
        <h1>Coffee popular Product</h1>
        <div className="cards">
            <div className="card">
                <img src={product}/>
                <h2>brazil coffee gred</h2>
                <button><i class="fa fa-shopping-bag" aria-hidden="true"></i>Add to cart</button>
            </div>
        </div>

    </div>
  )
}

export default Products