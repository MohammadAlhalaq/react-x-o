import React from 'react';

export default ({ howwin, value, onClick }) => {

    const changevalue = () => {
        onClick();
    }
    return (
        <div className={`button ${howwin ? 'dis' : value !== null ? 'dis' : ''}`} onClick={changevalue}>
            <span className={value === "X" ? 'colorValue' : ''}>{value}</span>
        </div>
    )
}