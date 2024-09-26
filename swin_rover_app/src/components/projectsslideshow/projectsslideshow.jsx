import * as React from 'react';
import './projectsslideshow.css'
import LinkRoundButton from '../roundbutton/linkroundbutton';
import RightRoundButton from '../roundbutton/rightroundbutton';
import LeftRoundButton from '../roundbutton/leftroundbutton';
import FirstHorizontalImg from '../../assets/project-1-1.jpg';
import FirstVerticalImg from '../../assets/project-1-2.jpg';
import SecondHorizontalImg from '../../assets/macbook-mockup.jpg';
import SecondVerticalImg from '../../assets/iphone-mockup.jpg';

let projects_slide_number = 0;
let numSlides = 2;
let subtitles = ['ARCh Competition 2024', '2025 SRT Team Project'];
let titles = ['Building the first Swinburne Rover', 'Building the new Website'];
let projects_links = ['/comingsoon', '/comingsoon'];
let tag_titles = ['Featured', 'Latest']

function goToUrl(url) {
    window.location.href=url;
}
function nextSlide() {
    projects_slide_number = projects_slide_number + 1;
    hideText();
    setTimeout(() => {displaySlides()}, 500);
}

function previousSlide() {
    projects_slide_number = projects_slide_number - 1;
    hideText();
    setTimeout(() => {displaySlides()}, 500);
}

function hideText() {
    document.querySelector('.projects-slideshow .text-container h1').style.transform = 'translateY(100%)';
    document.querySelector('.projects-slideshow .text-container p').style.transform = 'translateY(100%)';
    document.querySelector('.sidebar .tag p').style.transform = 'translateY(100%)';
    document.querySelector('.projects-container .active').classList.remove('active');
}

function displaySlides() {
    console.log('displaying slides');
    if (projects_slide_number < 0) {
        projects_slide_number = projects_slide_number * -1;
        projects_slide_number = projects_slide_number % numSlides;
        projects_slide_number = numSlides - projects_slide_number;
    }
    else {
        projects_slide_number = projects_slide_number % numSlides;
    }
    let counter = 0;
    document.querySelectorAll('.projects-container .project').forEach(slide => {
        if (counter === projects_slide_number) {
            slide.classList.add('active');
            document.querySelector('.projects-slideshow .text-container h1').innerHTML = titles[counter];
            document.querySelector('.projects-slideshow .text-container p').innerHTML = subtitles[counter];
            document.querySelector('.projects-slideshow .text-container h1').style.transform = 'translateY(0)';
            document.querySelector('.projects-slideshow .text-container p').style.transform = 'translateY(0)';
            document.querySelector('.projects-slideshow .text .round-button').href = projects_links[counter];
            document.querySelector('.sidebar .tag p').innerHTML = tag_titles[counter];
            document.querySelector('.sidebar .tag p').style.transform = 'translateY(0)';
        }
        counter++;
    })

}

function ProjectCard({landscape_img, vertical_img, classes}) {
    return (
        <div className={classes}>
            <div className="images">
            <img src={landscape_img} alt="" className="wide-image" />
            <img src={vertical_img} alt="" className="vertical-image" />
            </div>
        </div>
    );
}

function ProjectsSlideshow() {
    return (
        <div className="projects-slideshow">
            <div className="sidebar">
                <div className="tag">
                <div className="dot"></div>
                <div className="tag-text">
                    <p>Featured</p>
                </div>
                </div>
                <div className="controls">
                <LeftRoundButton text="Previous" click_func={previousSlide}/>
                <RightRoundButton text="Next" click_func={nextSlide}/>
                </div>
            </div>
            <div className="projects-container">
                <div className="text">
                <div className="text-container">
                    <div className="subtitle">
                    <p>ARCh Competition 2024</p>
                    </div>
                    <div>
                    <h1>Building the first Swinburne Rover</h1>
                    </div>
                </div>
                <LinkRoundButton text="View project" click_func={() => goToUrl('/comingsoon')}/>
                </div>
                <div className="projects-container">
                    <ProjectCard landscape_img={FirstHorizontalImg} vertical_img={FirstVerticalImg} classes="project active" />
                    <ProjectCard landscape_img={SecondHorizontalImg} vertical_img={SecondVerticalImg} classes="project" />
                </div>
            </div>
        </div>
    );
}

export default ProjectsSlideshow;