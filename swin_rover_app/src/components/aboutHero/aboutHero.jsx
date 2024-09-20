import Typography from '@mui/material/Typography';
import { Box, ButtonBase } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import Grid from '@mui/material/Grid2';
import Grid2 from '@mui/material/Grid2';
import DotLattice from '../../components/dotlattice/dotlattice';
import RedBulletText from '../redBulletText/redBulletText';
import './aboutHero.css'

function AboutHero(){
    return(
        <> 
               <Grid2
                container
                spacing={0}
                columns={8}
                className='chunk-no-border top-element'
                direction='row'
            >
                <Grid2 size={{xs: 8, md: 6}}>
                    <p className='title'>We're a multi-disciplinary team centered around one purpose: Space Innovation</p>
                </Grid2>
                <Grid2 size={2} className="dot-lattice-grid-container">
                    <DotLattice/>
                </Grid2>
            </Grid2>
            <Grid2 
                container
                spacing={{xs: 2, md: 3}}
                columns={8}
                className='about-chunk'
                direction={{xs: 'column', md: 'row'}}
                >
                    <Grid2 size={{xs: 8, md: 2}}>
                        {/* <h1 className='red-bullet'>Welcome to the Swinburne Rover Team</h1> */}
                        <RedBulletText
                            text="About Us"
                            fontClassName="medium-text"
                        />
                    </Grid2>
                    <Grid2 size={{xs: 8, md: 2}}
                        className='about-relative'
                    >
                        <div className="member-count">
                            <h2>50+</h2>
                            <p>Members</p>
                        </div>
                    </Grid2>
                    <Grid2 size={{xs: 8, md: 4}} className="chart-container">
                        <div className="pie-chart">
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
                                    },
                                ]}
                                slotProps={{legend:{hidden:true}}}
                            />
                            <Box className="key">
                                <div className="key-indicator">
                                    <div className="color-indicator" style={{backgroundColor: '#111111'}}></div>
                                    <p>Science</p>
                                </div>
                                <div className="key-indicator">
                                    <div className="color-indicator" style={{backgroundColor: '#DDDDDD'}}></div>
                                    <p>Arm</p>
                                </div>
                                <div className="key-indicator">
                                    <div className="color-indicator" style={{backgroundColor: '#DA3838'}}></div>
                                    <p>Chassis</p>
                                </div>
                                <div className="key-indicator">
                                    <div className="color-indicator" style={{backgroundColor: '#414FE8'}}></div>
                                    <p>ECS</p>
                                </div>
                                <div className="key-indicator">
                                    <div className="color-indicator" style={{backgroundColor: '#D9B638'}}></div>
                                    <p>Logic</p>
                                </div>
                                <div className="key-indicator">
                                    <div className="color-indicator" style={{backgroundColor: '#aa4db2'}}></div>
                                    <p>Social Media</p>
                                </div>
                                <div className="key-indicator">
                                    <div className="color-indicator" style={{backgroundColor: '#25b7da'}}></div>
                                    <p>Finance</p>
                                </div>
                        </Box>
                        </div>
                    </Grid2>
            </Grid2>
        </>
    )
}

export default AboutHero;