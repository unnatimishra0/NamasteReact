import React from "react";

class UserClass extends React.Component{
// using props of like this which is defined in about.js

    constructor(props){
        super(props);

        this.state={
            count:0,
            userInfo:{
                name:"dummy name",
                location:"default",
            }
        }

        //console.log("child constructor");
    }
    //use case -to make api call why? because we want to render first  very fast then fill all th data  
    async componentDidMount(){
        //console.log(" child component mounted");
        const data=await fetch("https://api.github.com/users/unnatimishra0");
        const json= await data.json();

        console.log(json);
        //updating the state
        this.setState({
            userInfo:json,
        })


        //api calls

    }
    render(){
        //destructuring and using props
        const{name,location,avatar_url}=this.state.userInfo;
        const{count}=this.state;

        //console.log("child render");

        return (
            <div className="user-card">
                <h1>Count:{count}</h1>
                <button onClick={()=>{
                    // never update state variable directly like (this.set.count=this.set.count+1)
                    this.setState({
                        count : this.state.count + 1
                    })
                }}> Count Increase</button>

        {/* {using props} */}
        <img src={avatar_url}></img>
        <h2>Name :{name}</h2>
        <h2> Location {location}</h2>
        <h1>Contact unnatimishra19@gmail.com</h1>

    </div>
        );
    }
}
export default UserClass;