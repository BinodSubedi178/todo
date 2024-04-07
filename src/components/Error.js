import React, {useEffect, useState} from 'react'

const Error = ()=> {
    const [warningDisplay, setWarningDisplay] = useState('100');
    useEffect(()=>{
        const warningGone = setTimeout(()=>{
            setWarningDisplay('0');
        },1010)
        return () => clearTimeout(warningGone);
    },[])
    return (
        <div className="alert alert-warning d-flex position-absolute top-0 justify-content-center align-content-center" style={{right:"5px", opacity:warningDisplay}} role="alert">
        <span> <i className="fa-solid fa-triangle-exclamation"></i> Tasks Cannot be Empty.</span>
        </div>
    )
}
export default Error;