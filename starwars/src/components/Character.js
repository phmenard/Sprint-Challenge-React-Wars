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
                    return <CharacterCard key={character.id} character={character} />;
                })}

            </section>
        </div>
    );


}

function CharacterCard(props) {
    //console.log(props);

    return (
        <Card className="card">
            <CardImg className="img" top width="100%" src={props.character.image} alt="Card image cap" />
            <div>
                <p className="name">{props.character.name}</p>
                <p className="charInfo">Species: {props.character.species}</p>
                <p className="charInfo">Status: {props.character.status}</p>
                <p className="charInfo">Location: {props.character.location.name}</p>
                <p className="charInfo">Origin: {props.character.origin.name}</p>
            </div>

        </Card>
    );
}

export default CharacterContainer;