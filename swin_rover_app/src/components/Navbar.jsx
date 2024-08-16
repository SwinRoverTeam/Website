import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Options from './navbar_comps/Options';
import Slide from '@mui/material/Slide';
import { Close} from '@mui/icons-material';

export default function Navbar() {
  const [clicked, setClicked] = useState(false);

  function handleClick(){
    setClicked(!clicked);
  }

  return (
    <>
      <Box class="Navbar" sx={{position: "sticky", zIndex: 1, backgroundColor: "black"}}>
        <Toolbar 
        sx={{
            borderBottom: 1,
            borderColor: 'secondary',
            py: 2
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <img src="../assets/react.svg" alt="logo" width="40" height="40"/>
          </Box>
            <Button
              sx={{
                textTransform: 'capitalize',
                px: 1.5,
                borderRadius: 5,
                backgroundColor: 'white',
                color: 'black',
                //change button colour theme when hovered
                '&:hover':{
                  color: 'white',
                  backgroundColor: '#DA3838'
                }
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
        
      </Box>
      <Slide direction="down" in={clicked} mountOnEnter unmountOnExit>
            <Box
              sx={{
                overflow: 'hidden', // Prevents any overflow issues
              }}
            >
              <Options />
            </Box>
        </Slide>      
    </>
  );
}