import React from 'react';
import Fade from 'react-reveal/Fade';
import companyTruck from './companyTruck.png';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import B2 from './brands/Levis.png';
import B4 from './brands/playstation.png';
import B5 from './brands/samsung.png';
import './About.css';


const About = ({onRouteChange})=>{
	return(
		<article className='flex flex-column items-center'>
			<div className='w-100 subheader mb3-l mb2-m mb1 flex justify-center flex-column items-center'>
				<h1 className='fw6 f3-l f4 pv4-l pv3-m pv2'>ABOUT US</h1>
			</div>
			<section className='w-90 mt5-l mt3-m mt2 mb3 w-80 flex flex-column justify-center items-center'>
				<article className='w-90 mv2 flex flex-wrap justify-around ph0'>
					<Fade left big>
						<div className='w-40-l w-90 mv2'>
							<img className='card b--transparent center grow pointer' src={companyTruck} alt='business-card' width={500} height={300} />
						</div>
					</Fade>
					<Fade right big>	
						<div className='w-50-l w-90 flex flex-column items-center ma2 '>
							<h3 className='mv0 mh2 ph3 pb0 fw6 mb0 dark-blue f3-l f4'>WHO WE ARE</h3>
							<p className='ma2 ph3 f4-l f5 tj'>True Locks and Security Services has been providing locksmith services in the Brampton, Mississauga, Milton, Oakville, Toronto, Richmond Hill, Scarborough, Vaughan, GTA (Greater Toronto Area)in the GTA for over a half a decade. Our aim is to provide fast, reliable and quality locksmith services 24 hours - 7 days a week!</p>
							<div className='mv1 pa2'>
								 <ButtonToolbar className='flex justify-center'>
							    	<Button variant="primary" size="sm" className='mh2' onClick={()=>onRouteChange('Contact')}>Contact Us</Button>
							    	<Button variant="info" size="sm" className='mh2' onClick={()=>onRouteChange('Services')}>See Our Services</Button>
								</ButtonToolbar>
							</div>
						</div>
					</Fade>
				</article>
				<div className='w-90 mv3 pl3 tl-l tl-m tc mh2'>
					<Fade left big>
						<h3 className='fw6 ph3 mh0 mv3 dark-blue f3-l f4'>COMMITMENT</h3>
					</Fade>
					<Fade right big>	
						<p className='mh2 mb0 pv3 ph1 f4-l f5 tl'>We are committed to providing our customers with a fantastic experience from start to finish. If you come to us or if we come to you, you can
							be assured that you are dealing with a licensed security professional who will do their best to make sure your family is safe and secure.
						</p>
						<p className='pt1 pv1 ph1 mv1 mh2 tl f4-l f5'>We want True Locks and Security to be first name you think of when it comes to all of your security needs.</p>
					</Fade>
				</div>
				<section className='w-90 mt3 mb4 h-auto mh0'>
				<Fade left big>
					<h3 className='tl-l tl-m tc fw6 items-start ph3 mh2 mv4 dark-blue f3-l f4'>Our Clients</h3>
				</Fade>
				<Fade right big>
					<Carousel indicators={false} className='threeSectionCarousel'>
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
					<Carousel indicators={false} className='oneSectionCarousel'>
					  <Carousel.Item>
					    <img className='carouselImage' alt="900x500" src={B4} />
					    <div className='carouselCaption'>
						    <p className=''>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</div>
					  </Carousel.Item>
					  <Carousel.Item>
					    <img className='carouselImage' alt="900x500" src={B2} />
					    <div className='carouselCaption'>
						    <p className=''>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</div>
					  </Carousel.Item>
					  <Carousel.Item>
					    <img className='carouselImage' alt="900x500" src={B5} />
					    <div className='carouselCaption'>
						    <p className=''>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</div>
					  </Carousel.Item>
					</Carousel>
				</Fade>
			</section>
		</section>
	</article>
	);
}

export default About;