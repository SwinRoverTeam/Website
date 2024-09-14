import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import './footer.css'
import dotMatrix from '../../assets/test_dot_matrix.png'
import SRTLogo from '../../assets/srt-logo.svg'
import RedBulletText from '../redBulletText/redBulletText'
import '../../index.css'
import UnderlineButton from '../underlinebutton/underlinebutton'


function Footer () {
	return (
		<footer>
			<Banner />  
			<Stack
				direction={{ xs:'column-reverse', md: 'row' }}
				spacing={10}
				className='chunk'
			>
				<Respects />
				<Stack
					direction='row'
					spacing={{ xs: 0, md: 10 }}
					justifyContent={{ xs: 'space-evenly', lg: 'none'}}
				>
					<WebLinks />
					<SocialLinks />
					<ContactLinks />
				</Stack>
				<Box sx={{ display: { xs: 'none', xl: 'block' } }}>
					<img src={dotMatrix} alt='Dot Matrix' width='200' height='200'/>
					{/* Image source: https://clipground.com/dot-pattern-png.html */}
				</Box>
			</Stack>
			<Policies />
		</footer>
	);
};



function Banner () {
	return (
		<Stack
			direction={{ xs: 'column', md: 'row'}}
			alignItems='center'
			className='heading-box chunk'
			spacing={8}
		>

			<img src={SRTLogo} alt='Swinburne Rover Team Logo' className='logo'/>
			<Box display={{ xs: 'none', md: 'block' }}>
				<RedBulletText
					text="Let's push the boundaries of what we can achieve together."
					fontClassName="headline"
				/>
			</Box>
		</Stack>
	);
};

function Respects () {
	return (
		<Stack
			direction='column'
			justifyContent='space-between'
		>
			<p className='small-text'>
				We acknowledge and pay respects to the Elders and Traditional Owners of the land on which our team works on, 
				the Wurundjeri People of the Kulin Nation.
			</p>
			<p className='small-text'>
				© 2024. All rights reserved. Swinburne Rover Team.
			</p>
		</Stack>
	);
};

function WebLinks () {
	return (
		<Stack
			direction='column'
			justifyContent='flex-start'
			alignItems='flex-start'
			className='links'
			spacing={1}
		>
			<p className="medium-text">Website</p>
			<a href="#">
				<UnderlineButton text='Home'/>
			</a>
			<a href="#">
				<UnderlineButton text='About'/>
			</a>
			<a href="#">
				<UnderlineButton text='Team'/>
			</a>
			<a href="#">
				<UnderlineButton text='Projects'/>
			</a>
			<a href="#">
				<UnderlineButton text='Sponsors'/>
			</a>
		</Stack>
	);
};

function SocialLinks () {
	return (
		<Stack
			direction='column'
			justifyContent='flex-start'
			alignItems='flex-start'
			className='links'
			spacing={1}
		>
			<p className="medium-text">Social</p>
			<a href="#">
				<UnderlineButton text='LinkedIn'/>
			</a>
			<a href="">
				<UnderlineButton text='Instagram'/>
			</a>
		</Stack>
	);
};

function ContactLinks () {
	return (
		<Stack
			direction='column'
			justifyContent='flex-start'
			alignItems='flex-start'
			className='links'
			spacing={1}
		>
			<p className="medium-text">Contact</p>
			<a href="#">
				<UnderlineButton text='Contact'/>
			</a>
			<a href="#">
				<UnderlineButton text='Join team'/>
			</a>
			<a href="#">
				<UnderlineButton text='Sponsor'/>
			</a>
			<a href="#">
				<UnderlineButton text='Email'/>
			</a>
		</Stack>
	);
};

function Policies () {
	return (
		<Stack
			direction='row'
			className='chunk'
			alignItems='center'
			justifyContent='flex-start'
			spacing={4}
		>
			<a href='#' className='inter-links'>Terms and Conditions</a>
			<a href='#' className='inter-links'>Privacy Policy</a>
		</Stack>
	);
}

export default Footer;