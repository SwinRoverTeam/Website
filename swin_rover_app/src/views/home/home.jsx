import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid2 from '@mui/material/Grid2';
import SRTLogo from '../../assets/srt-logo.svg';
import Footer from '../../components/footer/footer';
import RedBulletText from '../../components/redBulletText/redBulletText';
import HeroSlideshow from '../../components/heroslideshow/heroslideshow';
import LinkRoundButton from '../../components/roundbutton/linkroundbutton';
import '../../App.css'
import '../../index.css'
import './home.css'

function Home() {
    return (
        <>
            {/* *** PLEASE IMPORT HEADER *** */} 
            {/* <Header /> */}
            <Stack
                className='chunk-no-border'
                direction='row'
            >
                <p className='title'>We're creating the next generation of space innovators</p>
                {/* *** INSERT DOT MATRIX HERE *** */}
            </Stack>
            <Grid2 
                container
                spacing={3}
                columns={8}
                className='chunk'
                >
                    <Grid2 size={2}>
                        {/* <h1 className='red-bullet'>Welcome to the Swinburne Rover Team</h1> */}
                        <RedBulletText
                            text="Welcome to the Swinburne Rover Team"
                            fontClassName="medium-text"
                        />
                    </Grid2>
                    <Grid2 size={3}>
                        <HeroSlideshow />
                    </Grid2>
                    <Grid2 size={3}>
                        <p>Grid spot 3 (Video)</p>
                    </Grid2>
            </Grid2>
            <Stack
                className='chunk'
                direction='row'
            >
                <RedBulletText
                    text="We're a diverse and dedicated team of students united 
                    by a shared passion for innovation and exploration"
                    fontClassName='headline'
                />
                {/* *** INSERT DOT MATRIX HERE *** */}
            </Stack>
            <Stack
                className='chunk'
                direction='row'
                spacing={2}
                sx={{justifyContent: 'space-evenly'}}
            >
                <LinkRoundButton
                    text='Learn more about our vision, mission and team values'
                    style='width=100%;'
                />
                <Box>
                    <p className='medium-text'>
                        We compete in prestigious competitions like the Australian Rover Challenge 
                        and the University Rover Challenge, where  design, build, and operate 
                        cutting-edge robotic rovers.
                    <p>
                    </p>
                        Our mission is to design and build a competitive rover while fostering a 
                        supportive environment where every team member can learn, contribute, 
                        and thrive.
                    </p>
                </Box>
            </Stack>
            <Grid2
                container
                spacing={2}
                columns={4}
                className='chunk'
                direction='row'
            >
                <Grid2
                    container
                    size={3}
                    spacing={2}
                    columns={3}
                >
                    <Grid2 size={2}>About us</Grid2>
                    <Grid2 size={1}>50+</Grid2>
                    <Grid2 size={1}>Photo and button</Grid2>
                    <Grid2 size={2}>Our team culture is sick</Grid2>
                </Grid2>
                <Grid2 size={1}>Pie chart</Grid2>
            </Grid2>
            <Box className='chunk'>
                <p className='title'>Projects</p>
                <RedBulletText
                    fontClassName='inter-h2'
                    text='We strive for best practices, taking inspiration
                    from NASA handbooks to ensure high standards'
                ></RedBulletText>
            </Box>
            <Box className='chunk'>Rudra add your projects slideshow here</Box>
            <Box className='chunk'>
            <RedBulletText
                    fontClassName='inter-h2'
                    text='The Swinburne Rover Team operates with the core values 
                    of innovation, collaboration and diversity'
                ></RedBulletText>
            </Box>
            <Stack
                className='chunk'
                direction='row'
                spacing={2}
            >
                <Stack
                    direction='column'
                    spacing={2}
                >
                    <p>Some text here about membership</p>
                    <button>button 1</button>
                    <button>button 2</button>
                </Stack>
                <Box>Big links box</Box>
            </Stack>
            <Footer />
        </>
    );
};

export default Home;
