//displays data in the menu

import ItemList from "./ItemList";

const RestaurantCategory=({data,showItems,setShowIndex})=>{
    // console.log(data.itemCards);
    //we gave power of closing and showing of showItems to parent(restaurantMenu) so we should get showItem as prop...hence i commented the below code..
    
    // const [showItems,setShowItems]=useState(false);

    // const handleClick=()=>{
    //     setShowIndex();
    // //     setShowItems(!showItems);
    //     //console.log("clicked");
    // };
    return(
        <div>
            <div className="w-6/12 mx-auto my-4 p-2 shadow-lg bg-gray-50">
            {/* accordion header */}
                <div  className="flex justify-between cursor-pointer" onClick={setShowIndex}>
                    <span className="font-bold text-xl">{data.title}({data.itemCards.length})</span>
                    <span>⬇️</span>
                </div>
                {/* accordion body */}
 
                {showItems && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    );
};

export default RestaurantCategory;