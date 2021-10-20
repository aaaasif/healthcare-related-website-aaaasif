import React from 'react';
import img5 from '../../Images/doctorpatient copy.png';
import img6 from '../../Images/Annotation 2021-10-19 182423.png';
import img7 from '../../Images/1601541723_363_jeamchospital.jpg';
import './Telemedicine.css';
import { Link } from 'react-router-dom';

const Telemedicine = () => {
    return (
        <div className="">
            <img src={img5} alt="" className="img-telemedicine" />
            <img src={img6} alt="" className="img-telemedicine" />
            <div className="container">
                <h2 className="mt-5 pt-3 mb-3">24 Hours Telemedicine Service: Online Doctors in Bangladesh</h2>
                <p>SKB Medical College Hospital is located at Uttara in Dhaka Metropolitan City. But we want to spread our care in all corners through our Telemedicine Service in Bangladesh. Medical College Hospital is located at Uttara in Dhaka Metropolitan City. But we want to spread our care in all corners through our Telemedicine Service in Bangladesh.</p>
                <p>Our Hospital has launched a specialized department to provide treatment and support through online medical services. It is a great opportunity for everyone to connect with online doctors in Bangladesh. Patients can easily fix an appointment with just one call and connect for an online doctor consultation service. Our helpline is 24 hours open to provide instant support during an emergency.</p>
                <h2 className="mt-5 pt-4 mb-4">Why Jewmch Telemedicine?</h2>
                <div className="row d-flex align-items-center justify-content-evenly">
                    <div className="col-12 col-md-6">
                        <ul className="tele-li">
                            <li>High Quality Healthcare from the convenience of your home town</li>
                            <li>Second opinion for your health needs</li>
                            <li>Stay in touch with your Doctor - where ever you are</li>
                            <li>No waiting in queue for a review</li>
                            <li>Reduce travel, food & accommodation costs and save time</li>
                            <li>Easy follow-up with your preferred Doctor to ensure proper care</li>
                            <li>Security - all patient information is encrypted and secured</li>
                            <li>Stay assured and feel confident with virtual support</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6">
                        <img src={img7} alt="" className="img-fluid" />
                    </div>
                </div>
                <h2 className="mt-5 pt-4 mb-4">Specialities</h2>
                <p>Telemedicine is a service that can help a patient/ doctor/ hospital in a remote location to consult with a Super Specialist at Jewmch Hospital, using ICT (Information and Communication Technology) for the purpose of Diagnosis, Treatment, Second Opinion, or Follow-up. Our Hospital has launched a specialized department to provide treatment and support through online medical services. It is a great opportunity for everyone to connect with online doctors in Bangladesh. Patients can easily fix an appointment with just one call and connect for an online doctor consultation service. Our helpline is 24 hours open to provide instant support during an emergency. <Link className="toggle" to="/finddoctors">Here is the Specialities.</Link></p>
                <h2 className="mt-5 pt-4 mb-4">FAQ</h2>
                <div className="">
                    <div className="row d-flex justify-content-center align-items-center">
                        <ul className="col-12 col-md-6">
                            <li className="tele-faq-li text-md-center">Is the consultation secure ?</li>
                            <li className="tele-faq-li text-md-center">How does telemedicine help me and my family?</li>
                            <li className="tele-faq-li text-md-center">Will I meet the same Specialist I met earlier at Jewmch?</li>
                            <li className="tele-faq-li text-md-center">Is consultation through Telemedicine expensive?</li>
                        </ul>
                        <ul className="col-12 col-md-6">
                            <li className="tele-faq-li text-md-center">Will I get a valid prescription ?</li>
                            <li className="tele-faq-li text-md-center">Do I get a refund in case of no consultation ?</li>
                            <li className="tele-faq-li text-md-center">What exactly happens in a telemedicine Consultation?</li>
                            <li className="tele-faq-li text-md-center">What if I don’t get any response from the doctor?</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Telemedicine;