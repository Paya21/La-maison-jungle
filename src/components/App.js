import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
import Footer from './Footer';
import {useState} from 'react'
import logo from '../assets/logo.png'
import '../styles/Layout.css'


function App() {

  const [cart, updateCart] = useState([])

  return (
      <div>
        <Banner>
            <img src={logo} alt='logo LMJ' className='lmj-logo'/>
            <h1 className='lmj-title'>La maison jungle</h1>
        </Banner>
        <div>
            <Cart cart={cart} updateCart={updateCart}/>
            <ShoppingList cart={cart} updateCart={updateCart}/>
        </div>
        <Footer/>
      </div>
  )
}

export default App;
