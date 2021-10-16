import React from 'react';

import classes from './Weather.module.css';
import cloud from '../../assets/pictures/cloud.jpg';
import rain from '../../assets/pictures/rain.jpg';
import clear from '../../assets/pictures/clear.jpg';
import snow from '../../assets/pictures/snow.jpg';

const WeatherBackground = props => {
    let inputElement = null;
    const inputClasses = [classes.inputElement];

    switch(props.elementType) {
        case ('clear'):
            inputElement = <div className={inputClasses.join(' ')}>{clear}</div>;
            break;
        case('rain'):
            inputElement = <div className={inputClasses.join(' ')}>{rain}</div>;
            break;
        case('cloud'):
            inputElement = <div className={inputClasses.join(' ')}>{cloud}</div>;
            break;
        case('snow'):
            inputElement = <div className={inputClasses.join(' ')}>{snow}</div>;
            break;
        default:
            inputElement = null;                
    }

    return {inputElement}
};

export default WeatherBackground;