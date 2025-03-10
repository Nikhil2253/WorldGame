import { useContext, useState } from "react";
import { GameContext } from "../App";
import "../styles/Login.css"
const Auth = ({ onSelect }) => {
  const {setUniversalusername,fetchPlayerAndDispatch, setLoggedIn,setGo, dispatch } = useContext(GameContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  const handleChange = (e, type) => {
    e.preventDefault();
    if (type === "username") {
      setUsername(e.target.value);
    } else if (type === "password") {
      setPassword(e.target.value);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (!username || !password) {
      setErrorMessage("Please enter both username and password!");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/game/auth", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json(); 
  
      if (response.ok && data.success) {
        setIsAuthenticated(true);
        setErrorMessage("");
      } else {
        setErrorMessage("Invalid username or password!");
        setIsAuthenticated(false);
        setTimeout(() => setErrorMessage(""), 3000);
      }
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage("Server error! Please try again later.");
    }
  };
  

  return (
    <div className="login">
<div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        {errorMessage && <div className="error-box">{errorMessage}</div>}

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => handleChange(e, "username")}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => handleChange(e, "password")}
            required
          />
          {!isAuthenticated && <button type="submit" className="login-button">
            Login
          </button>}
        </form>
        
        {isAuthenticated && (
          <button
            onClick={() => {
            setUniversalusername(username);
              fetchPlayerAndDispatch(dispatch,username);
              setLoggedIn(true);
              setGo(true);
              onSelect();
            }}
            className="start-button"
          >
            Start Game
          </button>
        )}
      </div>
    </div>
    </div>
    
  );
};

export default Auth;
