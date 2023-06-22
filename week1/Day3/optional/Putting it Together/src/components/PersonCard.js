import React , { Component } from 'react'


class PersonCard extends Component{
    constructor(props){
        super(props)
        
        this.state={msg:"",age:""}
    }

    change=(e)=>{
        this.setState({msg:"Age : ",age : this.props.person.age })
    }

    render(){

        const {firstName,lastName,age,hairColor} = this.props.person;
        return(
            <div>
                <h1> {firstName}, {lastName}</h1>
                <p> {this.state.msg} {this.state.age}</p>
                <p>Hair Color : {hairColor}</p>
                <button onClick={this.change}>Birthday Button for {firstName} {lastName}</button>
            </div>

        )
            
        
    }


}
export default PersonCard