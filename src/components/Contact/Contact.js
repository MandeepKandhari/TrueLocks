import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class About extends Component{
	constructor(){
		super();
		this.state={
			input:{
				name:'',
				number:'',
				message:''
			},
			status:''
		}
	}

onButtonSubmit=(message)=>{
	console.log('message',message)
	fetch('https://truelocks.appspot.com/message',{
		method:'post',
		headers:{'Content-Type':'application/json'},
		body:JSON.stringify({
			name:message.name,
			number:message.number,
			message:message.message
		})
	})
	.then(response=>response.json())
	.then(status=>this.setState({status:status}))	
	}

onNameChange=(event)=>this.setState(Object.assign(this.state.input,{name:event.target.value}))
onNumberChange=(event)=>this.setState(Object.assign(this.state.input,{number:event.target.value}))
onInputMessageChange=(event)=>this.setState(Object.assign(this.state.input,{message:event.target.value}))


	render(){
		return(
		<section>
			<div className='w-100 mb4-l mb3-m mb2 flex flex-column justify-center items-center subheader'>
				<h1 className='tc fw6 f3-l f4 pv4-l pv3-m pv2'>CONTACT US</h1>
			</div>
			<div className='flex flex-wrap justify-around'> 
				<Fade left big>
					<div className='w-90 ba shadow-5 br4 mv3 w-60-l w-60-m w-80 flex flex-column items-center justify-center'>
						<h2 className='w-90 mh2 mb2-l mb1-m mb0 ph3 pv4 f4-l f5-m f6 fw6'>Contact us to get a quote or for emergency situations we are here to serve you 24x7!</h2>
						<section className='w-90 ph3 pv2-l pv1-m pv0 mv2-l mv1 flex-l flex-wrap justify-center items-center'>
							<div className='w-50-l w-80 bw1 center'>
								<h3 className='mb4-l mb3-m mb0 mt1 pv2 ph2 dark-blue fw6 f3-l f3-m f4 tc-l tl'>Phone</h3>
								<div className='flex flex-column'>
									<p className='tl mb0 mh2 pv1-l pv1-m pv0 fw6 f5-l f5-m f6 tc-l tl'>Inderjit, T.C.P.L</p>
									<p className='tl mv1-l mv1-m mv0 mh2 pv1-l pv1-m pv0 f5-l f5-m f6 fw6 tc-l tl'>647-830-8783</p>
								</div>
							</div>
							<div className='w-50-l w-80 bw1 center mv2'>
								<h3 className='mb4-l mb3-m mb0 mt1 pv2 ph2 dark-blue fw6 fw6 f3-l f4-m f5 tc-l tl'>Address</h3>
								<div className='flex flex-column'>
									<p className='tl mb0 mh2 f5-l f5-m f6 fw6 tc-l tl'>72 Dolphin Song Crescent</p>
									<p className='tl mb0 mh2 f5-l f5-m f6 fw6 tc-l tl'>Brampton, ON</p>
									<p className='tl mb1 mh2 f5-l f5-m f6 fw6 tc-l tl'>L6R 2A4</p>
								</div>	
							</div>
						</section>	
						<section className='w-90 ba bw1 pv4 mb4 google-maps'>
							<iframe title='house location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2882.697726785306!2d-79.76678558486036!3d43.737605879118526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b164722bf58d5%3A0x37cea824881738f7!2s72+Dolphin+Song+Crescent%2C+Brampton%2C+ON+L6R+2A4!5e0!3m2!1sen!2sca!4v1548818774201" width="725" height="300" frameborder="0" style={{border:0}} allowfullscreen></iframe>
						</section>
					</div>
				</Fade>
			<Fade bottom big>
				<article className="br4 mv3 shadow-5 ba b--black dark-gray w-90 w-60-m w-30-l flex flex-column justify-center items-center">
			      	<main className="pa2 black-80 w-80">
			        	<div className="measure">
			        		<fieldset className="w-100 ba b--transparent">
			        			<legend className=" mt3 f3-l f4-m f5 fw6 w-100 tc center">Message Form</legend>
				        		<div className="mv3-l mv2-m mv1">
				        			<label  htmlFor='name' className='db fw6 flex items-start f5 w-100'><span className='pl2'>Name</span></label>
									<input className='pa3-l pa2 ba b--black bg-transparent w-100' 
									type='text' 
									placeholder='Enter your Name..' 
									name='name' 
									onChange={this.onNameChange}
									required/>	
				        		</div>
				          		
				          		<div className="mv3-l mv2-m mv1">
				          			<label htmlFor='phone' className='db fw6 flex items-start f5 w-100'><span className='pl2'>Phone</span></label>
									<input className='pa3-l pa2 ba b--black bg-transparent w-100' 
									type="tel" 
									placeholder='Enter your Phone number..' 
									name="phone" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" 
									onChange={this.onNumberChange}
									required />
				          		</div>
							
								<div className="mv3-l mv2-m mv1">
									<label htmlFor='message' className='db fw6 flex items-start f5 w-100'><span className='pl2'>Message</span></label>
									<textarea 
									className='pa3-l pa2 ba b--black bg-transparent w-100' 
									placeholder='Enter your message..' 
									name='message'
									onChange={this.onInputMessageChange} ></textarea>	
								</div>
								<div className="mt4-l mt3-m mt2 mb2-l mb1-m mb0">
									<button 
									className='b ph3 w-40-l w-50 tc pv2 input-reset ba b--black bg-transparent grow pointer fw5 f5 dib' 
									type='submit'
									onClick={()=>this.onButtonSubmit(this.state.input)} >Submit</button>	
								</div>
								<div className='mv2 pv2 fw6'>
									{
										this.state.status === 'success'
										?<p className='success'>Message send successfully we will get back to you shortly</p>
										:(this.state.status === 'error'
											?<p className='red'>Oops! something went wrong please check the details entered are correct</p>
											:'')
									}
								</div>
							</fieldset>
						</div>
					</main>
				</article>
			</Fade>
			<section className='w-90 mt4 bw1 flex justify-start'>
			<Fade bottom big>
				<h4 className='flex justify-center items-center mh2 ph2 f4-l f5'>Follow us on: 
						<span className='f3 dim mh2 pointer'><FontAwesomeIcon className='fa-lg insta' icon={['fab', 'instagram']} /></span>
						<span className='f3 dim mh2 pointer'><FontAwesomeIcon className='fa-lg fb' icon={['fab', 'facebook-square']} /></span>
				</h4>
			</Fade>	
		</section>
		</div>
	</section>
	);	
}
	
}

export default About;