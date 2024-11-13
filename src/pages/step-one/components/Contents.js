import React from 'react';

const RMNotAvailable = ({ srNo }) => {
    const publicUrl = process.env.PUBLIC_URL + '/'
    return (
        <>
            <img className='calling-log' src={publicUrl + 'assets/img/checked.png'} alt="logo" />
            {/* <label className='mt-2'>Our executive is not available at the moment.</label> */}
            {/* <label >at the moment.</label><br /> */}
            {/* <label>We have registered your request to connect with our executive</label> */}
            {/* <label >{`through SR${srNo}.`}</label> */}
            <label>Thank you for your feedback.</label>
            <label>Our executive will contact you within 2 working days.</label><br />
        </>
    );
};

const RMAvailableWithLessThankten = ({ srNo }) => {
    const publicUrl = process.env.PUBLIC_URL + '/'
    return (
        <>
            <img className='calling-log' src={publicUrl + 'assets/img/checked.png'} alt="logo" />
            <label className='mt-2'>Thank you for calling ICICI Bank.</label>
            <label >We presume your issue is not yet resolved.</label><br />
            <label>We have registered your request to connect with our executive</label>
            <label >{`through SR${srNo}.`}</label>
            <label>Our executive will contact you within 2 working days.</label><br />
            <label className='sub-header'>Thank You !</label>
        </>
    )
}

const RMTimeOut = ({ srNo }) => {
    const publicUrl = process.env.PUBLIC_URL + '/'
    return (
        <>
            <img className='calling-log' src={publicUrl + 'assets/img/checked.png'} alt="logo" />
            <label className='mt-2'>This service is available only between 09:00 AM to 06:00 PM ! </label>
            <label >We have registered your request to connect with the our executive through SR{`${srNo}`}.</label>
            <label>Our executive will contact you within 2 working days.</label><br />
            <label className='sub-header'>Thank You !</label>
        </>
    )
}

const RMCallSuccess = () => {
    const publicUrl = process.env.PUBLIC_URL + '/'
    return (
        <>
            <img className='calling-log' src={publicUrl + 'assets/img/checked.png'} alt="logo" />
            <label className='mt-2'>Thank you for calling.</label>
        </>
    )
}

const CallerNotAvailable = ({ srNo }) => {
    const publicUrl = process.env.PUBLIC_URL + '/'
    return (
        <>
            <img className='calling-log' src={publicUrl + 'assets/img/checked.png'} alt="logo" />
            <label className='mt-2'>We are unable to connect with you.</label>
            <label >We have registered your request to connect with our executive through SR{`${srNo}`}.</label>
            <label>Our executive will contact you within 2 working days.</label><br />
            <label className='sub-header'>Thank You !</label>
        </>
    )
}
export {
    RMNotAvailable,
    RMAvailableWithLessThankten,
    RMTimeOut,
    RMCallSuccess,
    CallerNotAvailable
};