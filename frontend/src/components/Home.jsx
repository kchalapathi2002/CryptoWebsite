import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'

function Home() {
  const navigate = useNavigate();

  const goToSignup = () => {
    navigate('/signup');
  };

  const goToSignin = () => {
    navigate('/signin');
  };

  return (
    <div className="home">
      <h2>Please choose one option</h2>
      <button className="homebutton" onClick={goToSignup}>Sign Up</button>
      <button className="homebutton" onClick={goToSignin}>Sign In</button>
    </div>
  );
}

export default Home;
