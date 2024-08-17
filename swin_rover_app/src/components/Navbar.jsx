import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Options from './navbar_comps/Options';
import Slide from '@mui/material/Slide';
import { Close} from '@mui/icons-material';
import Logo from '../assets/logo.png'
import { AppBar } from '@mui/material';
import './styles/Navbar.css';

export default function Navbar() {
  const [clicked, setClicked] = useState(false);

  function handleClick(){
    setClicked(!clicked);
  }

  return (
    <>
      <AppBar sx={{position: "sticky", backgroundColor: "transparent"}}>
        <Toolbar 
        sx={{
            borderBottom: 1,
            borderColor: '#333333',
            py: 3,
            position: 'relative',
            display: 'flex'
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <img src={Logo} alt="logo" width="125"/>
          </Box>
            <Button
              sx={{
                textTransform: 'capitalize',
                px: 1.5,
                right: 2,
                borderRadius: 5,
                backgroundColor: 'white',
                color: 'black',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#DA3838',
                  transform: 'translateY(100%)',
                  transition: 'transform 0.2s ease',
                },
                '&:hover::before': {
                  transform: 'translateY(0%)',
                },
                '& > *': {
                  position: 'relative',
                },
                '&:hover': {
                  color: 'white',
                },
              }}
              onClick={handleClick}
            >
              {
                clicked ? 
                (<>
                  <Close/>
                  <Typography component="div" sx={{m: 0.4}}>
                    Close
                  </Typography>
                </>) 
                : 
                (<>
                  <MenuIcon/>
                  <Typography component="div" sx={{m: 0.4}}>
                    Menu
                  </Typography>
                </>)
              }
            </Button>
        </Toolbar>
        <Box sx={{overflow:'hidden'}}>
          <Slide in={clicked} mountOnEnter unmountOnExit>
          <Box> 
            <Options />
          </Box>
        </Slide> 
        </Box>
        
      </AppBar>
    </>
  );
}
