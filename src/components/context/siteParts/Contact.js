import React from 'react'

export const Contact = ({name,email}) => {

    
    return (
        <section id="contact">
            <div>
                <div className="row-contact">
                    <div className="col-contact ">
                        <p className="email-icon" ><i className="fa fa-envelope large" data-aos='fade-down' ></i>
                        </p>
                        <h2>Get In Touch!</h2>
                        <p>You can shoot me an email if you want to make more enquiries.</p>
                        <p>
                            <a id="email-button" href="mailto:badmusfarouk399@gmail.com" rel="noreferrer" target="_blank" className='btn btn-contact '>Shoot</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
