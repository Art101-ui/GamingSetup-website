import React from 'react'

import myimage from './img/myimage.jpg'


export const About = () => {
    return (
       <div className="about-container" id='about'>
            <div className='grid-about'>
              
                <div className="picture">
                <img data-aos='fade-right' src={myimage} alt = 'Loading...' />
                </div>
              
            <div data-aos='fade-left' className="about-me">
                <p> <span>Hi,</span> my name is Badmus Farouk, the guy you call when you need a dope gaming setup in your abode. I owned this skillset due to my extreme obsession to the architecture behind gaming setups and making things look perfectly cool. So do confide in me, as it's my life's purpose to make your wildest dreams come true.</p>
            </div>
        </div>
       </div>
    )
}
