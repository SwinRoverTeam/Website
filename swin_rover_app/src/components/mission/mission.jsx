import Typography from '@mui/material/Typography';
import { Box, ButtonBase } from '@mui/material';
import Grid from '@mui/material/Grid2';
import RedBulletText from '../redBulletText/redBulletText';
import Parallaximg from '../parallaximg/parallaximg';
import LinkRoundButton from '../roundbutton/linkroundbutton';
import ExplorationImg from '../../assets/exploration-img.jpg';
import RoverImg from '../../assets/DSC06200.png';

export default function Mission(){
    return(
        <>
            <Grid borderTop={1} borderBottom={1} borderColor={'#222222'}>
                <Box display={'flex'} margin={4}>
                    <RedBulletText textSize='30px' text={'Why?'}></RedBulletText>
                </Box>
            </Grid>
            <Grid container spacing={4}>
            <Parallaximg 
                img_src={ExplorationImg} 
                text={'Exploration is what makes us '} 
                text_italic={
                    <span 
                    style={{
                        fontStyle: 'italic', 
                        textDecoration: 'underline', 
                        textDecorationThickness: '1.5px', 
                        textUnderlineOffset: '6px'
                    }}
                    >
                    human
                    </span>
                }
            />
            </Grid>
            <Grid 
                container 
                spacing={4} 
                margin={5} 
                justifyContent="space-between" 
                alignItems="left" 
                direction={{ xs: 'column-reverse', md: 'row' }}
            >
                <Grid>
                      <LinkRoundButton text={'Sponsor us'} link={'mailto:swinroverteam@swin.edu.au'}/>  
                </Grid>
                <Grid>
                    <Box textAlign={{md: 'right', xs: 'left'}} width={{md: 900, xs: 'auto'}}>
                        <Typography fontSize={20}>
                            The advancements in the national space industry make us very excited
                            for the future of space exploration, and we want to contribute through
                            student-led and developed robotics systems.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container borderBottom={1} borderColor={'#222222'}>
                <Box margin={4} marginTop={6}>
                    <RedBulletText textSize='50px' text={'Our mission is to design, build, and test innovative robotic systems capable of performing complex tasks in extraterrestrial environments'}></RedBulletText>
                </Box>
                
            </Grid>
            <Grid marginBottom={8}>
                <Parallaximg img_src={RoverImg}></Parallaximg>
            </Grid>
        </>
    )
}