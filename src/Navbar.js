import React from 'react';
import Logo from './Logo.png';
import './Navbar.css';


const Navbar =({onRouteChange})=>{
	return(
		<nav className='flex flex-wrap justify-center bb bw2 pv4-l pb0 nav bg-white  border-box'>
			<div className= 'w-40-l w-40-m w-80 pv0 slide-in-blurred-left mt0 mb0-l mb2 mh3-l mh1 pointer'>
				<img src={Logo} alt='logo' width={300} height={80} onClick={()=>onRouteChange('About')}/>
			</div>
			<div className='w-50-l w-60-m w-80 flex justify-end-l justify-center items-center mh3-l mh2 slide-in-blurred-right'>
				<p className='links pt3 ph3-l ph2-l ph1 mh3-l mh4-m mh1 f5-l f6 fw6 dim grow' onClick={()=>onRouteChange('About')}>HOME</p>
				<p className='links pt3 ph3-l ph2-l ph1 mh3-l mh4-m mh1 f5-l f6 fw6 dim grow' onClick={()=>onRouteChange('Services')}>SERVICES</p>
				<p className='links pt3 ph3-l ph2-l ph1 mh3-l mh4-m mh1 f5-l f6 fw6 dim grow' onClick={()=>onRouteChange('Contact')}>CONTACT</p>
			</div>
		</nav>
		);
}

export default Navbar;
 