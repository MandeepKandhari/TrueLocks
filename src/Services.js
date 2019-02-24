import React from 'react';
import Servicecard from './Servicecard.js'
import {services} from './service.js';

const Services = ()=>{
	return(
		<section className='flex flex-column center items-center slide-in-left'>
			<div className='w-100 flex flex-column justify-center items-center subheader'>
				<h1 className='tc fw6 f3-l f4 pv5-l pv3-m pv2'>Services</h1>
			</div>
			
			<div className='w-80 mt4 mb3 pv1'>
				<h4 className='center tj ph5-l ph4-m ph3 f4-l f5-m f6'>True Lock & Security Services understands the growing need for security and we provide a wide variety of services to meet that need including</h4>
			</div>
			<article className='w-90 flex flex-wrap justify-center'>
				{
					services.map((service,i)=>{
						return(
							<Servicecard {...service} />
						)
					})
				}
			</article>
		</section>
		
		);
}

export default Services;