/**
 * 
 * <div id="parent">
 *      <div id="child1">
 *          <h1>I'm in h1 tag</h1>
 *          <h2>I'm in h2 tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I'm in h1 tag</h1>
 *          <h2>I'm in h2 tag</h2>
 *      </div>
 * </div>
 * 
 * 
 */

const parent = React.createElement(
    "div",
    {id:"parent"},[
        React.createElement(
            "div",
            {id:"child"},[
                React.createElement("h1",{},"I'm an h1 tag"),
                React.createElement("h2",{},"I'm an h2 tag")
            ]
        ),
        React.createElement(
            "div",
            {id:"child"},[
                React.createElement("h1",{},"I'm an h1 tag"),
                React.createElement("h2",{},"I'm an h2 tag")
            ]
        )
    ]
);

// const heading = React.createElement(
//     "h1",
//     {className:"heading"},
//     "Hello World using react!"
// );

console.log(parent);//the heading is yet an object not a h1 tag

const root = ReactDOM.createRoot(document.getElementById("root"));
        
root.render(parent);// this render will take the object and put it in to h1 tag