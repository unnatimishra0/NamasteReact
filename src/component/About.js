import React from 'react'
import User from './User'
import UserClass from './UserClass'
import { Component } from 'react'
import UserContext from '../utils/UserContext';

class About extends Component {
  constructor(props){
    super(props);

    //console.log("parent constructor");

  }
  componentDidMount(){
    //console.log(" parent component mounted");

}
  render(){
    //console.log("parent render");

    return (
      <div>
        <h1>about class component </h1>
        <div>
          LoggedInUser
          <UserContext.Consumer>
            {({loggedInUser})=> (
            <h1 className='text-xl font-bold'>{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        {/* <User name={"unnati mishra (function)"} /> */}
  
        <UserClass name={ "unnati class"}location={'kanpur class'}/>
      </div>
    )
  }
}
/*
parent constructor
parent render
  first child cons
  first render

  second cons
  second render

  ,dom updated> in single batch
  first comp did mount
  second conp did mount

  -parent component did mount



*/
export default About
