import { Typography, Button } from '@mui/material';
import './App.css';
import AlertDialog from './AlertDialog';
import ButtonAppBar from './ButtonAppBar';
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from 'react';

function App() {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

  useEffect(function() {
    if (user && user.email === "frmsuser@example.com") {
      setTimeout(callBack_func, 1000);
      function callBack_func() {
        document.location.href = "https://www.youtube.com/watch?v=eBGIQ7ZuuiU&ab_channel=YouGotRickRolled";
      }
    }
  }, [user])

  return (
    <div className="App">
      <div className="main">
        <div className="title">
            {isAuthenticated && (
              <Typography variant="h1" sx={{ fontWeight: "bold", color: "#74A57F" }}>Welcome, {user.email}! 👋</Typography>   
            )}
            {!isAuthenticated && (
              <Typography variant="h1" sx={{ fontWeight: "bold"}}>Super Secret Login Page</Typography>   
            )}
        </div>
        {/* <AlertDialog /> */}
        {!isAuthenticated && <Button variant="contained" size="large" sx={{width: '10em'}} onClick={() => loginWithRedirect()}>Sign In</Button>}
      </div>
    </div>
  );
}

export default App;
