import React from 'react';
import './navbar.css'
import LinkRoundButton from '../roundbutton/linkroundbutton';
import UnderlineButton from '../underlinebutton/underlinebutton';
import navIconBlack from '../../assets/nav-icon-black.svg'
import navIconWhite from '../../assets/nav-icon-white.svg'
import SRTLogo from '../../assets/srt-logo.svg'
import TeamImage from '../../assets/srt-image.jpg'
let navbar = document.querySelector('.navbar .menu');

function changeText(text) {
    document.querySelector('.second-nav-button-text').classList.add('changing-text');
        
        setTimeout(() => {
            document.querySelector('.second-nav-button-text').innerHTML = text;
            document.querySelector('.second-nav-button-text').classList.remove('changing-text');
        }, 300)
}

function toggleMenu() {
    document.querySelector('.navbar .menu').classList.toggle('active');
    if (document.querySelector('.active') != null) {
        changeText('Close');
    }
    else {
        changeText('Open');
    }
    let selection = document.querySelector('.options-activated') != null;
    if (selection) {
        document.querySelector('.options-activated').classList.toggle('options-activated');
    }
}

function toggleOptions(section_name) {
    let i = 0;
    document.querySelectorAll('.options-activated').forEach(activated_item => {
        if (activated_item.classList.contains(section_name) == false) {
            activated_item.classList.toggle('options-activated');
            i++;
        }
    })
    if (i > 0) {
        setTimeout(() => {document.querySelector('.' + section_name).classList.toggle('options-activated');}, 300);
    }
    else {
        document.querySelector('.' + section_name).classList.toggle('options-activated');
    }
}

function Navbar() {
    return (
    <div className="navbar">
        <img src={SRTLogo} alt="Logo" />
        <a onClick={toggleMenu} className="round-button">
        <div className="button-info">
            <div className="button-icon-container left">
            <img className="button-icon" src={navIconBlack} alt="Nav Icon Black" />
            <img className="button-icon" src={navIconWhite} alt="Nav Icon White" />
            </div>
            <div className="button-text-container">
            <p className="button-text">Menu</p>
            <p className="button-text second-nav-button-text">Open</p>
            </div>
        </div>
        </a>
        <div className="menu">
        <div className="categories">
        <a href="" className="underline-button">
            <p style={{ '--categories-number': 0 }}>Home</p>
          </a>
          <a onClick={() => toggleOptions('about-options')} className="underline-button">
            <p style={{ '--categories-number': 1 }}>About</p>
          </a>
          <a onClick={() => toggleOptions('projects-options')} className="underline-button">
            <p style={{ '--categories-number': 2 }}>Projects</p>
          </a>
          <a href="" className="underline-button">
            <p style={{ '--categories-number': 3 }}>Sponsors</p>
          </a>
        </div>
        <div className="sub-options">
            <div className="about-options">
            <NavCard title="Vision and Mission" number="0"/>
            <NavCard title="Meet the Team" number="1"/>
            <NavCard title="Code of Conduct" number="2"/>
            <LinkRoundButton text="View more" />
            </div>
            <div className="projects-options">
            <NavCard title="Project 1" number="0"/>
            <NavCard title="Project 2" number="1"/>
            <NavCard title="Project 3" number="2"/>
            <LinkRoundButton text="View more" />
            </div>
        </div>
        <div className="extra-links">
            <div className="contacts">
            <LinkRoundButton text="Join the team" style={{'--links-number': 0}}/>
            <LinkRoundButton text="Sponsor us" style={{'--links-number': 1}}/>
            </div>
            <div className="socials">
            <a href="" style={{ '--links-number': 2 }}>
                <div className="social-button"></div>
            </a>
            <a href="" style={{ '--links-number': 3 }}>
                <div className="social-button"></div>
            </a>
            <a href="" style={{ '--links-number': 4 }}>
                <div className="social-button"></div>
            </a>
            </div>
        </div>
        </div>
    </div>
    );
    }

    function NavCard({ title = "Vision and Mission", number}) {
    return (
    <div className="nav-card" style={{ '--nav-card-number': parseInt(number, 10) }}>
        <div className="image">
        <LinkRoundButton text="View Page" />
        </div>
        <div className="info">
        <h2>{title}</h2>
        </div>
    </div>
    );
}

export default Navbar;