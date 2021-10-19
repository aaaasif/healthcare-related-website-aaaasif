import React from 'react';
import './Banner.css'
import BannerLogo from '../../image/home-img.svg'
const Banner = () => {
    return (
        <div className="home mt-5 row align-items-center" id="home">
            <div className="col-7">
                <img className="image w-75" src={BannerLogo} alt="" />
            </div>
            <div class="content col-5 text-start">
                <h1>Stay Safe, Stay Healthy</h1>
                <p>“To ensure good health: eat lightly, breathe deeply, live moderately, cultivate cheerfulness, and maintain an interest in life.”</p>
                <button>Contact Us</button>
            </div>
        </div>
 
    );
};

export default Banner;

           //     <div id="carouselExampleCaptions" className="carousel slide banner" data-bs-ride="carousel">
            //         <div className="carousel-indicators">
            //             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            //             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            //             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            //         </div>
            //             <div className="carousel-inner">
            //                 <div className="carousel-item active">
            //                     <img src="https://i.ibb.co/RBrVcw9/First-aid-kit-bro-1.png" className="d-block w-100 banner-img" alt="..."/>
            //                 <div className="carousel-caption d-none d-md-block">
            //                     <h2 className='fw-bolder fs-1 banner-text'>Stay Safe, Stay Healthy</h2>
            //                     <p>Some representative placeholder content for the first slide.</p>
            //                 </div>
            //             </div>
            //                 <div className="carousel-item">
            //                     <img src="https://i.ibb.co/RBrVcw9/First-aid-kit-bro-1.png" className="d-block w-100 banner-img" alt="..."/>
            //                 <div className="carousel-caption d-none d-md-block">
            //                 <h2 className='fw-bolder fs-1 banner-text'>Stay Safe, Stay Healthy</h2>
            //                     <p>Some representative placeholder content for the second slide.</p>
            //                 </div>
            //             </div>
            //                 <div className="carousel-item">
            //                     <img src="https://i.ibb.co/RBrVcw9/First-aid-kit-bro-1.png" className="d-block w-100 banner-img" alt="..."/>
            //                 <div className="carousel-caption d-none d-md-block">
            //                 <h2 className='fw-bolder fs-1 banner-text'>Stay Safe, Stay Healthy</h2>
            //                     <p>Some representative placeholder content for the third slide.</p>
            //                 </div>
            //             </div>
            //             </div>
            //                 <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            //                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            //                     <span className="visually-hidden">Previous</span>
            //                     </button>
            //                     <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            //                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
            //                     <span className="visually-hidden">Next</span>
            //                 </button>
            // </div>