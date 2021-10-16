import React, { useState, useEffect } from 'react';

const UserPosition = () => {
 const [position, setPosition] = useState({});

 const onChange = ({coords}) => {
     setPosition({lat: coords.latitude, lon: coords.longitude,});
 };

 useEffect(() => {
    const geo = navigator.geolocation;
        if(!geo) {
            return;
        }
        const watcher = geo.watchPosition(onChange);

        return () => geo.clearWatch(watcher);
 }, []);
    return {...position};
};

export default UserPosition;