import { Link, useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { auth } from '../firebase.jsx';

export default function Navbar() {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();

  async function handleLogout() {
    await signOut(auth);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  }

  return (
    <div className='navbar'>
      <Link to='/'><strong>Shop</strong></Link>
      <Link style={{marginLeft: "1rem"}} to='/cart'><strong>Cart</strong></Link>
      <Link style={{marginLeft: "1rem"}} to='/signup'><strong>Signup</strong></Link>
      <Link style={{marginLeft: "1rem"}} to='/login'><strong>Login</strong></Link>
      {/* only display if the user is signed in */}
      {user &&
      <Link style={{marginLeft: "1rem"}} onClick={handleLogout}><strong>Logout</strong></Link>}
    </div>
  );
}