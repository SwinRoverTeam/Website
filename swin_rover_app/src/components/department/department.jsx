import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Focus_Img from '../../assets/focus.jpg';
import Outside from '../../assets/outside.jpg'
import Arm_Img from '../../assets/arm.jpg'
import './department.css'
import RedBulletText from '../redBulletText/redBulletText';
import Zach_Focus from '../../assets/zach.jpg';
import Chuckles from '../../assets/chuckles.jpg';
import Mewing from '../../assets/mewing.jpg';

function Engineering() {
  return (
    <>
      <div className='department-container'>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 3, md: 2 }}>
            <Grid size={{ xs: 18, md: 3.5 }}>
              <RedBulletText text="Engineering Department" textSize="var(--medium-size)" />
            </Grid>
            <Grid size={{ xs: 18, md: 3.5 }} style={{ paddingRight: "3vw" }}>
              <p>The Engineering Department is responsible for building  the rover and is broken into teams, with each team responsible for the development of a specific aspect of the rover and its detachable payloads.</p>
              <p style={{ paddingTop: "3vh" }}>These teams are the chassis team, the logic team, the science team, the arm team and the Embedded and Control Systems (ECS) team.</p>
            </Grid>
            <Grid size={{ xs: 18, md: 5 }}>
              <img src={Focus_Img} alt="Engineering team working" className="overview-img"></img>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} style={{ paddingTop: '3vh' }}>
            <Grid size={{ xs: 18, md: 3 }}>
              <div className="department-cell">
                <h2>Science</h2>

                <p className='bottom-align'>Responsible for developing and integrating payloads responsible for sample collection and analysis.</p>
              </div>
            </Grid>
            <Grid size={{ xs: 18, md: 3 }}>
              <div className="department-cell">
                <h2>Chassis</h2>

                <p className='bottom-align'>Responsible for building the chassis of the rover, from which other teams develop off.</p>
              </div>
            </Grid>
            <Grid size={{ xs: 18, md: 3 }}>
              <div className="department-cell">
                <h2>Logic</h2>

                <p className='bottom-align'>Responsible for the development of all software to be used by the rover. Includes autonomous systems.</p>
              </div>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid className="empty" size={{ xs: 18, md: 3 }}>
            </Grid>
            <Grid size={{ xs: 18, md: 3 }}>
              <img src={Outside} alt="Engineering team working"></img>
            </Grid>
            <Grid size={{ xs: 18, md: 3 }}>
              <div className="department-cell">
                <h2>Arm</h2>

                <p className='bottom-align'>Responsible for the development of intricate systems revolving around the robotic arm of the rover.</p>
              </div>
            </Grid>
            <Grid size={{ xs: 18, md: 3 }}>
              <div className="department-cell">
                <h2>ECS</h2>

                <p className='bottom-align'>Responsible for the seamless integration of all subsystems through system boards, etc.</p>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>

    </>
  );
}

function Business() {
  return (
    <>
      <div className='department-container'>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 3, md: 2 }}>
            <Grid size={{ xs: 18, md: 3.5 }}>
              <RedBulletText text="Business Department" textSize="var(--medium-size)" />
            </Grid>
            <Grid size={{ xs: 18, md: 3.5 }} style={{ paddingRight: "3vw" }}>
              <p>The Business department is responsible for all things non-engineering related. This includes financing, HR management, social media marketing and most importantly, ensuring the team has the resources and support to achieve.</p>
              <p style={{ paddingTop: "3vh" }}>The Business department is split into two teams, the Finance team and the Social Media team.</p>
            </Grid>
            <Grid size={{ xs: 18, md: 5 }}>
              <img src={Arm_Img} alt="Engineering team working" className="overview-img"></img>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} style={{ paddingTop: '3vh' }}>
            <Grid size={{ xs: 18, md: 3 }}>
              <div className="department-cell">
                <h2>Social Media</h2>

                <p className='bottom-align'>Responsible for sharing our achievements with online audiences through social media.</p>
              </div>
            </Grid>
            <Grid size={{ xs: 18, md: 3 }}>
              <div className="department-cell">
                <h2>Finance</h2>

                <p className='bottom-align'>Responsible for managing finances. This includes funding and budget allocation.</p>
              </div>
            </Grid>
            <Grid size={{ xs: 18, md: 3 }}>
              <div className="department-cell">
                <img src={Zach_Focus} alt="Engineering team working"></img>
              </div>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 18, md: 3 }} className="empty">
            </Grid>
            <Grid size={{ xs: 18, md: 6 }}>
              <div className="department-cell">
                <   img src={Chuckles} alt="Engineering team working"></img>
              </div>
            </Grid>
            <Grid size={{ xs: 18, md: 3 }}>
              <div className="department-cell">
                <div className="department-cell">
                  <img src={Mewing} alt="Engineering team working"></img>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>

    </>
  );
}

function Departments() {
  return (
    <>
      <Engineering />
      <Business />
    </>
  );
}

export default Departments;