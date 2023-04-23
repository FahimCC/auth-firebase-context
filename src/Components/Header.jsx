import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Header = () => {
	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = () => {
		logOut()
			.then(() => {})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<div className='bg-base-100'>
			<div className='navbar my-container'>
				<div className='flex-1'>
					<Link className='btn btn-ghost normal-case text-xl'>
						Auth Firebase Context
					</Link>
				</div>
				<div className='flex-none'>
					<ul className='menu menu-horizontal px-1'>
						<li>
							<Link to='/'>Home</Link>
						</li>
						{user && (
							<>
								<li>
									<Link to='/about'>About Us</Link>
								</li>
								<li tabIndex={0}>
									<a>
										Others
										<svg
											className='fill-current'
											xmlns='http://www.w3.org/2000/svg'
											width='20'
											height='20'
											viewBox='0 0 24 24'
										>
											<path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
										</svg>
									</a>
									<ul tabIndex={0} className='p-2 bg-base-100'>
										<li>
											<Link to='/contact'>Contact</Link>
										</li>
										<li>
											<Link>Address</Link>
										</li>
									</ul>
								</li>
							</>
						)}
						{!user && (
							<>
								<li>
									<Link to='/login'>Login</Link>
								</li>
								<li>
									<Link to='/register'>Register</Link>
								</li>
							</>
						)}
					</ul>
					<div className='dropdown dropdown-end'>
						{/* <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
							<div className='w-10 rounded-full'>
								<img src='' />
							</div>
						</label> */}
						{user ? (
							<>
								<label tabIndex={0}>
									<div className='px-3 py-2 border rounded-lg'>
										<span className=''>{user.email}</span>
										<svg
											className='fill-current inline -mt-[2px]'
											xmlns='http://www.w3.org/2000/svg'
											width='20'
											height='20'
											viewBox='0 0 24 24'
										>
											<path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
										</svg>
									</div>
								</label>
								<ul
									tabIndex={0}
									className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
								>
									<li>
										<Link className='justify-between'>Profile</Link>
									</li>
									<li onClick={handleLogOut}>
										<Link>Logout</Link>
									</li>
								</ul>
							</>
						) : (
							''
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
