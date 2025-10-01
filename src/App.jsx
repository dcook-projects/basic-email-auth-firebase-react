import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import Navbar from './components/Navbar.jsx'
import Shop from './pages/Shop.jsx'
import Cart from './pages/Cart.jsx'
import product1 from './assets/camera lens.jpg'
import product2 from './assets/camera.jpg'
import product3 from './assets/lighter.jpg'
import product4 from './assets/lipstick.jpg'
import product5 from './assets/sd card.jpg'

function App() {
  const [cart, setCart] = useState(getDefaultCart());

  function getDefaultCart() {
    let ca = {}
    for(let product of PRODUCTS)
      ca[product.id] = 0;

    return ca;
  }

  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Shop cart={cart} setCart={setCart} />} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export const PRODUCTS = [
  {
    id: 1,
    name: "digital camera",
    file: product1,
    price: 300.00
  },
  {
    id: 2,
    name: "digital camera lens",
    file: product2,
    price: 79.00
  },
  {
    id: 3,
    name: "lighter",
    file: product3,
    price: 7.99
  },
  {
    id: 4,
    name: "lipstick",
    file: product4,
    price: 25.00
  },
  {
    id: 5,
    name: "SD card",
    file: product5,
    price: 50.00
  }
];

export default App;
