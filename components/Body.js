import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
// import { resList } from "../utils/mockData";

 
const Body = () => {
    //react element is just a normal js object
    //state variable - Super Powerful variable i.e, hook is just a normal js function - useState
    
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredRestaurant,setFilteredRestaurant] = useState([]);
    
    const [searchText,setSearchText] = useState("");

    const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);
    console.log("Body Rendered",listOfRestaurants);
    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData = async () =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.2791302&lng=83.819153&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.2791302&lng=83.819153&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        console.log (json);
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    //conditional Rendering
    // if (listOfRestaurants.length === 0){
    //     return <Shimmer/>;
    // }


    // const fetchData = async () =>{
    //     const data = await fetch(
    //         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.2791302&lng=83.819153&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    //     );

    //     const json = await data.json();

    //     const restaurants = json.data.cards
    //      .map((c) => c.card?.card)
    //      .filter((c) => c["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant")
    //      .map((c) => c.info);

    //     console.log(restaurants);
        
    //     setListOfRestaurants(restaurants);
    // };

    //returning based on condition
    
    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1>Looks like you're offline!! Please check your internet connection!</h1>
    // listOfRestaurants.length === 0 ? <Shimmer/> : 
    return (
        <div className="body">
            <div className="filter flex">
                <div className="search p-4 m-4"> 
                    <input type="text" className="border border-solid border-black" value={searchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button className="mx-2 px-4 py-1 bg-pink-100 rounded-lg" onClick={()=>{
                        //Filter the restaurant cards and update the UI
                        //searchText-use this to get text wt to search
                        console.log(searchText);

                        const filteredRestaurant = listOfRestaurants.filter(
                            (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                    
                </div>
                <div className="search p-4 m-4 items-center">
                    <button 
                    className="px-4 py-1 bg-gray-100 rounded-lg" 
                    onClick={()=>{
                        const filteredList=listOfRestaurants.filter((res)=>Number(res.info.avgRatingString)>4);
                        setFilteredRestaurant(filteredList);
                        console.log(filteredList);
                    }}
                    >
                    Top Rated Restaurants
                    </button>
                </div>
            </div>
            <div className="res-container flex flex-wrap">
                {filteredRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    // <Link 
                    //     key={restaurant.info.id}
                    //     to={"/restaurants/"+restaurant.info.id}
                    // >
                    //     {/* {restaurant.data.promoted?<PromotedRestaurantCard resData={restaurant}/> : <RestaurantCard resData={restaurant}/>} */}
                    //     <RestaurantCard resData={restaurant}/>
                    // </Link>
                    ))
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