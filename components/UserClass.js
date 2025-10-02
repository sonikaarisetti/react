import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"Dummy",
                location:"default",
                avatar_url:"http://dummy-photo.com",
            },// count:0,
            // count2:1,
        };
        // console.log(this.props.name+" child constructor");
    }
    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/sonikaarisetti");
        const json=await data.json();

        this.setState({
            userInfo:json,
        });
        console.log(json);
        console.log(this.props.name+" Chiled Component Did Mount")
    }

    componentDidUpdate(){
        console.log("Component Did Update");
    }

    componentWillUnmount(){
        console.log("Component Will Unmount");
    }
    render(){
        // console.log(this.props.name+" child render");
        const{name,location,avatar_url} = this.state.userInfo;
        // const {name,location} = this.props;
        // const{count,count2}=this.state;
        return (
            <div className="user-card">
                {/* <h5>Count:{count}</h5>
                <h5>Count2:{count2}</h5>
                <button onClick={()=>{
                    // this.state.count=this.state.count+1;
                    this.setState({
                        count: this.state.count+1,
                        count2:this.state.count2+1,
                    });
                }}>
                    Count Increase
                </button> */}
                <img src={avatar_url}></img>
                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>
            </div>
        );
    }
}

export default UserClass;