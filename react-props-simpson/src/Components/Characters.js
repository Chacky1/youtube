import React, {useState} from 'react';
import characters from '../characters.json'

import Character from "./Character";

const Characters = () => {
    const [filteredCharacters, setFilteredCharacters] = useState(characters)
    const [isOnlySimpsonShown, setIsOnlySimpsonShown] = useState(false)

    const showSimpsonOnly = () => {
        setFilteredCharacters(characters.filter(character => {
            return character.lastName === 'Simpson'
        }))
        setIsOnlySimpsonShown(true)
    }

    const showAllCharacters = () => {
        setFilteredCharacters(characters)
        setIsOnlySimpsonShown(false)
    }

    return (
        <div className='characters'>
            {!isOnlySimpsonShown &&
                <button onClick={showSimpsonOnly}>Afficher la famille Simpson seulement</button>
            }
            {isOnlySimpsonShown &&
                <button onClick={showAllCharacters}>Afficher tous les personnages</button>
            }
            <div className='characters-grid'>
                {filteredCharacters.map(character => {
                    return <Character key={character.firstName} {...character} />
                })}
            </div>
        </div>
    );
};

export default Characters;
