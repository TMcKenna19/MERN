import React from 'react';


const PersonCard = props => {
        return(
            <>
            <div>
                <h1>{props.fullName}</h1>
                <p>{props.age}</p>
                <p>{props.hairColor}</p>
                {props.children}
                <hr />
            </div>
            </>
        );
}

export default PersonCard;
//cd folder
//npm start 