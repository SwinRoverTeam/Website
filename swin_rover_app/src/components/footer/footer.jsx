import * as React from 'react';
import Stack from '@mui/material/Stack';
import './footer.css'


function Footer () {
  return (
    <footer>
      <Banner />  
        <Stack
          direction="row"
          spacing={2}
        >
          <Respects />
          <WebLinks />
          <SocialLinks />
          <ContactLinks />
        </Stack>
    </footer>
  );
};



function Banner () {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      className="heading-box"
    >
      <img src="./src/assets/temp_logo.jpg" alt="Swinburne Rover Team Logo" width="300"/>
      <ul>
        <li>
          <h2>
            Let's push the boundaries of what we can achieve together
          </h2>
        </li>
      </ul>
    </Stack>
  );
};

function Respects () {
  return (
    <Stack
      direction="column"
      justifyContent="space-evenly"     
    >
      <p>
        We acknowledge and pay respects to the Elders and Traditional Owners of the land on which our team works on, the Wurundjeri People of the Kulin Nation
      </p>
      <p>
        &#169 2024. All rights reserved. Swinburne Rover Team.
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
    >
      <h3>Contact</h3>
      <a href="#">Contact</a>
      <a href="#">Join team</a>
      <a href="#">Sponsor</a>
      <a href="#">Email</a>
    </Stack>
  );
};

export default Footer;