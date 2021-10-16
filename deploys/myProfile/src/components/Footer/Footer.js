import React from 'react'

import classes from './Footer.module.css'

const Footer = props => {


    return (
        <footer>
            <div className={classes.Footer}>
            <div className={classes.Links}>
                <ul>
                    <li><i style={{color:'black'}} className="fab fa-linkedin"></i><a className={classes.Link} target="_blank" href="https://www.linkedin.com/in/felipealisboa">LinkedIn</a></li>
                    <li><i style={{color:'black'}} className="fab fa-github"></i><a className={classes.Link} target="_blank" href="https://github.com/felipeLx">Github</a></li>
                </ul>
            
            
            </div>    
                <p>@ {new Date().getFullYear()} Felipe Lisboa</p>
            </div>
        </footer>
    )
}

export default Footer