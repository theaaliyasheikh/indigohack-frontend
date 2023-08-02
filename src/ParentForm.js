// import React from 'react';
import './ParentForm.css';
import { useState } from 'react';

function ParentForm() {
    const [droppingGuardian, setDroppingGuardian] = useState('');
    const [minorName, setMinorName] = useState('');
    const [fromLocation, setFromLocation] = useState('');
    const [toLocation, setToLocation] = useState('');
    const [flightNumber, setFlightNumber] = useState('');
    const [flightDate, setFlightDate] = useState('');
    const [departingGuardianAddress, setDepartingGuardianAddress] = useState('');
    const [departingGuardianTelephoneNumber, setDepartingGuardianTelephoneNumber] = useState('');
    const [arrivalGuardianName, setArrivalGuardianName] = useState('');
    const [arrivalGuardianAddress, setArrivalGuardianAddress] = useState('');
    const [arrivalGuardianTelephone, setArrivalGuardianTelephone] = useState('');

    function validate() {
        console.log({ droppingGuardian, minorName, fromLocation, toLocation, flightNumber, flightDate, departingGuardianAddress, departingGuardianTelephoneNumber, arrivalGuardianAddress, arrivalGuardianName, arrivalGuardianTelephone });
    }

    return (
        <div className='container'>
            <div className="parentForm">
                {/* <p>Indigo<br />4 Copies of this form to be completed by parent / guardian in respect of an unaccompanied minor customer travels</p> */}
                <p>I Mr. / Mrs. <input className='droppingGuardian' placeholder='Dropping Guardian' type="text" onChange={(e) => setDroppingGuardian(e.target.value)} />
                Parent / Guardian of Master / Miss <input className='minorName' placeholder='Minor Name' type="text" onChange={(e) => setMinorName(e.target.value)} />
                    do hereby authorize IndiGo to carry unaccompanied aforesaid <br /><br /> minor customer between <input className='fromLocation' placeholder='Departure Location' type="text" onChange={(e) => setFromLocation(e.target.value)} />
                    &nbsp;&nbsp; (departure city) and &nbsp;&nbsp;
                    <input className='toLocation' placeholder='Arrival Location' type="text" onChange={(e) => setToLocation(e.target.value)} /> (arrival city).</p>

                <p>The unaccompanied minor will be traveling by IndiGo Flight.</p>

                <p>No &nbsp;&nbsp;<input className='flightNumber' placeholder='Flight Number' type="text" onChange={(e) => setFlightNumber(e.target.value)} /> on &nbsp;&nbsp;
                <input className='flightDate' type="date" placeholder='Flight Date' onChange={(e) => setFlightDate(e.target.value)} /> (date).</p>

                <p>I confirm that Master / Miss <input className='minorName' placeholder='Minor Name' type="text" onChange={(e) => setMinorName(e.target.value)} /> will be met on </p>

                <p>Arrival by</p>
                <p>Mr. / Mrs <input className='arrivalGuardianName' placeholder='Arrival Guardian Name' type="text" onChange={(e) => setArrivalGuardianName(e.target.value)} /></p>

                <p>
                    Who has been deputed by me and | shall indemnify IndiGo against any claims,
                    arising from such carriage.<br/>
                    Name, address and telephone number of Parent/Guardian, at departure city. <br />
                    <label className='secondaryLabel'>Name: </label><input className='droppingGuardian' placeholder='Name' type="text" onChange={(e) => setDroppingGuardian(e.target.value)} /> <br/> <br/>
                    <label className='secondaryLabel'>Address: </label><input className='departingGuardianAddress' placeholder='Address' type="text" onChange={(e) => setDepartingGuardianAddress(e.target.value)} /> <br/> <br/>
                    <label className='secondaryLabel'>Telephone: </label><input className='departingGuardianTelephoneNumber' placeholder='Contact Number' type="number" onChange={(e) => setDepartingGuardianTelephoneNumber(e.target.value)} />

                    <br /> <br />
                    Name, address and telephone contact, at arrival city, of authorized representative receiving the unaccompanied minor.
                </p>
                <p>
                <label className='secondaryLabel'>Name: </label><input className='arrivalGuardianName' type="text" placeholder='Name' onChange={(e) => setArrivalGuardianName(e.target.value)} /> <br/><br/>
                <label className='secondaryLabel'>Address: </label><input className='arrivalGuardianAddress' type="text" placeholder='Address' onChange={(e) => setArrivalGuardianAddress(e.target.value)} /> <br/><br/>
                <label className='secondaryLabel'>Telephone: </label><input className='arrivalGuardianTelephone' type="number" placeholder='Contact Number' onChange={(e) => setArrivalGuardianTelephone(e.target.value)} />
                </p>
                {/* <p>
                    Level 1 Tower C Global Business Park MG Road Gurgaon 122002 India T+91 124 435 2500 F+91 124 406 8536 <br />
                    www goindigo in
                </p> */}

                <div><button id="bttn" className="btn" onClick={() => {
                    validate()
                }}>Submit</button></div>

            </div>
        </div>

    );
};

export default ParentForm;