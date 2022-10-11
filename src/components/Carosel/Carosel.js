import React from 'react';
import img2 from '../../images/cover-1.jpg'

const Carosel = () => {
    return (
        <div>
         <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img2} className="d-block w-100 opacity-75" alt="" />
            <div className="carousel-caption d-none d-md-block align-items-center">
               <h1 className='text-info'>Test Your knowledge.</h1>
               <h3 className='text-info'>Here you are at the worlds one of the finest <br /> quiz website for web developers. <br /> Test your gained knowledge here.</h3>
            </div>
          </div>
        </div>
      </div>
   </div>
    );
};

export default Carosel;