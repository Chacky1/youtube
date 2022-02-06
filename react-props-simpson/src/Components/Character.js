import React from 'react';

const Character = (props) => {
    return (
        <div className='character'>
            <h3>{props.firstName} {props.lastName}</h3>
            <p>Hobbies : </p>
            <ul className='character__hobbies'>
                {props.hobbies.map((hobby, index) => {
                    return <li key={index}>{hobby}</li>
                })}
            </ul>
        </div>
    );
};

export default Character;
