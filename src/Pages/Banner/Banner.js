import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
                <div id="carouselExampleCaptions" className="carousel slide banner" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://i.ibb.co/RBrVcw9/First-aid-kit-bro-1.png" className="d-block w-100 banner-img" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h2 className='fw-bolder fs-1'>Stay Safe, Stay Healthy</h2>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                            <div className="carousel-item">
                                <img src="https://i.ibb.co/RBrVcw9/First-aid-kit-bro-1.png" className="d-block w-100 banner-img" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                            <div className="carousel-item">
                                <img src="https://i.ibb.co/RBrVcw9/First-aid-kit-bro-1.png" className="d-block w-100 banner-img" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                        </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
            </div>
    );
};

export default Banner;