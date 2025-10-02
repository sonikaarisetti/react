import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () =>{
    
    const [resInfo,setResInfo]=useState(null);

    const fetchMenu=async()=>{
        const data=await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.2791302&lng=83.819153&restaurantId=323326&catalog_qa=undefined&submitAction=ENTER"
            // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.2791302&lng=83.819153&restaurantId=323326&catalog_qa=undefined&submitAction=ENTER"
            // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.2791302&lng=83.819153&restaurantId=430434"
        );
        const json=await data.json();
        // console.log(json);
        setResInfo(json.data);
    };

    const [showIndex,setShowIndex]=useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    if(resInfo === null){
        return <Shimmer/> 
    }
    

    const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;

    // const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // console.log(itemCards);

    //const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.categories[0];
    // pick only cards that are ItemCategory and have itemCards
    //console.log(itemCards);
    //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    
    const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    //console.log(categories);
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(", ")}-{costForTwoMessage}
            </p>
            {/* categories accordions */}
            {categories.map((category,index)=>(
                <RestaurantCategory 
                key={category?.card?.card.categoryId} 
                data={category?.card?.card} 
                
                showItems={index===showIndex?true:false}
                setShowIndex={()=>setShowIndex(index)}
                />
            ))}
        </div>
    )
}

export default RestaurantMenu;

// showItems={index===showIndex ? true : false}
                // setShowIndex={()=>setShowIndex(index)}