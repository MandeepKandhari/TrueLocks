import React from 'react';
import Card from './Card.jpg';
import { ButtonToolbar, Carousel, Button } from 'react-bootstrap';
import B2 from './brands/Levis.png';
import B4 from './brands/playstation.png';
import B5 from './brands/samsung.png';
import './About.css';

const About = ({onRouteChange})=>{
	return(
		<article className='flex flex-column items-center'>
			<section className='homeBackground flex flex-column items-center '>
				<div className='ba w-80 pv2 mv3 flex flex-wrap items-center justify-center mv7'>
					<h3 className='w-90 homeText f3 '>Welcome to True Locks & Security Services</h3>
				</div>
			</section>
			<div className='mt4 w-100 subheader mb3-l mb2-m mb1 flex justify-center flex-column items-center'>
				<h1 className='fw6 f3-l f4 pv5-l pv3-m pv2'>ABOUT US</h1>
			</div>
			<section className='w-90 mt5-l mt3-m mt2 mb3 w-80 flex flex-column items-center'>
				<article className='w-90 mv2 flex flex-wrap justify-around ph0'>
					<div className='w-40-l w-40-m w-90 mv2 mh0 bounce-in-top'>
						<img className='card br4 b--gray shadow-5 grow pointer' src={Card} alt='business-card' width={500} height={300} />
					</div>
					<div className='w-50-l w-50-m w-90 flex flex-column items-center ma2 '>
						<h3 className='mv0 mh2 ph3 pt3 pb0 fw6 mb0 slide-in-right dark-blue f3-l f4'>WHO WE ARE</h3>
						<p className='ma2 ph3  f4-l f5 tj slide-in-left'>True Locks and Security Services has been providing locksmith services in the Brampton, Mississauga, Milton, Oakville, Toronto, Richmond Hill, Scarborough, Vaughan, GTA (Greater Toronto Area)in the GTA for over a half a decade. Our aim is to provide fast, reliable and quality locksmith services 24 hours - 7 days a week!</p>
						<div className='mv4 ph3 pv2'>
							 <ButtonToolbar className='flex justify-center'>
						    	<Button variant="primary" className='button ma4-l ma2-m ma1 pa2' onClick={()=>onRouteChange('Contact')}>Contact Us</Button>
						    	<Button variant="info" className='button ma4-l ma2-m ma1 pa2' onClick={()=>onRouteChange('Services')}>See Our Services</Button>
							</ButtonToolbar>
						</div>
					</div>
				</article>
				<div className='w-90 mv3 mh0 pl3 tl-l tl-m tc mh2'>
					<h3 className='fw6 ph3 mh0 mv3 slide-in-left dark-blue f3-l f4'>COMMITMENT</h3>
					<p className='mh2 mb0 pv3 ph1 f4-l f5 tl slide-in-right'>We are committed to providing our customers with a fantastic experience from start to finish. If you come to us or if we come to you, you can
						be assured that you are dealing with a licensed security professional who will do their best to make sure your family is safe and secure.
					</p>
					<p className='pt1 pv1 ph1 mv1 mh2 tl f4-l f5'>We want True Locks and Security to be first name you think of when it comes to all of your security needs.</p>
				</div>
			</section>
			<section className='w-90 mt3 mb4 h-auto mh2'>
				<h3 className='tl-l tl-m tc fw6 items-start ph3 mh0 mv4 slide-in-left dark-blue f3-l f4'>Our Clients</h3>
				<Carousel indicators={false} className='carousel-control.left carousel-control.right' >
					<Carousel.Item>
						<section className='flex justify-center'>
							<section className='carouselSection'>
						    <img className='carouselImage' alt="900x500" src={B5} />
						    <div className='carouselCaption'>
						      <p className='pa0 ma0'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						    </div>
						    </section>
						    <section className='carouselSection'>
						    <img className='carouselImage' alt="900x500" src={B5} />
						    <div className='carouselCaption'>
						      <p className='pa0 ma0'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						    </div>
						    </section>
						    <section className='carouselSection'>
						    <img className='carouselImage' alt="900x500" src={B5} />
						    <div className='carouselCaption'>
						      <p className='pa0 ma0'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						    </div>
						    </section>
						</section>    
					</Carousel.Item>
					<Carousel.Item>
						<section className='flex justify-center'>
							<section className='carouselSection'>
						    <img className='carouselImage' alt="900x500" src={B2} />
						    <div className='carouselCaption'>
						      <p className='pa0 ma0'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						    </div>
						    </section>
						    <section className='carouselSection'>
						    <img className='carouselImage' alt="900x500" src={B2} />
						    <div className='carouselCaption'>
						      <p className='pa0 ma0'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						    </div>
						    </section>
						    <section className='carouselSection'>
						    <img className='carouselImage' alt="900x500" src={B2} />
						    <div className='carouselCaption'>
						      <p className='pa0 ma0'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						    </div>
						    </section>
						</section>    
					</Carousel.Item>
					<Carousel.Item>
						<section className='flex justify-center'>
							<section className='carouselSection'>
						    <img className='carouselImage' alt="900x500" src={B4} />
						    <div className='carouselCaption'>
						      <p className='pa0 ma0'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						    </div>
						    </section>
						    <section className='carouselSection'>
						    <img className='carouselImage' alt="900x500" src={B4} />
						    <div className='carouselCaption'>
						      <p className='pa0 ma0'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						    </div>
						    </section>
						    <section className='carouselSection'>
						    <img className='carouselImage' alt="900x500" src={B4} />
						    <div className='carouselCaption'>
						      <p className='pa0 ma0'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						    </div>
						    </section>
						</section>    
					</Carousel.Item>
				</Carousel>
			</section>
		</article>
		);
}

export default About;