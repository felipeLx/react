import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

import classes from './ProjectsCard.module.css'

const ProjectsCard = props => (
    <Card active={props.isCurrent} style={{ width: '18rem'}}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        <Button variant="primary" onClick={() => window.open(props.link, '_blank')}>Github/Project</Button>
      </Card.Body>
    </Card>
)


export default ProjectsCard;