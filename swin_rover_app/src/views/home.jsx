import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Grid2';
import Footer from '../components/footer/footer';
import RedBulletText from '../components/redBulletText/redBulletText';
import HeroSlideshow from '../components/heroslideshow/heroslideshow';
import LinkRoundButton from '../components/roundbutton/linkroundbutton';
import Navbar from '../components/navbar/navbar';
import ProjectsSlideshow from '../components/projectsslideshow/projectsslideshow';
import UnderlineButton from '../components/underlinebutton/underlinebutton';
import instagamIcon from '../assets/instagram-icon-white.svg'
import linkedinIcon from '../assets/linkedin-icon-white.svg'
import emailIcon from '../assets/email-icon-white.svg'
import DotLattice from '../components/dotlattice/dotlattice';
import Sponsors from '../components/sponsers/sponsers';
import '../App.css';
import '../index.css';
import './home.css';
import About from '../components/aboutUsGrid/aboutUsGrid';
import { borderBottom } from '@mui/system';

function goToUrl(url) {
    window.location.href=url;
}

function Home() {
    return (
        <>
            <Navbar />
            <Grid2
                container
                spacing={0}
                columns={8}
                className='hero-chunk-no-border top-element'
                direction='row'
            >
                <Grid2 size={{xs: 8, md: 6}}>
                    <p className='title'>We're creating the next generation of space innovators</p>
                </Grid2>
                <Grid2 size={2} className="dot-lattice-grid-container">
                    <DotLattice/>
                </Grid2>
            </Grid2>
            <Grid2 
                container
                spacing={{xs: 1.5, md: 3}}
                columns={8}
                className='hero-chunk'
                style={{borderBottom: 'none', borderTop: '2px solid var(--grey-color)', paddingTop: '3vh'}}
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
                <Grid2 size={{ xs:8, md:3 }}>
                    <iframe src="https://www.youtube.com/embed/h89MX0RmX4w?autoplay=1" title="SRT 2023 Overview" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </Grid2>
            </Grid2>
            <Stack
                className='hero-chunk'
                direction='row'
                style={{paddingBottom:'5vh'}}
            >
                <RedBulletText
                    text="We're a diverse and dedicated team of students united 
                    by a shared passion for innovation and exploration"
                    fontClassName='headline'
                />
                <Box sx={{ display: { xs: 'none', lg: 'block' } }} >
                    <DotLattice/>
                </Box>
            </Stack>
            <Grid2
                className='hero-chunk'
                container
                spacing={5}
                direction={{ xs: 'column-reverse', lg: 'row'}}
                style={{padding: '5vh 2.5vw', borderBottom: 'none'}}
            >
                <Grid2
                    size={{ xs: 12, lg: 6 }}
                >
                    <div className='centre-content'>
                        <LinkRoundButton
                            text='Learn more about our vision, mission and team values'
                            style={{}}
                            click_func={() => goToUrl('/about')}
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
                className='hero-chunk'
                direction='row'
                style={{borderTop: 'none', borderBottom: 'none'}}
            >
                <About />
            </Grid2>
            <Stack
                className='hero-chunk'
                direction='row'
                style={{paddingBottom:'5vh'}}
            >
                <Stack>
                    <p className='title' style={{paddingBottom: '5vh'}}>Projects</p>
                    <RedBulletText
                        fontClassName='headline'
                        text='We strive for best practices, taking inspiration
                        from NASA handbooks to ensure high standards'
                    />
                </Stack>
                <Box sx={{ display: { xs: 'none', lg: 'block' } }} >
                    <DotLattice />
                </Box>
            </Stack>
            
            <ProjectsSlideshow />

            <Stack
                className='hero-chunk'
                direction='row'
                style={{padding: '5vh 2.5vw', paddingBottom:'5vh'}}
            >
                <RedBulletText
                    text="Our sponsors make bring our cutting-edge systems to life."
                    fontClassName='headline'
                />
                <Box sx={{ display: { xs: 'none', lg: 'block' } }} >
                    <DotLattice />
                </Box>
            </Stack>

            <Sponsors />
            
            <Stack
                className='hero-chunk'
                direction='row'
                style={{paddingBottom:'5vh'}}
            >
                <RedBulletText
                    fontClassName='headline'
                    text='The Swinburne Rover Team operates with the core values 
                    of innovation, collaboration and diversity'
                />
                <Box sx={{ display: { xs: 'none', lg: 'block' } }} >
                    <DotLattice />
                </Box>
            </Stack>
            <Stack
                className='hero-chunk'
                direction={{ xs: 'column', md: 'row' }}
                spacing={5}
                style={{borderBottom: 'none'}}
            >
                <Stack
                    direction='column'
                    spacing={5}
                    justifyContent='space-between'
                    style={{marginLeft: '3vw', paddingTop: {xs: '0', md: '3vh'}}}
                >
                    <p className='small-text' style={{width:'90%'}}>Join the team and make like-minded friends, get valuable hands on skills in engineering, IT, design, business and social media management! The Swinburne Rover Team is a great way to kick start your career and discover a passion for space exploration. </p>
                    <Stack
                        spacing={{ xs: 1, md: 1.6 }}
                        direction={{ xs: 'row-reverse', md: 'column' }}
                        justifyContent={{ xs: 'flex-end', md: 'space-between' }}
                    >
                        <LinkRoundButton
                            text='Sponsor us'
                            click_func={() => goToUrl('mailto:swinroverteam@swin.edu.au')}
                        />
                        <LinkRoundButton
                            text='Join the team'
                            click_func={() => goToUrl('mailto:swinroverteam@swin.edu.au')}
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
                        <a href="https://www.instagram.com/swinroverteam/">
                            <img src={instagamIcon} alt="Instagram Icon" />
                        </a>
                        <UnderlineButton text='Instagram' click_func={() => goToUrl('https://www.instagram.com/swinroverteam/')}/>
                    </Stack>
                    <Stack
                        className='social-links-box-inner'
                        direction={{ xs: 'row', md: 'column' }}
                        justifyContent='space-between'
                        alignItems='center'
                    >
                        <div className='spacing-box'></div>
                        <a href="https://www.linkedin.com/company/swinburne-rover-team/">
                            <img src={linkedinIcon} alt="LinkedIn Icon" />
                        </a>
                        <UnderlineButton text='LinkedIn' click_func={() => goToUrl('https://www.linkedin.com/company/swinburne-rover-team/')}/>
                    </Stack>
                    <Stack
                        className='social-links-box-inner last'
                        direction={{ xs: 'row', md: 'column' }}
                        justifyContent='space-between'
                        alignItems='center'
                    >
                        <div className='spacing-box'></div>
                        <a href="mailto:swinroverteam@swin.edu.au">
                            <img src={emailIcon} alt="Email Icon" />
                        </a>
                        <UnderlineButton text='Email' click_func={() => goToUrl('mailto:swinroverteam@swin.edu.au')}/>
                    </Stack>
                </Stack>
            </Stack>
            <Footer />
        </>
    );
};

export default Home;