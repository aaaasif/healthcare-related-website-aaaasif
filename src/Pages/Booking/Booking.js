import React from 'react';
import "./Booking"

const Booking = () => {
    return (
        <div className='m-5'>
            <form >
               <div className="mb-5 ">
                 <label for="exampleInputEmail1" className="form-label m-2">Fill The Form</label>
                 <input type="email" placeholder="your name" className="form-control m-2" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                 <input type="email" placeholder="your number" className="form-control m-2" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                 <input type="email" placeholder="your email" className="form-control m-2" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                 <input type="date" className="form-control m-2" id="exampleInputEmail1 " aria-describedby="emailHelp"/>
                </div> 
               <button type="submit" className="common-button">Confrom</button>
             </form>
        </div>
    );
};

export default Booking;