import React from 'react';
import './DoctorDetails.css';
import { useParams } from 'react-router';

const DoctorDetails = () => {
    const { doctorId } = useParams();

    return (
        <div className="container doctor-body mt-5">
            <div className="row d-flex">
                <div className="col-12 col-md-6">
                    <img src="https://i.ibb.co/r6vdk7H/1605365514-646-Dr-Jaman-Umme-Humayra-1-245x300.png" alt="" className="img-fluid" />
                </div>
                <div className="col-12 col-md-6 doc-details">
                    <h3>Name: Dr. Zaman Ummay Humayra</h3>
                    <p>Speciality: Surgery</p>
                    <p>Degree: MBBS, FCPS in Plastic and Reconstructive Surgery</p>
                    <p>Experience: 15 Years</p>
                    <p>Visit: 1500 TK</p>
                    <p>Hours: 10am to 4pm, Saturday off</p>
                </div>
            </div>
            <div>
                <h3>Biography</h3>
                <p>Dr. Zaman Ummay Humayra has completed her fellowship on Plastic and Reconstructive surgery from Tokyo Womens’ Medical University, Japan at the age of 34 years and later she completed fellowship on same subject from Bangladesh College of Physicians and Surgeons. She is working as Associate Professor in Japan East West Medical College Hospital in Department of Surgery, Dhaka, Bangladesh. She is life member of ASOMA (Asian Society of Mastology), International Society of aesthetic Plastic Surgeons (ISAPS), Society of Surgeons of Bangladesh (SOSB), and Society of Plastic Surgeons of Bangladesh (SPSB). She has working experience of diabetic patients for 9 years in BIRDEM hospital in Department of Surgery and Hepatobiliary & Pancreatic Surgery department. Her practice specializes in Reconstructive procedures for post-trauma, cancer, congenital anomalies defects and Aesthetic surgical procedures. Dr. Humayra has special interest in comprehensive and oncoplastic breast cancer management. She has been serving as editorial board member of a multiple national journals.</p>
            </div>
        </div>
    );
};

export default DoctorDetails;