import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential);
        const user = userCredential.user;
        localStorage.setItem('token', user.accessToken);
        localStorage.setItem('user', JSON.stringify(user));
        navigate('/');
    }
    catch(error) {
        console.error(error);
    }
  }

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit} class-name='signup-form' >
        <input
           type='email'
           placeholder='Email Address'
           required
           value={email}
           onChange={(e) => setEmail(e.target.value)}
        />
        <input
           type='password'
           placeholder='Your Password'
           required
           value={password}
           onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' className='signup-button'>Signup</button>
      </form>
      <p>Need to login? <Link to='/login'>Login</Link></p>
    </div>
  )
}
