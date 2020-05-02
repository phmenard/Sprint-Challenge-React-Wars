import React, { useState, useEffect } from 'react';
import './character.css';

import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';

function EpisodeContainer(props) {

    return (
        <div className="deckContainer">
            <section className='charSection'>

                {props.characters.map((character, i) => {
                    if(character.species.search(props.searchString) != -1){
                    return <EpisodeCard key={character.id} character={character} />;
                    }
                })}

            </section>
        </div>
    );


}

function EpisodeCard(props) {
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
                <p className="charInfo">Episodes: {props.character.episode.length}</p>
            </div>

        </Card>
    );
}

export default EpisodeContainer;