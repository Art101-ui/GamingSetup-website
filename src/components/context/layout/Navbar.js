import React, { useState } from 'react'

import PropTypes from 'prop-types'
import {HashLink as Link} from 'react-router-hash-link'



export const Navbar = ({logo}) => {
    
     const [navb,setNavb] = useState(false)
     const [color,setColor] = useState(false)

     const changeBackground= ()=>{
        if(window.scrollY >= 80){
            setNavb(true)
            setColor(true)
        }else{
            setNavb(false)
            setColor(false)
        }
     }

     window.addEventListener('scroll',changeBackground)
    
    return (
       
        <nav className ={navb ? 'nav active' : 'nav'}>
           <div className="sticky">
           <div className="navbar container">

                <h1 className={color ? ' logo logo-color' : 'logo'}>{logo}</h1>           

                <ul>
                    <li className='home'>
                        <Link smooth to="#home" className={color ? 'color' : 'links'}>Home</Link>
                    </li>
                    <li className='about'>
                        <Link smooth to="#about" className={color ? 'color' : 'links'}>About</Link>
                    </li>
                    <li className='works'>
                        <Link smooth to="#work" 
                        className={color ? 'color' : 'links'}>Work</Link>
                    </li>
                    
                    <li className='subscriptions'>
                        <Link smooth to="#subscriptions" className={color ? 'color' : 'links'}>Subscriptions</Link>
                    </li>
                    <li className='contact'>
                        <Link smooth to="#contact" className={color ? 'color' : 'links'}>Contact</Link>
                    </li>
                    
                </ul>
                    
                </div>
           </div>
    
        </nav>

    )
}

Navbar.defaultProps = {
    logo:'GSP'
    
}

Navbar.propTypes={
   logo: PropTypes.string.isRequired,
}


