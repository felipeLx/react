import React from 'react';
import Table from 'react-bootstrap/Table';

import classes from './Weather.module.css';
import {picturesWclear, picturesWrain, picturesWcloud, picturesWsnow, picturesWclouds, picturesWdrizzle, picturesWthunder } from '../pictures/PicturesWoman.js';
import {picturesMclear, picturesMrain, picturesMcloud, picturesMsnow, picturesMclouds, picturesMdrizzle, picturesMthunder } from '../pictures/PicturesMan.js';

const keyWords = ['cloudy', 'clouds', 'few', 'cloud', 'overcast', 'clear', 'snow', 'rain', 'drizzle', 'thunder'];

const Weather = ({description, temp_min, temp_max, error, temperature, wind, local, humidity, manWeather}) => {
    let weatherState = '';

    const matchValues = () => {
        const weatherDescription = description.split(' ');
            for(let i=0; i < weatherDescription.length; i++) {
                if(keyWords.includes(weatherDescription[i])) {
                    weatherState = weatherDescription[i];
                } 
            }
            if(manWeather) {
                switch(weatherState) {
                    case ('clear'):
                        return picturesWclear();
                    case('rain'):
                        return picturesWrain();
                    case('clouds'):
                        return picturesWcloud();
                    case('snow'):
                        return picturesWsnow();
                    case('few'):
                        return picturesWclouds();
                    case('cloud'):
                        return picturesWclouds();
                    case('thunder'):
                        return picturesWthunder();
                    case('drizzle'):
                        return picturesWdrizzle();
                    default:
                        return null;
                     }
            } else {
                switch(weatherState) {
                    case ('clear'):
                        return picturesMclear();
                    case('rain'):
                        return picturesMrain();
                    case('clouds'):
                        return picturesMcloud();
                    case('snow'):
                        return picturesMsnow();
                    case('few'):
                        return picturesMclouds();
                    case('cloud'):
                        return picturesMclouds();
                    case('thunder'):
                        return picturesMthunder();
                    case('drizzle'):
                        return picturesMdrizzle();
                    default:
                        return null;
               }
            }
        }

    return (
        <div className={classes.Layout__&&`${weatherState}`}>
            <br />
            {local && <h1>{local}</h1>}
            <Table striped bordered hover responsive>
                <tbody>
                    <tr>
                        {temperature && <td>Temp: {temperature} ºC</td>}
                    </tr>    
                    <tr>
                        {description && <td>Conditions: {description}</td>}
                    </tr>
                    <tr>    
                        {temp_min && <td>Low: {temp_min} ºC</td>}
                    </tr>    
                    <tr>
                        {temp_max && <td>High: {temp_max} ºC</td>}
                    </tr>    
                    <tr>
                        {humidity && <td>Humidity: {humidity}%</td>}
                    </tr>    
                    <tr>
                        {wind && <td>Wind: {wind} Km/h</td>}
                    </tr>    
                </tbody>
            </Table>
            {error && <p>{error}</p>}
                {description && matchValues()}
        </div>
        );
};


export default Weather;