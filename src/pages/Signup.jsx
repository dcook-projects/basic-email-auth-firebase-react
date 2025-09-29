import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react"
import { auth, app } from "../firebase";
import { useNavigate } from "react-router-dom";

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
        navigate('/shop');
    }
    catch(error) {
        console.error(error);
    }
  }

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit} >
        
      </form>
    </div>
  )
}
