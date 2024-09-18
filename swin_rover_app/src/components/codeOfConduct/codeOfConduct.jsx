import Typography from '@mui/material/Typography';
import { Box, ButtonBase } from '@mui/material';
import Grid from '@mui/material/Grid2';
import RedBulletText from '../redBulletText/redBulletText';
import LinkRoundButton from '../roundbutton/linkroundbutton';

function goToUrl(url) {
    window.location.href=url;
}

export default function codeOfConduct(){
    return(
        <>
            <Grid container spacing={3} marginBottom={4}>
                <Grid size={{md:8, sx:12}} marginBottom={4} marginLeft={4}>
                    <RedBulletText textSize={'var(--headline-size)'} text={'We ensure inclusivity and empathy in everything we do.'}></RedBulletText>
                </Grid>
                <Grid container size={{md:3, sx:12}} marginBottom={5} marginLeft={7} justifyContent={'flex-end'} alignItems={'flex-end'}>
                    <LinkRoundButton text={'View our Code of Conduct'} click_func={() => goToUrl('/comingsoon')}></LinkRoundButton>
                </Grid>
            </Grid>
        </>
    )
}