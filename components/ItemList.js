import { CDN_URL } from "../utils/constants";

const ItemList=({items})=>{
    // console.log(items);
    return(
        <div>
            {items.map((item)=>(
                <div className="border-b-2 border-gray-200 flex justify-between" key={item.card.info.id}>
                <div className="p-2 m-2 text-left w-9/12 flex flex-col justify-center">
                    <div className="flex flex-col">
                        <span>{item.card.info.name}</span>
                        <span>₹ {item.card.info.price/100}</span>
                    </div>
                    <p className="text-gray-500">{item.card.info.description}</p>
                </div>
                <div className="w-3/12 p-3" >
                <img src={CDN_URL + item.card.info.imageId}></img>
                <div className="absolute -mt-6">
                <button className="bg-white shadow-lg px-3 py-1  rounded-lg ml-2">Add</button>
                </div>
                </div>
                </div>
            ))}
        </div>
    );
}

export default ItemList;