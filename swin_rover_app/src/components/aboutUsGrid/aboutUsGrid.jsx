import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import Grid from '@mui/material/Grid2';
import Button from '../roundbutton/roundbutton';
import Image from '../../assets/Rectangle 17.png';

export default function About(){
    return(
        <>
            <Grid container spacing={1.6} margin={4}>
               <Grid container spacing={1} size={{md: 9, xs: 12}} >
                    <Grid size={{md: 8, xs: 12}}>
                        <Box sx={{height: '300px', backgroundColor: '#222222', borderRadius:'15px'}}>
                            <Typography sx={{fontSize:'70px', pl:'25px'}}>About us</Typography> 
                            <hr style={{borderColor:'#FFFFFF', marginTop:'130px', opacity: 0.3}}></hr>
                            <Typography sx={{pl:'25px', fontSize: '18px', opacity:'0.8', marginTop:'15px'}}>Some numbers and stats about our team</Typography>
                        </Box>
                    </Grid>
                    <Grid size={{md: 4, xs: 12}}>
                        <Box sx={{height: '300px', backgroundColor: '#DA3838', borderRadius:'15px'}}>
                            <Typography sx={{fontSize:'70px', pl:'25px'}}>50+</Typography>
                            <hr style={{borderColor:'#FFFFFF', marginTop:'130px', opacity: 0.3}}></hr>
                            <Typography sx={{pl:'25px', fontSize: '18px', opacity:'0.8', marginTop:'15px'}}>Members</Typography>
                        </Box>
                    </Grid>
                    <Grid size={{md: 4, xs: 12}}>
                        <Box sx={{borderRadius: '15px', 
                                    overflow: 'hidden',
                                    height:'300px',
                                    position:'relative',
                                    filter:'brightnes(1)',
                                    '&:hover img':{
                                        filter: 'brightness(0.7)',
                                        transform: 'scale(1.05)'                                    }
                                    }}>
                            <img src={Image} style={{objectFit:'cover', width:'100%', height:'100%', transition: 'all 0.3s ease-in-out'}}></img>
                            <Button text="Meet the team" style={{position:'absolute', top:'78%', left:'1%'}}/>
                        </Box>
                    </Grid>
                    <Grid size={{md: 8, xs: 12}}>
                        <Box sx={{ 
                            borderRadius: '15px', 
                            border: 1, 
                            borderColor:'#222222',
                            height: '300px', 
                            display: 'flex', 
                            justifyContent: 'center', 
                            alignItems: 'center',
                            paddingX: 2
                            }}>
                            <Typography fontSize={24}>
                                Our team culture is paramount. We are committed to inclusivity and empathy in everything we do. 
                                We ensure that every member feels welcome, valued, and supported, fostering a collaborative and respectful environment.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid size={{md: 3, xs: 12}}>
                    <Box alignItems={'center'} sx={{backgroundColor:'#FFFFFF', borderRadius:'15px', overflow: 'hidden', display:'flex', flexDirection:{md: 'column', xs:'row'}, padding: 1}}>
                        <Grid size={{md: 8, xs: 12}}>
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
                                width={300}
                                height={207}
                            />
                        </Grid>
                        <Grid
                            container
                            spacing={1.5}
                            padding={2}
                            direction="column"
                            sx={{
                                maxHeight: '500px',
                                color: 'black',
                                alignContent:'left',
                                overflow:'auto'
                            }}
                            size={{md: 12, xs: 6}}
                            fontSize={20}
                            >
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
                        </Grid>
                    </Box>
                </Grid> 
            </Grid>
        </>
    )
}