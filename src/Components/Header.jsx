import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='navbar bg-base-100'>
			<div className='flex-1'>
				<a className='btn btn-ghost normal-case text-xl'>
					Auth Firebase Context
				</a>
			</div>
			<div className='flex-none'>
				<ul className='menu menu-horizontal px-1'>
					<li>
						<Link to='\'>Home</Link>
					</li>
					<li>
						<Link to='\'>About Us</Link>
					</li>
					<li>
						<Link to='\'>Login</Link>
					</li>
					<li>
						<Link to='\'>Register</Link>
					</li>

					<li tabIndex={0}>
						<Link>
							Dropdown
							<svg
								className='fill-current'
								xmlns='http://www.w3.org/2000/svg'
								width='20'
								height='20'
								viewBox='0 0 24 24'
							>
								<path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
							</svg>
						</Link>
						<ul className='p-2 bg-base-100'>
							<li>
								<Link>Demo 1</Link>
							</li>
							<li>
								<Link>Demo 2</Link>
							</li>
						</ul>
					</li>
				</ul>
				<div className='dropdown dropdown-end'>
					<label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
						<div className='w-10 rounded-full'>
							<img src='/images/stock/photo-1534528741775-53994a69daeb.jpg' />
						</div>
					</label>
					<ul
						tabIndex={0}
						className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
					>
						<li>
							<Link className='justify-between'>Profile</Link>
						</li>
						<li>
							<Link>Logout</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
