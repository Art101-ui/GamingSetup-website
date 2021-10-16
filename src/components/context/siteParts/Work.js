import React from 'react'
import gal1 from './img/gal-1.jpg'
import gal2 from './img/gal-2.jpg'
import gal3 from './img/gal-3.jpg'
import gal4 from './img/gal-4.jpg'
import gal5 from './img/gal-5.jpg'
import gal6 from './img/gal-6.jpg'
import gal7 from './img/gal-7.jpg'
import gal8 from './img/gal-8.jpg'
import gal9 from './img/gal-9.jpg'
import gal10 from './img/gal-10.jpg'
import gal11 from './img/gal-11.jpg'
import gal12 from './img/gal-12.jpg'
import gal13 from './img/gal-13.jpg'
import gal14 from './img/gal-14.jpg'




export const Work = () => {
    return (
       <div className="work" id='work'>
          <h3>My Work</h3>
          <div className="work-container">
         <figure className="gallery_item gallery_item-1">
            <img src={gal1} alt="img1" className='gallery_img img'/>
         </figure>
         <figure className="gallery_item gallery_item-2">
            <img src={gal2} alt="img2" className='gallery_img img'/>
         </figure>
         <figure className="gallery_item gallery_item-3">
            <img src={gal3} alt="img3" className='gallery_img img'/>
         </figure>
         <figure className="gallery_item gallery_item-4">
            <img src={gal4} alt="img4" className='gallery_img img'/>
         </figure>
         <figure className="gallery_item gallery_item-5">
            <img src={gal5} alt="img5" className='gallery_img img'/>
         </figure>
         <figure className="gallery_item gallery_item-6">
            <img src={gal6} alt="img6" className='gallery_img img'/>
         </figure>
         <figure className="gallery_item gallery_item-7">
            <img src={gal7} alt="img7" className='gallery_img img'/>
         </figure>
         <figure className="gallery_item gallery_item-8">
            <img src={gal8} alt="img8" className='gallery_img img'/>
         </figure>
         <figure className="gallery_item gallery_item-9">
            <img src={gal9} alt="img9" className='gallery_img img'/>
         </figure>
         <figure className="gallery_item gallery_item-10">
            <img src={gal10} alt="img10" className='gallery_img img'/>
         </figure>
         <figure className="gallery_item gallery_item-11">
            <img src={gal11} alt="img11" className='gallery_img img'/>
         </figure>
         <figure className="gallery_item gallery_item-12">
            <img src={gal12} alt="img12" className='gallery_img img'/>
         </figure>
         <figure className="gallery_item gallery_item-13">
            <img src={gal13} alt="img13" className='gallery_img img'/>
         </figure>
         <figure className="gallery_item gallery_item-14">
            <img src={gal14} alt="img14" className='gallery_img img'/>
         </figure>
       </div>
       </div>
    )
}
