import React from 'react';

export default ({howwin, value, onClick}) => {

    const changevalue = () => {
        onClick();
    }
        
    return (
        <div className={`button ${howwin ? 'dis' : value !== null ? 'dis' : ''}`} onClick={changevalue}>
            {value}
        </div>
    )
    
}