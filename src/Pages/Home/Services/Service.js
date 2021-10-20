import React from 'react';
import { NavLink } from 'react-router-dom';
import './Services.css';

const Service = ({ service }) => {
    const { key, img1, name, shortDescription } = service;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img1} className="service-img card-img-top" alt="..." />
                <div class ="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{shortDescription}</p>
                    <NavLink to={`/service/${key}`}>
                    <button className=" common-button mb-2"
                    >See Details</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Service;