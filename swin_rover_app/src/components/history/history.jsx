import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Anton from 'assets/zach.jpg'
import './history.css'

function History() {
  return (
    <>
    <div className='history-container' style={{paddingBottom: '5vh'}}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{xs: 1, md: 2}} style={{paddingTop: '3vh'}}>
          <Grid size={{ xs: 18, md: 9 }}>       
            <div className='cell' style={{border: "2px solid var(--grey-color)", background: 'None'}}>
              <h1>History</h1>  
              <p className='bottom-align' style={{borderTop: "2px solid var(--grey-color)"}}>Despite this team being new, we are proud of the achievements we have already made. Our team began by a group of passionate students who wanted to participate in the Australian Rover Challenge (ARCh) in March 2024.</p>
            </div>
          </Grid>
          <Grid size={{ xs: 6, md: 3 }}>
            <div className='cell' style={{backgroundColor: 'var(--red-color)'}}>
              <h2>1.</h2>
              <p className='bottom-align'>The team was formed in September 2023 by a group of highly passionate students.</p>    
            </div>
          </Grid> 
          <Grid size={{ xs: 6, md: 3 }}>
            <div className="cell">
              <h2>2.</h2>
              <p className='bottom-align'>After gaining access to neccessary workshops, the team had three months to build a rover.</p>
            </div>
          </Grid>
          <Grid size={{ xs: 6, md: 3 }}>
            <div className="cell">
              <h2>3.</h2>
                <p className='bottom-align'>Thanks to some miracles (and energy drinks), the team built the rover, coming 8th in ARCh.</p>
            </div>
          </Grid>
          <Grid size={{ xs: 6, md: 3 }}>
              <img src={Anton} alt="Engineering team working"></img>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <div className="cell white-bg" style={{backgroundColor: 'White', color: 'black'}}>
              <h2>4.</h2>
              <p className='bottom-align_for_white_cell'>We've now expanded the team, with a new leadership team as of April 2024.</p>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
    </>
  );
}

export default History;