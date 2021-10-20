import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faProcedures } from '@fortawesome/free-solid-svg-icons'
import "./Facility.css"

const Facility = () => {
    const user = <FontAwesomeIcon icon={faUser} />
    const procedures = <FontAwesomeIcon icon={faProcedures} />
    return (
        <div>
            <section className="icons-container">

                <div className="icons">
                    <i>{user}</i>
                    <h3>140+</h3>
                    <p>doctors at work</p>
                </div>
            
                <div className="icons">
                    <i>{user}</i>
                    <h3>1040+</h3>
                    <p>satisfied patients</p>
                </div>
            
                <div className="icons">
                    <i> {procedures}</i>
                    <h3>500+</h3>
                    <p>bed facility</p>
                </div>
            </section>
        </div>
    );
};

export default Facility;