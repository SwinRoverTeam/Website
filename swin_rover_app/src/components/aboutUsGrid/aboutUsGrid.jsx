import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Image from '../../assets/Rectangle 17.png';
import { PieChart } from '@mui/x-charts/PieChart';
import Grid from '@mui/material/Grid';

export default function About(){
    return(
        <>
            <Grid container spacing={1.6} margin={4}>
               <Grid container spacing={1} item md={9} xs={12}>
                    <Grid md={8} xs={12}>
                        <Box sx={{height: '300px', backgroundColor: '#222222', borderRadius:'15px'}}>
                            <Typography sx={{fontSize:'70px', pl:'25px'}}>About us</Typography> 
                            <hr style={{borderColor:'#FFFFFF', marginTop:'130px', opacity: 0.3}}></hr>
                            <Typography sx={{pl:'25px', fontSize: '18px', opacity:'0.8', marginTop:'15px'}}>Some numbers and stats about our team</Typography>
                        </Box>
                    </Grid>
                    <Grid md={4} xs={12}>
                        <Box sx={{height: '300px', backgroundColor: '#DA3838', borderRadius:'15px'}}>
                            <Typography sx={{fontSize:'70px', pl:'25px'}}>50+</Typography>
                            <hr style={{borderColor:'#FFFFFF', marginTop:'130px', opacity: 0.3}}></hr>
                            <Typography sx={{pl:'25px', fontSize: '18px', opacity:'0.8', marginTop:'15px'}}>Members</Typography>
                        </Box>
                    </Grid>
                    <Grid md={4} xs={12}>
                        <Box sx={{borderRadius: '15px', overflow: 'hidden', height:'300px'}}>
                            <img src={Image} style={{objectFit:'cover', width:'100%', height:'100%'}}></img>
                        </Box>
                    </Grid>
                    <Grid md sx>
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
                            <Typography fontSize={20}>
                                Our team culture is paramount. We are committed to inclusivity and empathy in everything we do. 
                                We ensure that every member feels welcome, valued, and supported, fostering a collaborative and respectful environment.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid md={3} xs={12}>
                    <Box container sx={{backgroundColor:'#FFFFFF', borderRadius:'15px', overflow: 'hidden', display:'flex', flexDirection:{md: 'column', xs:'row'}, padding: 1}}>
                        <Grid md={12} xs={6}>
                            <PieChart
                                series={[
                                    {
                                        data: [
                                            { id: 'science', value: 6, color: '#111111', label: 'Science'},
                                            { id: 'arm', value: 15, color: '#DDDDDD', label: 'Arm'},
                                            { id: 'chassis', value: 9, color: '#DA3838', label: 'Chassis'},
                                            { id: 'ecs', value: 6, color: '#414FE8', label: 'ECS'},
                                            { id: 'logic', value: 9, color: '#D9B638', label: 'Logic'},
                                            { id: 'social media', value: 7, label: 'Social Media'},
                                            { id: 'finance', value: 6, label: 'Finance'}
                                        ],
                                    },
                                ]}
                                slotProps={{legend:{hidden:true}}}
                                width={300}
                                height={200}
                            />
                        </Grid>
                        <Grid
                            container
                            direction="column"
                            wrap="wrap"
                            sx={{
                                maxHeight: '400px',
                                color: 'black',
                                marginLeft:'5px',
                                padding: 6.1,
                                alignContent:'left',
                                overflow:'auto'
                            }}
                            md={12}
                            xs={6}
                            fontSize={20}
                            >
                            <div style={{ margin: '5px', display: 'flex', alignItems: 'center' }}>
                                <div style={{ width: '15px', height: '15px', backgroundColor: '#111111', marginRight: '5px' }}></div>
                                Science
                            </div>
                            <div style={{ margin: '5px', display: 'flex', alignItems: 'center' }}>
                                <div style={{ width: '15px', height: '15px', backgroundColor: '#DDDDDD', marginRight: '5px' }}></div>
                                Arm
                            </div>
                            <div style={{ margin: '5px', display: 'flex', alignItems: 'center' }}>
                                <div style={{ width: '15px', height: '15px', backgroundColor: '#DA3838', marginRight: '5px' }}></div>
                                Chassis
                            </div>
                            <div style={{ margin: '5px', display: 'flex', alignItems: 'center' }}>
                                <div style={{ width: '15px', height: '15px', backgroundColor: '#414FE8', marginRight: '5px' }}></div>
                                ECS
                            </div>
                            <div style={{ margin: '5px', display: 'flex', alignItems: 'center' }}>
                                <div style={{ width: '15px', height: '15px', backgroundColor: '#D9B638', marginRight: '5px' }}></div>
                                Logic
                            </div>
                            <div style={{ margin: '5px', display: 'flex', alignItems: 'center' }}>
                                <div style={{ width: '15px', height: '15px', backgroundColor: '#CCCCCC', marginRight: '5px' }}></div>
                                Social Media
                            </div>
                            <div style={{ margin: '5px', display: 'flex', alignItems: 'center' }}>
                                <div style={{ width: '15px', height: '15px', backgroundColor: '#AAAAAA', marginRight: '5px' }}></div>
                                Finance
                            </div>
                        </Grid>
                    </Box>
                </Grid> 
            </Grid>
            
        </>
    )
}