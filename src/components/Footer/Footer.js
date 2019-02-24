import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

const Footer = ()=>{
	return(
		<footer className="pt3 pb2 ph3 ph5-m ph6-l mid-gray bt b--black bw1 footer flex flex-column items-center light-gray">
		  	<small className="f6 db tc">© Copyright 2019 <b class="ttu">True Locks and Security</b>.,<b className='mh2'>All Rights Reserved  </b> 
		  		<p className='mv1 f6'>Developed by Mandeep Kandhari</p>
		  	</small>
		  	<div className="tc">
		  		<p className='flex justify-center items-center'>Follow us on: 
		  			<span className='f5 dim mh2 pointer'><FontAwesomeIcon className='fa-lg' icon={['fab', 'instagram']} /></span>
		  			<span className='f5 dim mh2 pointer'><FontAwesomeIcon className='fa-lg' icon={['fab', 'facebook-square']} /></span>
		  		</p>
			</div>
		</footer>
	);
}

export default Footer;
