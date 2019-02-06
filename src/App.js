import React, { Component } from 'react';
import Navbar from './Navbar';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';
import 'tachyons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

class App extends Component {
  constructor(){
    super();
    this.state={
      route:'About'
    }
  }



onRouteChange=(route)=>this.setState({route:route});

  render() {
    return (
      <div className="App">
        <Navbar onRouteChange={this.onRouteChange}/>
          {
            this.state.route === 'About' 
            ?<About onRouteChange={this.onRouteChange}/>
            :(this.state.route === 'Services'
              ?<Services />
              :(this.state.route === 'Contact'
                ?<Contact />
                :null))
          }
        <Footer />
      </div>
    );
  }
}

export default App;
