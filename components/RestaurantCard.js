import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const{resData}=props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRatingString,
        costForTwo,
    } = resData?.card?.card?.info;
    return (
        <div className="res-card" style={{backgroundColor:"white"}}>
            <img className="res-logo" alt="res-logo" src={
                CDN_URL+
                cloudinaryImageId
            }
                ></img>
            <h3>{name}</h3>
            <h4 style={{fontSize:"15px"}}>{cuisines.join(",")}</h4>
            <h4>{avgRatingString}stars</h4>
            <h4>{costForTwo}</h4>
            {/* <h4>{resData.card.card.info.sla.slaString}</h4> */}
        </div>
    );
};

export default RestaurantCard; 