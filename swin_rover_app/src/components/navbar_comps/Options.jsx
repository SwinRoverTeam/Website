import Typography from '@mui/material/Typography';
import { ButtonGroup, capitalize } from '@mui/material';
import {Button} from '@mui/material';
import '../styles/Navbar.css'

export default function Options(){
    return(
        <>
            <ButtonGroup 
                sx={{
                    borderBottom: 1,
                    borderColor: '#333333',
                    py: 3,
                    position: 'relative',
                    display: 'flex',
                    borderRadius: 0
                  }}
            >
                <Button class="underline">Home</Button>
                <Button class="underline">About</Button>
                <Button class="underline">Projects</Button>
                <Button class="underline">Sponsors</Button>
            </ButtonGroup>
        </>
    )
}