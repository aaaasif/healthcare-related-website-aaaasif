import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ServiceDetails = () => {
    const { id } = useParams();
    const [serviceDetails, setServiceDetails] = useState([])
    const[singleService, setSingleService] =useState({})

    useEffect (() =>{
        fetch('/serviceDetails.json')
        .then(res=>res.json())
        .then(data=> setServiceDetails(data?.service))
    },[])

    useEffect(() =>{
        const FoundService = serviceDetails.find(service=>service.login.id===id)
        setSingleService(FoundService)
    },[ serviceDetails])
    
    return (
        
        <div className="container mt-5">
            <div className="">
                <h1 className="mb-2">{singleService?.name} services</h1>
                <div>
                    <img src={singleService?.picture?.thumbnail} alt="" className="mx-auto img-fluid"/>
                </div>
            </div>
            <div>
                <h3 className="mt-5 mb-3">Description</h3>
                <p>{singleService?.picture?.description}</p>
            </div>
            <Link className="common-button" to="Booking">Book Now</Link>
        </div>
    );
};

export default ServiceDetails;