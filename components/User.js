import { useState } from "react";

const User = (props) =>{
    const [count]=useState(0);
    const [count2]=useState(1);
    return( 
        <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
            <h5>count:{count}</h5>
            <h5>count:{count2}</h5>
            <h2>Name:{props.name}</h2>
            <h3>Location:{props.location}</h3>
        </div>
    )
}

export default User;