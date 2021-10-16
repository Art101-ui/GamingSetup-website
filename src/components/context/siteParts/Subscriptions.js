import React from 'react'
import { Basic } from './Basic'
import { Medium } from './Medium'
import { Advanced } from './Advanced'
import BasicState from '../basicContext/BasicState';

export const Subscriptions = () => {
    

    return (
        <BasicState>
            <div className='section' id='subscriptions'>

            <h3>Subscriptions</h3>

                <div className="row">
                <Basic/> 


                <Medium/>
                
        

                <Advanced/>

                </div>
            </div>
        </BasicState>
    )
}
