import * as React from 'react';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Grid2';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';
import DotLattice from '../../components/dotlattice/dotlattice';
import '../../App.css';
import '../../index.css';

function ComingSoon() {
    return (
        <>
            <Navbar />
            <Grid2
                container
                spacing={0}
                columns={8}
                className='chunk-no-border top-element'
                direction='row'
            >
                <Grid2 size={{xs: 8, md: 6}}>
                    <p className='title'>More features and content are coming to the website shortly.</p>
                </Grid2>
                <Grid2 size={2} className="dot-lattice-grid-container">
                    <DotLattice />
                </Grid2>
            </Grid2>
            <Box style={{paddingTop:'10vh'}}>
            <Footer />
            </Box>
        </>
    );
}

export default ComingSoon;