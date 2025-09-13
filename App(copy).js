import React from "react";
import ReactDOM from "react-dom/client";
//in core react
const heading = React.createElement("h1",{className:"heading"},"React makes app faster to some extinct");
//in jsx-as babel transpiles this jsx into pure js...jsx code should be in single line rather in multiple lines....if we need write in multiple lines it should be wraped in () these brackets
const jsxheading = (<h1  tabIndex="5">
    this is heading using jsx
    </h1>);
const link =<a href="https://google.com">go to link</a>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
root.render(jsxheading);
root.render(link);

// const parent = React.createElement(
//     "div",
//     {id:"parent"},[
//         React.createElement(
//             "div",
//             {id:"child"},[
//                 React.createElement("h1",{},"I'm an h1 tag"),
//                 React.createElement("h2",{},"I'm an h2 tag")
//             ]
//         ),
//         React.createElement(
//             "div",
//             {id:"child"},[
//                 React.createElement("h1",{},"I'm an h1 tag"),
//                 React.createElement("h2",{},"I'm an h2 tag")
//             ]
//         )
//     ]
// );

// //console.log(parent);//the heading is yet an object not a h1 tag

// const root = ReactDOM.createRoot(document.getElementById("root"));
        
// root.render(parent);// this render will take the object and put it in to h1 tag


// const Title = () => (
//     <h1  tabIndex="5">
//         this is heading using jsx
//     </h1>
// );

//React Component
//Class Based Component - OLD
//Functional Component - NEW

//React Functional Component
//Component Composition is component inside component 
// const num=10000;
// const data=(
//     <h3>data from recat element is injected in to functional component using curly braces</h3>
// );
// const HeadingComponent = () => {
//     return <div id="container">
//         {data} {/* calling a react element */}
//         {Title()}
//         <Title></Title>
//         <Title /> {/*calling another functional component inside a functional component */}
//         <h1>returning a functional component</h1>
//     </div>
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent/>)

