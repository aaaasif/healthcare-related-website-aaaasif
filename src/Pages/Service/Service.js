import React from 'react';

const Service = ({service}) => {
    const { name, time, img} = service;
    return (
        <div className="col">
            <div className="card h-75">
                    <img src={img} className="card-img-top" alt="..."/>
                 <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <small>{time}</small>
                 </div>
                 <div className="card-footer">
                    <button className="btn btn-danger">Book Now</button>
                 </div>
            </div>
        </div>
    );
};

export default Service;