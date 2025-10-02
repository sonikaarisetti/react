import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        //console.log("parent Constructor");
    }

    componentDidMount(){
        // will use this for API calls...similarly in functional components in useEffect we do API calls...
        //for further clarity see react life cycle in google
        // https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
        
        // console.log("Parent component Did mount");
    }

    render(){
        console.log("parent Render");
        return (
        <div>
            <h1>About us</h1>
            <UserClass name="Sonika class" location="Andhra Pradesh"/>
            {/* <UserClass name="Chinnu class" location="Andhra Pradesh"/> */}
        </div>      
    );
    }
}


export default About;