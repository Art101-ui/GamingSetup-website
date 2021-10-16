import React,{ useEffect,Fragment} from 'react';
import {BrowserRouter as Router,Route,Switch,withRouter} from 'react-router-dom'

import { Home } from './components/context/siteParts/Home';
import { About } from './components/context/siteParts/About';
import { Work } from './components/context/siteParts/Work';
import { Subscriptions } from './components/context/siteParts/Subscriptions';
import { Contact } from './components/context/siteParts/Contact';
import { Footer } from './components/context/siteParts/Footer';
import BasicState from './components/context/basicContext/BasicState';
import MediumState from './components/context/mediumContext/MediumState';
import AdvancedState from './components/context/advancedContext/AdvancedState';
import Aos from 'aos';
// import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import 'aos/dist/aos.css';
import './App.css';


const App = ()=> {
  useEffect(() => {
     M.AutoInit()
     Aos.init({duration:900})
  }, )
  return (
    <AdvancedState>
      <MediumState>
        <BasicState>
          <Fragment>
              <Router>
                <Home/>
                <About/>
                <Work/>
                <Subscriptions/>
                <Contact/>
                <Switch/>
                <Route exact path="/home" component={withRouter(Home)}/>
                <Route exact path="/about" component={withRouter(About)}/>
                <Route exact path='/work' component={withRouter(Work)}/>
                <Route exact path='/subscriptions' component={withRouter(Subscriptions)}/>
                <Route exact path='/contact' component={withRouter(Contact)}/>   
                <Footer/>
              </Router>
          </Fragment>
        </BasicState> 
      </MediumState>
     </AdvancedState>
  );
}

export default App;
