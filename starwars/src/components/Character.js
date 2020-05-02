// Write your Character component here
import React, { useState, useEffect } from 'react';
import './character.css';

import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';

function SearchChar(character, searchString) {

    if (searchString) {

        const name = character.name.toLowerCase();
        if (name.search(searchString.toLowerCase()) != -1) {
            return true;
        }

        const species = character.species.toLowerCase();
        if (species.search(searchString.toLowerCase()) != -1) {
            return true;
        }

        const status = character.status.toLowerCase();
        if (status.search(searchString.toLowerCase()) != -1) {
            return true;
        }

        const location = character.location.name.toLowerCase();
        if (location.search(searchString.toLowerCase()) != -1) {
            return true;
        }

        const charOrigin = character.origin.name.toLowerCase();
        if (charOrigin.search(searchString.toLowerCase()) != -1) {
            return true;
        }
    } else {
        return true;
    }

    return false;
}

function CharacterContainer(props) {

    return (
        <div className="deckContainer">
            <section className='charSection'>

                {props.characters.map((character, i) => {
                    if (SearchChar(character, props.searchString)) {
                        return <CharacterCard key={character.id} character={character} />;
                    }
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
                <p className="charInfo">Episodes: {props.character.episode.length}</p>
            </div>

        </Card>
    );
}

export default CharacterContainer;