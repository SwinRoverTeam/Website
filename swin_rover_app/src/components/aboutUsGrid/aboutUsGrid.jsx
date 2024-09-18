import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import Grid from '@mui/material/Grid2';
import LinkRoundButton from '../roundbutton/linkroundbutton';
import Image from '../../assets/Rectangle 17.png';
import './aboutUsGrid.css'; 

function goToUrl(url, toggle_menu = false) {
  window.location.href=url;
  if (toggle_menu == true) {
      toggleMenu();
  }
}

export default function About() {
  return (
    <>
      <Grid container spacing={2} className="about-container">
        <Grid container spacing={2} size={{ md: 9, xs: 12 }}>
          <Grid size={{ md: 8, xs: 12 }}>
            <Box className="about-box">
              <p className="about-title">About us</p>
            </Box>
          </Grid>
          <Grid size={{ md: 4, xs: 12 }}>
            <Box className="members-box">
              <p className="members-title">50+</p>
              <p className="about-subtitle">Members</p>
            </Box>
          </Grid>
          <Grid size={{ md: 4, xs: 12 }}>
            <div className="team-box">
              <img src={Image} alt="Team" />
              <LinkRoundButton text="Meet the team" style={{position:'absolute', bottom: '1vh', left: '2vw'}} click_func={() => goToUrl('/about#breakdown')}/>
            </div>
          </Grid>
          <Grid size={{ md: 8, xs: 12 }}>
            <Box className="culture-box">
              <p className='culture-text'>
                Our team culture is paramount. We are committed to inclusivity and empathy in everything we do. We ensure that every member feels welcome, valued, and supported, fostering a collaborative and respectful environment.
              </p>
            </Box>
          </Grid>
        </Grid>
        <Grid size={{ md: 3, xs: 12 }}>
          <Box className="pie-chart-container">
            <Grid container className="pie-diagram-container" justifyContent="center" alignItems="center">
             <PieChart
                series={[
                    {
                        data: [
                            { id: 'science', value: 6, color: '#111111', label: 'Science'},
                            { id: 'arm', value: 15, color: '#DDDDDD', label: 'Arm'},
                            { id: 'chassis', value: 9, color: '#DA3838', label: 'Chassis'},
                            { id: 'ecs', value: 6, color: '#414FE8', label: 'ECS'},
                            { id: 'logic', value: 9, color: '#D9B638', label: 'Logic'},
                            { id: 'social media', value: 7, color: '#aa4db2', label: 'Social Media'},
                            { id: 'finance', value: 6, color:'#25b7da', label: 'Finance'}
                        ],
                        cx: 175,
                        cy: 150
                    },
                ]}
                slotProps={{legend:{hidden:true}}}
            />
            </Grid>
            <Grid container spacing={1.5} padding={2} direction="column" className="pie-chart">
              <div className="pie-chart-label-container">
                <div className="pie-chart-label-color pie-chart-science"></div>
                Science
              </div>
              <div className="pie-chart-label-container">
                <div className="pie-chart-label-color pie-chart-arm"></div>
                Arm
              </div>
              <div className="pie-chart-label-container">
                <div className="pie-chart-label-color pie-chart-chassis"></div>
                Chassis
              </div>
              <div className="pie-chart-label-container">
                <div className="pie-chart-label-color pie-chart-ecs"></div>
                ECS
              </div>
              <div className="pie-chart-label-container">
                <div className="pie-chart-label-color pie-chart-logic"></div>
                Logic
              </div>
              <div className="pie-chart-label-container">
                <div className="pie-chart-label-color pie-chart-social-media"></div>
                Social Media
              </div>
              <div className="pie-chart-label-container">
                <div className="pie-chart-label-color pie-chart-finance"></div>
                Finance
              </div>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}