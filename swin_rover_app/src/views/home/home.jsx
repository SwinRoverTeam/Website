import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Grid2';
import Footer from '../../components/footer/footer';
import RedBulletText from '../../components/redBulletText/redBulletText';
import HeroSlideshow from '../../components/heroslideshow/heroslideshow';
import LinkRoundButton from '../../components/roundbutton/linkroundbutton';
import Navbar from '../../components/navbar/navbar';
import ProjectsSlideshow from '../../components/projectsslideshow/projectsslideshow';
import UnderlineButton from '../../components/underlinebutton/underlinebutton';
import instagamIcon from '../../assets/instagram-icon-white.svg'
import linkedinIcon from '../../assets/linkedin-icon-white.svg'
import emailIcon from '../../assets/email-icon-white.svg'
import '../../App.css';
import '../../index.css';
import './home.css';


function Home() {
    return (
        <>
            <Navbar />
            <Stack
                className='chunk-no-border top-element'
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
                <Grid2 size={{ xs:8, md:2 }}>
                    <Stack
                        justifyContent='space-between'
                        height='100%'
                    >
                        <RedBulletText
                            text="Welcome to the Swinburne Rover Team"
                            fontClassName="medium-text"
                        />
                        <Box
                            display={{ xs: 'none', md: 'block'}}
                        >
                            <p
                                className='medium-text'
                                style={{ color: 'var(--dark-grey-color)', textDecoration: 'underline' }}
                            >
                                Scroll Down
                            </p>
                        </Box>
                    </Stack>
                </Grid2>
                <Grid2
                    size={{ xs:8, md:3 }}
                    className='relative'
                >
                    <HeroSlideshow />
                </Grid2>
                <Grid2 size={{ xs:8, md:2 }}>
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
            <Grid2
                className='chunk'
                container
                spacing={5}
                direction={{ xs: 'column-reverse', lg: 'row'}}
            >
                <Grid2
                    size={{ xs: 12, lg: 6 }}
                >
                    <div className='centre-content'>
                        <LinkRoundButton
                            text='Learn more about our vision, mission and team values'
                            style={{}}
                        />
                    </div>
                    
                </Grid2>
                <Grid2
                    size={{ xs: 12, lg: 6 }}
                >
                    <Box>
                        <p className='medium-text'>
                            We compete in prestigious competitions like the Australian Rover Challenge 
                            and the University Rover Challenge, where  design, build, and operate 
                            cutting-edge robotic rovers.
                        </p>
                        <br/>
                        <p className='medium-text'>
                            Our mission is to design and build a competitive rover while fostering a 
                            supportive environment where every team member can learn, contribute, 
                            and thrive.
                        </p>
                    </Box>
                </Grid2>
                
            </Grid2>
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
                    fontClassName='headline'
                    text='We strive for best practices, taking inspiration
                    from NASA handbooks to ensure high standards'
                ></RedBulletText>
            </Box>
            
            <ProjectsSlideshow />
            
            <Stack
                className='chunk'
            >
                <RedBulletText
                    fontClassName='headline'
                    text='The Swinburne Rover Team operates with the core values 
                    of innovation, collaboration and diversity'
                />

            </Stack>
            <Stack
                className='chunk'
                direction={{ xs: 'column', md: 'row' }}
                spacing={5}
            >
                <Stack
                    direction='column'
                    spacing={5}
                    justifyContent='space-between'
                >
                    <p className='medium-text'>Some text here about member benefits, etc, and why anyone should join.</p>
                    <Stack
                        spacing={{ xs: 0, md: 1.6 }}
                        direction={{ xs: 'row-reverse', md: 'column' }}
                        justifyContent={{ xs: 'space-evenly', md: 'space-between' }}
                    >
                        <LinkRoundButton
                            text='Sponsor us'
                        />
                        <LinkRoundButton
                            text='Join the team'
                        />
                    </Stack>
                </Stack>
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    spacing={-0.15}
                    className='social-links-box'
                >
                    <Stack
                        className='social-links-box-inner first'
                        direction={{ xs: 'row', md: 'column' }}
                        justifyContent='space-between'
                        alignItems='center'
                    >
                        <div className='spacing-box'></div>
                        <a href="#">
                            <img src={instagamIcon} alt="Instagram Icon" />
                        </a>
                        <UnderlineButton text='Instagram'/>
                    </Stack>
                    <Stack
                        className='social-links-box-inner'
                        direction={{ xs: 'row', md: 'column' }}
                        justifyContent='space-between'
                        alignItems='center'
                    >
                        <div className='spacing-box'></div>
                        <a href="#">
                            <img src={linkedinIcon} alt="LinkedIn Icon" />
                        </a>
                        <UnderlineButton text='LinkedIn'/>
                    </Stack>
                    <Stack
                        className='social-links-box-inner last'
                        direction={{ xs: 'row', md: 'column' }}
                        justifyContent='space-between'
                        alignItems='center'
                    >
                        <div className='spacing-box'></div>
                        <a href="#">
                            <img src={emailIcon} alt="Email Icon" />
                        </a>
                        <UnderlineButton text='Email'/>
                    </Stack>
                </Stack>
            </Stack>
            <Footer />
        </>
    );
};
export default Home;