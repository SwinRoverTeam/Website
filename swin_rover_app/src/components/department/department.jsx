import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Project_1_1 from '../../assets/project-1-1.jpg';
import './department.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function FullWidthGrid() {
  return (
    <>
    <div className='container'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 6, md: 4 }}>       
            <h2 className='dot'>Engineering Department</h2>
          </Grid>
          <Grid size={{ xs: 6, md: 4 }}>
            <h3>These teams are the chassis team, the logic team, the science team, the arm team, and the Embedded and Control Systems (ECS) team.</h3>    
          </Grid>
          <Grid size={{ xs: 6, md: 4 }}>
            <img src={Project_1_1} alt="Engineering team working"></img>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 6, md: 3 }}>
            <div class="cell">
              <h2>Science</h2>
              <hr></hr>
              <h3 className='bottom-align'>Responsible for developing and integrating payloads responsible for sample collection and analysis.</h3>
            </div>
          </Grid>
          <Grid size={{ xs: 6, md: 3 }}>
            <div class="cell">
              <h2>Chassis</h2>
                <hr></hr>
                <h3 className='bottom-align'>Responsible for building the chassis of the rover, from which other teams develop off.</h3>
            </div>
          </Grid>
          <Grid size={{ xs: 6, md: 3 }}>
            <div class="cell">
              <h2>Logic</h2>
              <hr></hr>
              <h3 className='bottom-align'>Responsible for the development of all software to be used by the rover. Includes autonomous systems.</h3>
            </div>
          </Grid>
          <Grid size={{ xs: 6, md: 3 }}>
            
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 6, md: 3 }}>    
          </Grid>
          <Grid size={{ xs: 6, md: 3 }}>
            <img src={Project_1_1} alt="Engineering team working"></img>
          </Grid>
          <Grid size={{ xs: 6, md: 3 }}>
            <div class="cell">
              <h2>Arm</h2>
                <hr></hr>
                <h3 className='bottom-align'>Responsible for the development of intricate systems revolving around the robotic arm of the rover.</h3>
            </div>
          </Grid>
          <Grid size={{ xs: 6, md: 3 }}>
            <div class="cell">
              <h2>ECS</h2>
              <hr></hr>
              <h3 className='bottom-align'>Responsible for the seamless integration of all subsystems through system boards, etc.</h3>
            </div>
          </Grid>
        </Grid>
      </Box>
</div>

    </>
  );
}