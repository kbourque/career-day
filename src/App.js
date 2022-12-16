import { Typography, Button } from '@mui/material';
import './App.css';
import AlertDialog from './AlertDialog';
import ButtonAppBar from './ButtonAppBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ButtonAppBar />
      </header>
      <div className="main">
        <div className="title">
          <Typography variant="h1" sx={{ fontWeight: "bold" }}>Super Secret Login Page</Typography>
        </div>
        <AlertDialog />
        {/* <Button variant="contained" size="large" sx={{width: '10em'}}>Sign In</Button> */}
      </div>
    </div>
  );
}

export default App;
