import React from 'react'
import { Navbar } from '../layout/Navbar'
import {HashLink as Link} from 'react-router-hash-link'


export const Home = () => {
    return (
        <div id='home'>
            
            <div className="header">
               <Navbar/>
                <div className='text-box'>
                    <h1 className='large-text'>Bear Witness To My Finesse</h1>
                    <h3 className='medium-text'>I build the dopest and coolest gaming setups.</h3>
                    <p>
                            <Link smooth to="#work" className= 'btn btn-home'>My Work</Link>
                    
                        </p>
                </div>
                
            </div>
        </div>
    )
}
