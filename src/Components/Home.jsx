import React from 'react';

const Home = () => {
	return (
		<div
			className='hero min-h-[calc(100vh-66px)]'
			style={{
				backgroundImage: `url("https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?w=1380&t=st=1682168197~exp=1682168797~hmac=df5135a4f2fbbb1ba7d4aeb46cb3958a801cec1d2795a005fed859d6fb54378c")`,
			}}
		>
			<div className='hero-overlay bg-opacity-60'></div>
			<div className='hero-content text-center text-neutral-content'>
				<div className='max-w-md'>
					<h1 className='mb-5 text-5xl font-bold'>Hello there</h1>
					<p className='mb-5'>
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>
					<button className='btn btn-primary'>Get Started</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
