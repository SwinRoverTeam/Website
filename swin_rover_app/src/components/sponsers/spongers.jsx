import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import dotMatrix from '../../assets/test_dot_matrix.png';
import './sponsers.css';
import Altium from '../../assets/altium-logo.svg';
import Leap from '../../assets/leap-logo.svg';
import Ansys from '../../assets/ansys-logo.svg';
import Bossard from '../../assets/bossard-logo.svg';
import Goldsmith from '../../assets/goldsmith-logo.svg';
import linkIconWhite from '../../assets/link-icon-white.svg'

function Sponsors() {
    return (
        <>
            <div className="sponsors-container">
                <Box className="Sponsors" sx={{ boxSizing: 'border-box' }}>
                    <div id="picture">
                        <img src={Altium} alt="" />
                    </div>
                    <p id="text">Platinum Sponsor</p>
                </Box>
                <Box className='Sponsors'>
                    <div id='picture'>
                        <img src={Ansys} alt="" />
                    </div>
                    <p id="text">Platinum Sponsor</p>
                </Box>
                <Box className='Sponsors'>
                    <div id='picture'>
                        <img src={Bossard} alt="" />
                    </div>
                    <p id="text">Platinum Sponsor</p>
                </Box>
                <Box className='Sponsors'>
                    <div id='picture'>
                        <img src={Leap} alt="" />
                    </div>
                    <p id='text'>Platinum Sponsor</p>
                </Box>
                <Box className='Sponsors'>
                    <div id='picture'>
                        <img src={Goldsmith} alt="" className='goldsmith' />
                    </div>
                    <p id='text'>Platinum Sponsor</p>
                </Box>
                <Box className="sponsor-button">
                    <a href="mailto:swinroverteam@swin.edu.au" className="round-button">
                        <div className="button-info">
                            <div className="button-icon-container diagonal">
                                <img className="button-icon" src={linkIconWhite} alt="Link Icon White" />
                                <img className="button-icon" src={linkIconWhite} alt="Link Icon White" />
                            </div>
                            <div className="button-text-container">
                                <p className="button-text">Sponsor Us</p>
                                <p className="button-text">Sponsor Us</p>
                            </div>
                        </div>
                    </a>
                </Box>
            </div>
        </>
    );
}

export default Sponsors;