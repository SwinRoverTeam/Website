import Typography from '@mui/material/Typography';
import { Box, ButtonBase } from '@mui/material';
import Grid from '@mui/material/Grid2';
import RedBulletText from '../redBulletText/redBulletText';
import ParallaxImg from '../parallaximg/parallaximg';
import LinkRoundButton from '../roundbutton/linkroundbutton';
import ExplorationImg from '../../assets/exploration-img.jpg';
import RoverImg from '../../assets/DSC06200.png';
import './mission.css'

function goToUrl(url) {
    window.location.href=url; 
}
export default function Mission(){
    return(
        <>
            <Grid borderBottom={2} borderColor={'var(--grey-color)'}>
                <Box display={'flex'} margin={4}>
                    <RedBulletText textSize='var(--medium-size)' text={'Why?'}></RedBulletText>
                </Box>
            </Grid>
            <Grid container spacing={4}>
            <ParallaxImg 
                img_src={ExplorationImg} 
                text={'Exploration is what makes us '} 
                text_italic={
                    <span 
                    style={{
                        fontStyle: 'italic', 
                        textDecoration: 'underline', 
                        textDecorationThickness: '2px', 
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
                spacing={3}
                columns={8} 
                style={{marginLeft:"2.5vw", marginRight:"2.5vw", padding: '3vh 0'}} 
                justifyContent="space-between" 
                className="about-sponsor-us-container"
                alignItems='center'
                direction={{ xs: 'column-reverse', md: 'row' }}
            >
                <Grid size={{xs: 8, md: 3}}>
                      <LinkRoundButton text={'Sponsor us'} click_func={() => goToUrl('mailto:swinroverteam@swin.edu.au')}/>  
                </Grid>
                <Grid size={{xs: 8, md: 5}}>
                    <p style={{fontSize: 'var(--small-size)'}} className='sponsor-us-text'>
                    The advancements in the national space industry make us very excited
                        for the future of space exploration, and we want to contribute through
                        student-led and developed robotics systems.
                    </p>
                </Grid>
            </Grid>
            <Grid container borderBottom={2} borderColor={'var(--grey-color)'} style={{paddingTop: '7.5vh'}}>
                <Box style={{marginLeft:"2.5vw", marginRight:"2.5vw", paddingBottom: '3vh'}}>
                    <RedBulletText textSize='var(--headline-size)' text={'Our mission is to design, build, and test innovative robotic systems capable of performing complex tasks in extraterrestrial environments'}></RedBulletText>
                </Box>
                
            </Grid>
            <Grid marginBottom={8}>
                <ParallaxImg img_src={RoverImg} />
            </Grid>
        </>
    )
}