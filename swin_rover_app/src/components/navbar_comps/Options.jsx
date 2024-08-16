import Typography from '@mui/material/Typography';
import { ButtonGroup, capitalize } from '@mui/material';
import {Button} from '@mui/material';

export default function Options(){
    return(
        <>
            <ButtonGroup 
                variant="contained outlined"
                sx={{
                    borderBottom: 1,
                    borderColor: 'secondary',
                    borderRadius: 0,
                    py: 3,
                    display: 'flex',
                    flexGrow: 1,
                }}
            >
                <Button sx={{textTransform: 'capitalize', '&:hover':{textDecoration: 'underline'}}}>Home</Button>
                <Button sx={{textTransform: 'capitalize', '&:hover':{textDecoration: 'underline'}}}>About</Button>
                <Button sx={{textTransform: 'capitalize', '&:hover':{textDecoration: 'underline'}}}>Projects</Button>
                <Button sx={{textTransform: 'capitalize', '&:hover':{textDecoration: 'underline'}}}>Sponsors</Button>
            </ButtonGroup>
        </>
    )
}