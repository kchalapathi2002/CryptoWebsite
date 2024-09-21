import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Signin.css'

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    setMessage(data.message);
    if (data.message === "Signed in successfully") {
      navigate('/main', { state: { name: data.name } });
    }
  };

  return (
    <div className="signindiv">
      <h2>Sign In</h2>
      <form className="signinform" onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Sign In</button>
        <p>{message}</p>
      </form>

    </div>
  );
}

export default Signin;
