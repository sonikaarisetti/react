import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { resList } from "../utils/mockData";


const Body = () => {
    //react element is just a normal js object
    //state variable - Super Powerful variable i.e, hook is just a normal js function - useState
    const [listOfRestaurants,setListOfRestaurants] = useState(resList);
    // const [listOfRestaurants,setListOfRestaurants]=useState([
    //     {
    //         "card":{
    //             "card":{
    //                 "info": {
    //                     "id": "627159",
    //                     "name": "Celebrations Fine Dine-In",
    //                     "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/20/a41b6d3e-b295-4409-9dee-1375689aae8c_48ea715c-d7b9-4402-af7b-d3fbdaa351a2.jpg",
    //                     "costForTwo": "₹500 for two",
    //                     "cuisines": [
    //                         "Biryani",
    //                         "Chinese",
    //                         "Tandoor",
    //                         "Hyderabadi",
    //                         "SouthIndian",
    //                         " Andhra"
    //                     ],
    //                     "avgRatingString": "3.8",
    //                 }
    //             }
    //         }   
    //     },
    //     {
    //         "card":{
    //             "card":{
    //                 "info": {
    //                     "id": "627158",
    //                     "name": "KFC",
    //                     "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/20/a41b6d3e-b295-4409-9dee-1375689aae8c_48ea715c-d7b9-4402-af7b-d3fbdaa351a2.jpg",
    //                     "costForTwo": "₹500 for two",
    //                     "cuisines": [
    //                         "Biryani",
    //                         "Chinese",
    //                         "Tandoor",
    //                         "Hyderabadi",
    //                         "SouthIndian",
    //                         " Andhra"
    //                     ],
    //                     "avgRatingString": "4.4",
    //                 }
    //             }
    //         }   
    //     },
    //     {
    //         "card":{
    //             "card":{
    //                 "info": {
    //                     "id": "627157",
    //                     "name": "BURGER",
    //                     "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/20/a41b6d3e-b295-4409-9dee-1375689aae8c_48ea715c-d7b9-4402-af7b-d3fbdaa351a2.jpg",
    //                     "costForTwo": "₹500 for two",
    //                     "cuisines": [
    //                         "Chinese",
    //                         "Tandoor",
    //                         "SouthIndian",
    //                         " Andhra"
    //                     ],
    //                     "avgRatingString": "4.6",
    //                 }
    //             }
    //         }   
    //     },
    // ]);

    return (
        <div className="body">
            <div className="filter">
                <button 
                  className="filter-btn" 
                  onClick={()=>{
                    const filteredList=listOfRestaurants.filter((res)=>Number(res.card.card.info.avgRatingString)>4);
                    setListOfRestaurants(filteredList);
                    //console.log(listOfRestaurants);
                  }}
                >
                  Top Rated Restaurants
                 </button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant) => (<RestaurantCard key={restaurant.card.card.info.id} resData={restaurant}/>))
                }

                {/* <RestaurantCard resData={resList[0]}/>
                <RestaurantCard resData={resList[1]}/>
                <RestaurantCard resData={resList[2]}/>
                <RestaurantCard resData={resList[3]}/>
                <RestaurantCard resData={resList[4]}/>
                <RestaurantCard resData={resList[5]}/> */}
                    
            </div>
        </div>
    );
};

export default Body;