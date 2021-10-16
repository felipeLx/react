import React, { useEffect, useState } from 'react'

import classes from './Header.module.css'
import picture from '../../../assets/images/face.png'

const Header = () => {
    // let myTechs = ['HTML/CSS', 'JavaScript', 'ReactJs', 'React-Hooks', 'NodeJS', 'Java', 'Angular 6', 'Spring', 'mySQL', 'mongoDB']
    // const [randomOne, setRandomOne] = useState('HTML/CSS')

    // useEffect(() => {
    //     setTimeout(() => {
    //         setRandomOne(myTechs[Math.floor(Math.random() * myTechs.length)])
    //     }, 7000)
    // },[randomOne])
    
    return(
    <div className={classes.HeaderAnime}>
        {/* <div className={classes.CssAnime}>
            <div className={classes.Sky}> 
                <div className={classes.CloudIntro}>
                    <div className={classes.Tech1}>
                    {randomOne}
                    </div>
                    
                </div>
            </div>
        </div> */}
        
        <div className={classes.BannerText}>
            <h1><strong>I'm a developer that believes!</strong></h1>
            <h5><em>code can change the World!</em></h5>
            {/* <h5>Full Stack Developer</h5> */}
                        <div>
                            <br></br>
                        <span className={classes.Techs}><strong>HTML/CSS - JavaScript - React - NodeJS - Java - Spring - mySQL - mongoDB</strong></span>
                        </div>
                        <div className={classes.Links}>
                            <a href="https://linkedin.com/in/felipealisboa" rel="noopener noreferrer" target="_blank">
                            <i style={{color:'white'}} className="fab fa-linkedin"></i>
                            </a>
                        </div>
        </div>
        <div className={classes.Picture}>
            <figure>
                <img style={{width: '230px'}} src={picture} alt="Felipe Lisboa" />
            </figure>
        </div>
        
    </div>
    )
}

export default Header
