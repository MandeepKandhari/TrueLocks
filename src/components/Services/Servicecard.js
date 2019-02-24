import React from 'react';

const Servicecard = ({id, name, image, info})=>{
	return(
		<article className='w-30-l w-40-m w-90 flex flex-column items-center bg-white bw1 br3 pv2 ph0 ma3 ba b--black-10 shadow-5 grow link'>
			<img src={image} alt='services' className='w-90 ba bw2 mt3' width={300} height={200}/>
			<div className='w-100 flex flex-wrap items-center justify-center mt1'>
				<h4 className='w-90 pt3 ph2 pb0 mv0 dark-blue f4-l f5'>{name}</h4>
				<p className='pt1 ph1 mt1 ph2 f5-l f5-m f6'>{info}</p>
			</div>
		</article>
	);
}

export default Servicecard;