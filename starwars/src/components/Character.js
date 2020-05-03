// Write your Character component here
import React, { useState, useEffect } from 'react';
import './character.css';

import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';

const errorCard = {
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.5VCCtUg1fcu7jLwBX1kXTQHaHR%26pid%3DApi&f=1',
    name: '',
    spicies: 'Your search returned nothing',
    status: 'Try again',
    location: '',
    origin: '',
    episode: ''
}

function SearchChar(character, searchString) {
    // search char data for the searchString
    if (searchString) {

        const name = character.name.toLowerCase();
        // check the name
        if (name.search(searchString.toLowerCase()) != -1) {
            return true;
        }

        const species = character.species.toLowerCase();
        // check the species
        if (species.search(searchString.toLowerCase()) != -1) {
            return true;
        }

        const status = character.status.toLowerCase();
        // check the status
        if (status.search(searchString.toLowerCase()) != -1) {
            return true;
        }

        const location = character.location.name.toLowerCase();
        // check the location
        if (location.search(searchString.toLowerCase()) != -1) {
            return true;
        }

        // check the origin
        const charOrigin = character.origin.name.toLowerCase();
        if (charOrigin.search(searchString.toLowerCase()) != -1) {
            return true;
        }
    } else {
        // if no searchString given return the char
        
        return true;
        
    }

    // nothing found for search string don't return the char
    errorCard.name = `Nothing found for ${searchString}`
    return false
}

function CharacterContainer(props) {
    
    return (
        <div className="deckContainer">
            <section className='charSection'>
                {// map over the characters display what the user wants
                props.characters.map((character, i) => {
                    if (SearchChar(character, props.searchString)) {
                        return <CharacterCard key={character.id} character={character} />;
                    }else{
                        return <CharacterCard key={character.id} character={errorCard} />;
                        
                    }
                })}

            </section>
        </div>
    );
}

function CharacterCard(props) {
    // create a card for each char
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