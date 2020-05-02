// Write your Character component here
import React, { useState, useEffect } from 'react';
import './character.css';

import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';

function CharacterContainer(props) {

    return (
        <div className="deckContainer">
            <section className='charSection'>
        
            {props.characters.map((character, i) => {
                return <CharacterCard character={character} />;
            })}
        
            </section>
        </div>
    );


}

function CharacterCard(props) {
    console.log(props);

    return (
        <Card className="card">
            <CardImg className="img" top width="100%" src={props.character.image} alt="Card image cap" />
            <CardBody>
                <CardTitle>{props.character.name}</CardTitle>
                <CardSubtitle>{props.character.gender}</CardSubtitle>
                <CardText></CardText>
                <Button></Button>
            </CardBody>
        </Card>
    );
}

export default CharacterContainer;