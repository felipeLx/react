import React, {useState, useEffect} from 'react';

import classes from './Projects.module.css'
import Aux from '../../hoc/Aux/Aux'
import projectsList from './projectsList'
import { Card, Button } from 'react-bootstrap';

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(1)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMedia, setIsMedia] = useState(false)
    const [windowSize, setWindowSize] = useState(document.documentElement.clientWidth)
    
    
    useEffect(() => {
       if(isPlaying){ 
           setTimeout(() => { 
            if(currentIndex === projectsList.length) {
                setCurrentIndex(1)
            } else {
                setCurrentIndex((currentIndex + 1 + projectsList.length) % projectsList.length)
            }
        }, 5000)
        }
    },[isPlaying, currentIndex])

    useEffect(() => {
        if(windowSize < 957) {
            setIsMedia(true)
            setWindowSize(document.documentElement.clientWidth)
        }
    },[windowSize])

    const handleSelect = (selectedIndex, project) => {
        setCurrentIndex(selectedIndex)
    }

    
  return(
        <Aux>
            <section className={classes.Projects} >
            
            <div style={{width: '100%'}} activeIndex={currentIndex} onSelect={handleSelect}>
                <div className={classes.Stage}>
                    <div className={classes.Carousel}>
                            
                    {!isMedia && <div className={classes.Before}>
                                {currentIndex-1 >= 0 ? 
                                <Card style={{ maxWidth: '18rem'}}>
                                    {!isMedia ?
                                    <Card.Img style={{height: '10rem'}} variant="top" src={projectsList[currentIndex-1].image} /> :
                                    <Card.Img onClick={() => window.open(projectsList[currentIndex-1].link, '_blank')} style={{height: '10rem', cursor: 'pointer'}} variant="top" src={projectsList[currentIndex-1].image} />
                                    }
                                    <Card.Body style={{height: '150px'}}>
                                    <Card.Title>{projectsList[currentIndex-1].title}</Card.Title>
                                    <Card.Text>
                                        {projectsList[currentIndex-1].description}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => window.open(projectsList[currentIndex-1].link, '_blank')}>Github/Project</Button>
                                    </Card.Body>
                                </Card> : 
                                <Card style={{ width: '18rem'}}>
                                    <Card.Img style={{height: '10rem'}} variant="top" src='' />
                                    <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                    <Button variant="primary" ></Button>
                                    </Card.Body>
                                </Card>}
                            </div>}
                            <div className={classes.Middle}>
                                <Card style={{ width: '18rem'}}>
                                {!isMedia ? 
                                    <Card.Img style={{height: '10rem'}} variant="top" src={projectsList[currentIndex].image} /> :
                                    <Card.Img onClick={() => window.open(projectsList[currentIndex].link, '_blank')} style={{height: '10rem', cursor: 'pointer'}} variant="top" src={projectsList[currentIndex].image} />
                                    }
                                    {!isMedia && <Card.Body style={{height: '150px'}}>
                                    <Card.Title>{projectsList[currentIndex].title}</Card.Title>
                                    {!isMedia && <Card.Text>
                                        {projectsList[currentIndex].description}
                                    </Card.Text>}
                                    <Button variant="primary" onClick={() => window.open(projectsList[currentIndex].link, '_blank')}>Github/Project</Button>
                                    </Card.Body>}
                                </Card>
                                
                            </div>
                            {!isMedia && <div className={classes.After}>
                                {currentIndex+1 < projectsList.length ? <Card style={{ width: '18rem'}}>
                                {!isMedia ? 
                                    <Card.Img style={{height: '10rem'}} variant="top" src={projectsList[currentIndex+1].image} /> :
                                    <Card.Img  onClick={() => window.open(projectsList[currentIndex+1].link, '_blank')} style={{height: '10rem', cursor: 'pointer'}} variant="top" src={projectsList[currentIndex+1].image} />} 
                                    {!isMedia && <Card.Body style={{height: '150px'}}>
                                    <Card.Title>{projectsList[currentIndex+1].title}</Card.Title>
                                    <Card.Text>
                                        {projectsList[currentIndex+1].description}
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => window.open(projectsList[currentIndex+1].link, '_blank')}>Github/Project</Button>
                                    </Card.Body>}
                                </Card> : 
                                <Card style={{ width: '18rem'}}>
                                    <Card.Img style={{height: '10rem'}} variant="top" src='' />
                                    <Card.Body style={{height: '150px'}}>
                                    <Card.Title></Card.Title>
                                    {!isMedia && <Card.Text>
                                    </Card.Text>}
                                    <Button variant="primary" ></Button>
                                    </Card.Body>
                                </Card>}
                                
                                </div>}
                            </div>
                    
                </div>
                <div className={classes.Controls}>
                    {currentIndex -1 > 0 ?
                        <button onClick={() => setCurrentIndex((currentIndex -1 + projectsList.length) % projectsList.length)}><i class="far fa-backward"></i></button> :
                        <button disabled><i class="far fa-backward"></i></button>
                    }
                        {isPlaying ? <button onClick={() => setIsPlaying(false)}><i class="far fa-pause-circle"></i></button> :
                                     <button onClick={() => setIsPlaying(true)}><i class="far fa-play-circle"></i></button> }
                {currentIndex+1 < projectsList.length ?
                    <button onClick={() => setCurrentIndex((currentIndex +1 + projectsList.length) % projectsList.length)}><i class="fas fa-forward"></i></button> :
                    <button disabled><i class="fas fa-forward"></i></button>
                }
            </div>
            </div>
            
            </section>
        </Aux>
    )
};

export default Projects;