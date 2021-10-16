import React from 'react'

export const Footer = () => {
    return (
        <footer className='footer-container '>
            <div className="container width">
                <div className="footer-col ">
                    <div className="col-1">
                        <h1 className='logo'>GSP</h1>
                    </div>
                    <div className="col-2">
                    <ul >
                        <li>
                        <a href="http://www.facebook.com/Badmusfarouk1" target='_blank' rel='noreferrer' className="text-white">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        </li>
                        <li >
    
                        <a href="http://www.twitter.com/Badmus_farouk1" target='_blank' rel='noreferrer' className="text-white">
                        <i className="fab fa-twitter"></i>
                        </a>
                        </li>
                        <li >
    
                        <a href="http://www.instagram.com/badmusfarouk369" target='_blank' rel='noreferrer' className="text-white">
                            <i className="fab fa-instagram"></i>
                        </a>
                        </li>
                        <li >
    
                        <a href="http://www.linkedin.com/in/Badmusfarouk1"  target='_blank' rel='noreferrer' className="text-white">
                        <i className="fab fa-linkedin-in"></i>
                        </a>
                        </li>
                        <li >
    
                        <a href="http://www.github.com/Art101-ui" target='_blank' rel='noreferrer' className="text-white">
                        <i className="fab fa-github-alt"></i>
                        </a>
                        </li>
          </ul>
                    </div>
                </div>
                <div className='line'></div>
                <div className="footer-text">
                    <h4>&copy; 2021 Designed By Farouk. All Rights Reserved</h4>
                </div>
            </div>
        </footer>
    )
}
