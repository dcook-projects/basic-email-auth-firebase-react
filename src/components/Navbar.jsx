import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='navbar'>
      <Link to='/'><strong>Shop</strong></Link>
      <Link style={{marginLeft: "1rem"}} to='/cart'><strong>Cart</strong></Link>
      <Link style={{marginLeft: "1rem"}} to='/signup'><strong>Signup</strong></Link>
      <Link style={{marginLeft: "1rem"}} to='/login'><strong>Login</strong></Link>
    </div>
  );
}