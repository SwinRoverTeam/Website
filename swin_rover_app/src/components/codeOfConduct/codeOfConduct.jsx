import Typography from '@mui/material/Typography';
import { Box, ButtonBase } from '@mui/material';
import Grid from '@mui/material/Grid2';
import RedBulletText from '../redBulletText/redBulletText';
import LinkRoundButton from '../roundbutton/linkroundbutton';

export default function codeOfConduct(){
    return(
        <>
            <Grid container spacing={3} marginBottom={4}>
                <Grid size={{md:8, sx:12}} marginBottom={4} marginLeft={4}>
                    <RedBulletText textSize={'55px'} text={'Our team culture is paramount; we are committed to inclusivity and empathy in everything we do.'}></RedBulletText>
                </Grid>
                <Grid container size={{md:3, sx:12}} marginBottom={5} marginLeft={7} justifyContent={'flex-end'} alignItems={'flex-end'}>
                    <LinkRoundButton text={'View our Code of Conduct'}></LinkRoundButton>
                </Grid>
            </Grid>
        </>
    )
}