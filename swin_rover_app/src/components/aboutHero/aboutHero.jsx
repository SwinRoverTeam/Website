import Typography from '@mui/material/Typography';
import { Box, ButtonBase } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import Grid from '@mui/material/Grid2';
import RoundButton from '../roundbutton/roundbutton';
import Image from '../../assets/Rectangle 17.png';
import DotMatrix from '../../assets/test_dot_matrix.png';
import { flexbox } from '@mui/system';
import RedBulletText from '../redBulletText/redBulletText';

export default function AboutHero(){
    return(
        <>
               <Grid container spacing={1}>
                    <Box display={'flex'} borderBottom={2.5} borderColor={'#222222'} marginBottom={3}>
                        <Grid size={{md: 9, xs: 12}}>
                            <Box sx={{height: {md:'350px', xs: '500px'}, display: 'flex', alignItems: 'center', paddingX: 2}}>
                                <Typography sx={{fontSize:'65px'}}>
                                    We’re a multi-disciplinary team centered around one purpose: Space Innovation
                                </Typography>
                            </Box>
                        </Grid>
                    </Box>
                    <Grid size={{md: 3.5, xs: 12}} overflow={'hidden'}>
                        <Box sx={{height: {md: '200px', xs:'100px'}, borderRadius:'15px', paddingX: 4}}>
                            <RedBulletText textSize='30px' text={'About Us'}></RedBulletText> 
                            <ButtonBase disableRipple 
                            sx={{
                                textTransform:'capitalize',
                                textDecoration:'underline',
                                marginTop:'210px',
                                marginLeft:'60px',
                                fontSize: '25px',
                                color:'#333333',
                                transition: 'color 0.2s ease-in-out',
                                '&:hover':{
                                    color: 'grey'
                                }
                            }}>
                                Scroll down
                            </ButtonBase>
                        </Box>
                    </Grid>
                    <Grid size={{md: 3.5, xs: 12}}>
                        <Box sx={{height: '300px', backgroundColor: '#DA3838', borderRadius:'15px'}}>
                            <Typography sx={{fontSize:'70px', pl:'25px'}}>50+</Typography>
                            <hr style={{borderColor:'#FFFFFF', marginTop:'130px', opacity: 0.3}}></hr>
                            <Typography sx={{pl:'25px', fontSize: '25px', opacity:'0.8', paddingY:'10px'}}>Members</Typography>
                        </Box>
                    </Grid>
                    <Grid size = {{md: 5, xs: 12}}>
                        <Box sx={{height: '300px', backgroundColor: '#FFFFFF', borderRadius:'15px', border: 1, display: 'flex'}}>
                            <Grid size = {{md: 7, sx: 6}} sx={{alignContent:'center'}}>
                                <Box>
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
                                            width={350}
                                            height={280}
                                        />
                                </Box>
                            </Grid>
                            <Grid size = {{md: 4, sx: 6}} sx={{color: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>
                                <Box>
                                    <div style={{ margin: '5px', display: 'flex', alignItems: 'center'}}>
                                        <div style={{ borderRadius: 5, width: '30px', height: '30px', backgroundColor: '#111111', marginRight: '20px'}}></div>
                                        Science
                                    </div>
                                    <div style={{ margin: '5px', display: 'flex', alignItems: 'center' }}>
                                        <div style={{ borderRadius: 5, width: '30px', height: '30px', backgroundColor: '#DDDDDD', marginRight: '20px' }}></div>
                                        Arm
                                    </div>
                                    <div style={{ margin: '5px', display: 'flex', alignItems: 'center' }}>
                                        <div style={{ borderRadius: 5, width: '30px', height: '30px', backgroundColor: '#DA3838', marginRight: '20px' }}></div>
                                        Chassis
                                    </div>
                                    <div style={{ margin: '5px', display: 'flex', alignItems: 'center' }}>
                                        <div style={{ borderRadius: 5, width: '30px', height: '30px', backgroundColor: '#414FE8', marginRight: '20px' }}></div>
                                        ECS
                                    </div>
                                    <div style={{ margin: '5px', display: 'flex', alignItems: 'center' }}>
                                        <div style={{ borderRadius: 5, width: '30px', height: '30px', backgroundColor: '#D9B638', marginRight: '20px' }}></div>
                                        Logic
                                    </div>
                                    <div style={{ margin: '5px', display: 'flex', alignItems: 'right' }}>
                                        <div style={{ borderRadius: 5, width: '30px', height: '30px', backgroundColor: '#aa4db2', marginRight: '20px' }}></div>
                                        Social Media
                                    </div>
                                    <div style={{ margin: '5px', display: 'flex', alignItems: 'center' }}>
                                        <div style={{ borderRadius: 5, width: '30px', height: '30px', backgroundColor: '#25b7da', marginRight: '20px' }}></div>
                                        Finance
                                    </div>
                                </Box>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
        </>
    )
}