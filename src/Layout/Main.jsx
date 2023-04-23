import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';

const Main = () => {
	return (
		<div>
			<Header />
			<div className='min-h-[calc(100vh-66px)]'>
				<Outlet />
			</div>
		</div>
	);
};

export default Main;
