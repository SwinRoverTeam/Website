import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import ProjectsGridCell from '../components/grid/grid';
import FirstHorizontalImg from '../assets/project-1-1.jpg';
import SecondHorizontalImg from '../assets/macbook-mockup.jpg';
import { Grid2 } from '@mui/material';
import RedBulletText from '../components/redBulletText/redBulletText';
import './projects.css'
import LinkRoundButton from '../components/roundbutton/linkroundbutton';
import FeaturedImg from '../assets/featured-project-img.jpg'
import DotLattice from '../components/dotlattice/dotlattice'

function goToUrl(url) {
    window.location.href = url;
}

function Projects() {
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
                <Grid2 size={{ xs: 8, md: 6 }}>
                    <p className='title'>We take pride in the projects that we work on. Keep up to date with our projects.</p>
                </Grid2>
                <Grid2 size={2} className="dot-lattice-grid-container">
                    <DotLattice />
                </Grid2>
            </Grid2>
            <Grid2
                container
                spacing={{ xs: 1, md: 3 }}
                columns={8}
                className='projects-chunk'
                direction={{ xs: 'column', md: 'row' }}
            >
                <Grid2 size={{ xs: 8, md: 2 }}>
                    {/* <h1 className='red-bullet'>Welcome to the Swinburne Rover Team</h1> */}
                    <RedBulletText
                        text="Our work"
                        fontClassName="medium-text"
                    />
                </Grid2>
                <Grid2 size={{ xs: 8, md: 4 }}
                    className='relative'
                >
                    <div className='featured-project'>
                        <div className="tag">
                            <RedBulletText className="all-white-tag" text="Featured" fontClassName='small-text' />
                        </div>
                        <div className="project-details">
                            <h2>Developing the first Swinburne Rover</h2>
                            <LinkRoundButton text="View project" click_func={() => goToUrl('/comingsoon')} />
                        </div>
                    </div>
                </Grid2>
                <Grid2 size={{ xs: 8, md: 2 }} className="img-container">
                    <img src={FeaturedImg} alt="" />
                </Grid2>
            </Grid2>
            <div className="grid">
                <ProjectsGridCell image_url={FirstHorizontalImg} title="Building the First Swinburne Rover" subtext="ARCh Competition 2024" button_url="/comingsoon" />
                <ProjectsGridCell image_url={SecondHorizontalImg} title="Building the new Website" subtext="2025 SRT Team Project" button_url="/comingsoon" />
            </div>
            <Footer />
        </>
    );
}

export default Projects;