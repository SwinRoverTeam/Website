import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import './footer.css'
import dotMatrix from 'assets/test_dot_matrix.png'
import SRTLogo from 'assets/srt-logo.svg'
import RedBulletText from '../redBulletText/redBulletText'
import '../../index.css'
import UnderlineButton from '../underlinebutton/underlinebutton'
import DotLattice from '../dotlattice/dotlattice';


function goToUrl(url) {
	window.location.href=url;
}

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
					className="links-container"
				>
					<WebLinks />
					<SocialLinks />
					<ContactLinks />
				</Stack>
				<Box sx={{ display: { xs: 'none', xl: 'block' } }}>
					<DotLattice/>
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
				{/* <h2 className='red-bullet'>
					Let's push the boundaries of what we can achieve together.
				</h2> */}
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
			justifyContent='flex-start'
			className='inter-paragraph acknowledgements'
		>
			<p>
				We acknowledge and pay respects to the Elders and Traditional Owners of the land on which our team works on, 
				the Wurundjeri People of the Kulin Nation.
			</p>
			<p>
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
		>
			<h3>Website</h3>
			<UnderlineButton
				text='Home'
				click_func={() => goToUrl('/home')}
			/>
			<UnderlineButton
				text='About'
				click_func={() => goToUrl('/about')}
			/>
			<UnderlineButton
				text='Team'
				click_func={() => goToUrl('/about#breakdown')}
			/>
			<UnderlineButton
				text='Projects'
				click_func={() => goToUrl('/projects')}
			/>
			<UnderlineButton
				text='Sponsors'
				click_func={() => goToUrl('/home#sponsors')}
			/>
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
		>
			<h3>Social</h3>
			<UnderlineButton
				text='LinkedIn'
				click_func={() => goToUrl('https://www.linkedin.com/company/swinburne-rover-team/')}
			/>
			<UnderlineButton
				text='Instagram'
				click_func={() => goToUrl('https://www.instagram.com/swinroverteam/')}
			/>
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
		>
			<h3>Contact</h3>
			<UnderlineButton
				text='Contact'
				click_func={() => goToUrl('mailto:swinroverteam@swin.edu.au')}
			/>
			<UnderlineButton
				text='Join team'
				click_func={() => goToUrl('mailto:swinroverteam@swin.edu.au')}
			/>
			<UnderlineButton
				text='Sponsor'
				click_func={() => goToUrl('mailto:swinroverteam@swin.edu.au')}
			/>
			<UnderlineButton
				text='Email'
				click_func={() => goToUrl('mailto:swinroverteam@swin.edu.au')}
			/>
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
			<a href='/comingsoon' className='inter-links'>Terms and Conditions</a>
			<a href='/comingsoon' className='inter-links'>Privacy Policy</a>
		</Stack>
	);
}

export default Footer;