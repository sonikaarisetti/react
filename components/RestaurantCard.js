import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const{resData}=props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRatingString,
        costForTwo,
        sla,
    } = resData?.info;
    return (
        <div className="card overflow-hidden m-3 p-4 w-[280px] rounded-lg bg-gray-100 hover:shadow-lg cursor-pointer">
            <img className="h-44 w-[270px] rounded-lg hover:shadow-lg" alt="res-logo" src={
                CDN_URL+
                cloudinaryImageId
            }
                ></img>
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4 style={{fontSize:"15px"}}>{cuisines.join(", ")}</h4>
            <div className="flex justify-between pt-2">
                <h4>{avgRatingString}stars</h4>
                <h4>{sla.slaString}</h4>
                <h4>{costForTwo}</h4>
            </div>
        </div>
    );
};

//Higher Order Component

//input - RestaurantCard=> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard)=>{
    return (props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard; 