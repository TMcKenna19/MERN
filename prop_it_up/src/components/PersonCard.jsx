import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    render() {
        let birthdayButton = ()=>{

            //modifiy state variable containing age
            this.setState({age: this.state.age +1})
            // console.log("new age -->",this.state.age)
            
        }
        return(
            <>
            <div>
                <h1>{this.props.fullName}</h1>
                <p>{this.state.age}</p>
                <p>{this.props.hairColor}</p>
                {this.props.children}
                <button onClick = {birthdayButton}>Birthday Button</button>
                <hr />
            </div>
            </>
        )
    }
}

    
export default PersonCard;
//cd folder
//npm start 