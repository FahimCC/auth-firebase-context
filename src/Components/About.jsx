import Lottie from 'lottie-react';
import React from 'react';
import about from '../assets/about.json';

const About = () => {
	return (
		<div className='min-h-[calc(100vh-66px)]'>
			<div className='h-full w-full'>
				<Lottie animationData={about} loop={true} />
			</div>
		</div>
	);
};

export default About;
