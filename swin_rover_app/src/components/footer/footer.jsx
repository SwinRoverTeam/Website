import * as React from 'react';
import Stack from '@mui/material/Stack';
import './footer.css'
import dotMatrix from '../../assets/test_dot_matrix.png'


function Footer () {
  return (
    <footer>
      <Banner />  
      <Stack
        direction="row"
        spacing={2}
        className='chunk'
      >
        <Respects />
        <WebLinks />
        <SocialLinks />
        <ContactLinks />
        <img src={dotMatrix} alt='Dot Matrix' width='200' height='200'/>
        {/* Image source: https://clipground.com/dot-pattern-png.html */}
      </Stack>
      <Policies />
    </footer>
  );
};



function Banner () {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      className="heading-box chunk-no-border"
    >
      <img src="./src/assets/temp_logo.jpg" alt="Swinburne Rover Team Logo"/>
      <h2 className='red-bullet'>Let's push the boundaries of what we can achieve together.</h2>
    </Stack>
  );
};

function Respects () {
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
    >
      <p>
        We acknowledge and pay respects to the Elders and Traditional Owners of the land on which our team works on, the Wurundjeri People of the Kulin Nation.
      </p>
      <p>
      © 2024. All rights reserved. Swinburne Rover Team.
      </p>
    </Stack>
  );
};

function WebLinks () {
  return (
    <Stack
    direction="column"
    justifyContent="flex-start"
    alignItems="flex-start"
    className='links'
    >
      <h3>Website</h3>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Team</a>
      <a href="#">Projects</a>
      <a href="#">Sponsors</a>
    </Stack>
  );
};

function SocialLinks () {
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      className='links'
    >
      <h3>Social</h3>
      <a href="#">Instagram</a>
      <a href="#">LinkedIn</a>
    </Stack>
  );
};

function ContactLinks () {
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      className='links'
    >
      <h3>Contact</h3>
      <a href="#">Contact</a>
      <a href="#">Join team</a>
      <a href="#">Sponsor</a>
      <a href="#">Email</a>
    </Stack>
  );
};

function Policies () {
  return (
    <Stack
      direction="row"
      className='chunk'
      alignItems='center'
      justifyContent="flex-start"
      spacing={4}
    >
      <a href="#">Terms and Conditions</a>
      <a href="#">Privacy Policy</a>
    </Stack>
  );
}

export default Footer;