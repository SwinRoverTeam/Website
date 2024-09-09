import * as React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import ProjectsGridCell from '../../components/grid/grid';
import FirstHorizontalImg from '../../assets/project-1-1.jpg';
import SecondHorizontalImg from '../../assets/macbook-mockup.jpg';
import { Grid2 } from '@mui/material';

function Projects() {
    return (
        <>
            <Navbar />
            <div className="grid">
                <ProjectsGridCell  image_url={FirstHorizontalImg} title="Building the First Swinburne Rover" subtext="ARCh Competition 2024" button_url="comingsoon.html"/>
                <ProjectsGridCell  image_url={SecondHorizontalImg} title="Building the new Website" subtext="2025 SRT Team Project" button_url="comingsoon.html"/>
            </div>
            {/* <Footer /> */}
        </>
    );
}

export default Projects;