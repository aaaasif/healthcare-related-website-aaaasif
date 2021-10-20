import React from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    
    return (
        
        <div className="container mt-5">
            <div className="">
                <div>
                    <img src="https://i.ibb.co/KXHVSy3/emergency-department-pic-2.jpg" alt="" className="mx-auto img-fluid"/>
                </div>
            </div>
            <div>
                <h3 className="mt-5 mb-3">Description</h3>
                <p>SKB Medical Hospital (PVT) Ltd operates one of the best Accident & Emergency Center in Savar, providing services for trauma and non-trauma medical and surgical emergencies 24 hours a day, seven days a week. SKB Medical Hospital (PVT) Ltd Accident & Emergency Center is conveniently located in level-1 of the hospital with a separate entrance. Fully equipped Center is staffed with full-time experienced physicians, nurses and paramedic team, who are specialized in all areas of Emergency Medicine. The Center provides a range of state-of-the-art equipment and technology for emergency management and support, as well as emergency access to other sub specialties and physicians. The Center is also supported by 24-hour imaging, laboratory and Blood Bank services. Life support equipped ambulances are on the go round-the-clock for emergency patients. There is an 8-bedded emergency observation ward to monitor patients’ responses to treatment, as well as four triage beds to determine the level of priority of patients. The Center is also equipped with an operating theater (OT) where emergency surgical procedures are performed, as well as a Chest Pain Observation Unit (CPOU) for management of patients experiencing chest pain.</p>
            </div>
        </div>
    );
};

export default ServiceDetails;