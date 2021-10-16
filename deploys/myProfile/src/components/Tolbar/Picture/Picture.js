import React from 'react';

import img from '../../../assets/images/face.png';
import classes from './Picture.module.css';

const Picture = (props) => (
    <div className={classes.Picture} style={{height: props.height}}>
        <img src={img} alt="MyProfilePic" />
    </div>
);

export default Picture;