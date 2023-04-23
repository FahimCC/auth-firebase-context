import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';

const PrivateRoutes = ({ children }) => {
	const { user, loading } = useContext(AuthContext);

	if (loading) {
		return (
			<div className='flex justify-center items-center h-[calc(100vh-66px)]'>
				<p className='text-7xl font-thin'>L</p>
				<div className='w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-blue-400'></div>
				<p className='text-7xl font-thin'>ading....</p>
			</div>
		);
	}
	if (user) {
		return children;
	}
	// return <Navigate to='/login'></Navigate>;
};

export default PrivateRoutes;
