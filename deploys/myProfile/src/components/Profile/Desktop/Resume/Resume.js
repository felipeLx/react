import React, { useState } from 'react';
import { Grid, Cell } from 'react-mdl';

import classes from './Resume.module.css';

const Resume = () => (
        <section>
            <Grid className={classes.Profile}>
                <h1>Profile</h1>
                <Cell col={4}>
                    <p>When I saw some code working for the first time I thought that was some magic.
                    After I learned Java in Academia de Código with the best teachers ever. 
                    Learning Java and OOP opened my mind, I had to work hard to not be behind, just in the end of the course that we start with JavaScript. 
                    In the course we worked with Java, Hibernate, Spring, Ajax, mySQL and much more. 
                    When the course finished, so I start to study other libraries. I started with Angular and TypeScript, 
                    was cool, but later I started with React and in the MongoDB University, that was awesome, 
                    I really identify something that I can be good on it. 
                    <br />
                    Study is now my hobby!
                    I'm continue to study more about Java, Spring, Spring Security and Node JS to be prepared for the Backend,
                    for the FrontEnd I'm going deep in JavaScript and React and 
                    for Database I'm still be studying using MongoDB, Firebase or mySQL.</p>
                </Cell>
            </Grid>
        </section>
);

export default Resume;