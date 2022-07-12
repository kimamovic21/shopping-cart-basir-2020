import React from 'react';
import '../index.css';

const Header = (props) => {

  const {countCartItems} = props;

  return (
    <header className='row block center'>
        <div>
            <a href="#/">
                <h1>Small shopping cart</h1>
            </a>
        </div>
        <div>
            <a style={{marginRight: '10px'}} href="#/cart">
                Cart { ' ' }
                {countCartItems ? (
                    <button className='badge'>{countCartItems}</button>
                ) : ('')}
            </a>
            <a href="#/signin">
                Sign in
            </a>
        </div>
    </header>
  )
}

export default Header;




// 1. uredujemo Header komponentu