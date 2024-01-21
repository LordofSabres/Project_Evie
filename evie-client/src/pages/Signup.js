import { useState } from "react";
import Header from "../components/Header";
<<<<<<< HEAD
import axios from 'axios';
import '../scss/_signup.scss';

function Signup() {

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confpassword, setConfpassword] = useState('');
  const [showconfpassword, setshowconfpassword] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
=======
import "../scss/_signup.scss";
import Footer from "../components/Footer";

function Signup() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfpassword] = useState("");
  const handleSignup = () => {
    // Add your Sign up logic here
    console.log(
      `Signed up as: ${firstname}, ${lastname}, with username: ${username} and password: ${password}`
    );
>>>>>>> 65da82524eadf3189f8ac39ece13b9d2393d9874
  };

  const toggleconfPasswordVisibility = () => {
    setshowconfpassword(!showconfpassword);
  };


  const handleSignup = async () => {
    try {
      
      //check if passwords match
      if (password !== confpassword) {
        setPasswordError('Passwords do not match!');
        return;
      }
      
      const response = await axios.post('/api/signup', {firstname, lastname, username, email, password });
    
      console.log('Signup successful!', response.data);
    } catch (error) {
      console.error('Signup failed:', error.message);
    }
  };
  

  return (
    <div className="signup-container">
      <Header />
      <h1>Sign Up</h1>
      <form className="signup-form">
        <label>
          First name:
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className="signup-input"
          />
        </label>
        <br />
        <label>
          Last name:
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="signup-input"
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="signup-input"
          />
        </label>
        <br />
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="signup-input"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signup-input"
          />
          <button type="button" onClick={togglePasswordVisibility} className="toggle-password-button">
            {showPassword ? 'Hide' : 'Show'} Password
          </button>
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type={showconfpassword ? 'text' : 'password'}
            value={confpassword}
            onChange={(e) => setConfpassword(e.target.value)}
            className="signup-input"
          />
          <button type="button" onClick={toggleconfPasswordVisibility} className="toggle-password-button">
            {showconfpassword ? 'Hide' : 'Show'} Password
          </button>
        </label>
<<<<<<< HEAD
        {passwordError && <p className="error-message">{passwordError}</p>}
=======
>>>>>>> 65da82524eadf3189f8ac39ece13b9d2393d9874
        <br />
        <button type="button" onClick={handleSignup} className="signup-button">
          Sign Up
        </button>
      </form>
      <Footer />
    </div>
  );
}

export default Signup;
