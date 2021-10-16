import React from 'react';
import { Grid, Cell } from 'react-mdl';

import classes from './Desktop.module.css';
import Resume from './Resume/Resume';
import Header from '../Header/Header'

const Desktop = () => {

    return(
    <div style={{width:'100%', textAlign: 'center'}}>
        <Header />
        <div className={classes.Desktop}>
            <Resume />
        </div>
        <div style={{backgroundColor: '#0f4c75'}}>
        <Grid className={classes.Skills}>
              <h2>Soft Skills</h2>
                <div className={classes.Gifs}>
                    <div>
                <img className="" src="https://media.giphy.com/media/l46CfphUZPc9GiRbi/giphy.gif" alt="" width="50%" />
                <h3>Team Player</h3>
                <p>I like to be part of a winner team. Together we go far!!</p>
                </div>
                <div>
                <img className="" src="https://media.giphy.com/media/8pUgs7JXe4LBK/giphy.gif" alt="" width="50%" />
                <h3>Multitasks</h3>
                <p>I like to help and I prepared to play in any position!!</p>
                </div>
                </div>
                
        </Grid> 
        </div>
    </div>

    );
}

export default Desktop;