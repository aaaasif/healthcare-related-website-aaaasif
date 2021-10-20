import React, { useEffect, useState } from 'react';
import Doctor from './Doctor';

const FindDoctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('Data/doctors.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDoctors(data);
            });
    }, []);

    return (
        <div className="container">
            <h1 className="mt-2 mb-4">Our Doctors</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.key}
                        doctor={doctor}
                    />)
                }
            </div>
        </div>
    );
};

export default FindDoctors;