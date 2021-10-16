import React, { useState } from 'react';

import Weather from '../../components/weather/Weather';
import { geolocated } from "react-geolocated";
import UserPosition from '../../components/position/UserPosition';
import Button  from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import classes from './Layout.module.css';

const APIKEY = '92b3106c3e65a153964c760a41a887c9';

const Layout = () => {
    const [weather, setWeather] = useState([]);
    const [screenOpen, setScreenOpen] = useState(false);
    const [manWeather, setManWeather] = useState(true);

    const {lat, lon} = UserPosition();
    
    const fetchData = async(e) => {
        e.preventDefault();
        try{
        const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${APIKEY}`)
            .then(res => res.json())
            .then(data => data);
            console.log(apiData);
            console.log(lat && lon);
            if(lat && "," && lon) {
                setScreenOpen(!screenOpen);
                setWeather({
                    data: apiData,
                    description: apiData.weather[0].description,
                    temperature: (apiData.main.temp - 273.15).toFixed(2),
                    temp_min: (apiData.main.temp_min - 273.15).toFixed(2),
                    temp_max: (apiData.main.temp_max - 273.15).toFixed(2),
                    humidity: apiData.main.humidity,
                    wind: (apiData.wind.speed * 3.6).toFixed(2),
                    local: apiData.name,
                    error: ""
                });
            } else {
                setWeather({
                    data: '',
                    description: '',
                    temperature: '',
                    temp_min: '',
                    temp_max: '',
                    humidity: '',
                    wind: '',
                    local: '',
                    error:"Not possible to identify the location"
                });
            }
        } catch(err) {
            alert(err.message);
        }
    };

    const genderHandler = () => {
        if(manWeather) {
            setManWeather(false);
        } else {
            setManWeather(true);
        }
    }

    return (
            <div className={classes.Layout}>
                <h3>SexyWeather App</h3>
                <Form>
                    <Form.Check 
                        type="switch"
                        id="custom-switch"
                        label="Change weather gender"
                        onChange={genderHandler}
                    />
                </Form>
                <hr />
                <Button variant="info" onClick={fetchData}>Check the weather condition</Button>
                    {screenOpen && <Weather 
                        description={weather.description}
                        temperature={weather.temperature}
                        temp_min={weather.temp_min}
                        temp_max={weather.temp_max}
                        humidity={weather.humidity}
                        wind={weather.wind}
                        local={weather.local}
                        error={weather.error}
                        manWeather={manWeather}
                    />}
            </div>
    );
};

export default  geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Layout);