# REACT

# PARCEL
- Dev build
-local server
-HMR = Hot Module Replacement(reloads the page when saved)
-File Watching Algorithm - written in c++
-Caching - Faster Builds
-Image Optimization
-minification it we do production
-Bundling
-Compress
-Consistent Hashing
-Code Splitting
-Differential Bundling - support older browsers
-Diagnostic(errors will look good and clear)
-Error Handling
-HTTPs
-Tree Shaking - remove unused code
-Different dev and production bundles

//React Component
Class Based Component - OLD
Functional Component - NEW

//React Functional Component
Component Composition is component inside component 


Two types of Export/Import

-Default Export/Import

export default Component;
import Component from "path";

-Named Export/Import

export const Component;
import {Component} from "path";


# React Hooks
(Normal JS utility functions)
-useState() - Superpowerful State Variable in react
-useEffect()

# 2 types Routing in web apps
<!-- there are no network calls were made, all the data is stored in our app it is called Client Side Routing -->
-Client Side Routing
<!-- when we click on about page or contact us page, it make sthe network call and gets the data about contact us page and renders it on to the ui refreshes the whole page it is called Server Side Routing -->
-Server Side Routing


# passing props in class
 - the syntax for creating class components would be 
 - class UserClass extends React.component{
    <!-- //constructor -->
    render(){
        const {name}=this.props;
        return(
            <!-- this.props.name -->
        );
    }
 }
 - to pass props we can pass in the component but we can use them by using constructor
 - constructor(props){
    super(props);
 }

 # in a class based component
 - 1st constructor is called and render() will be called and then componentDidMount is called...this is the hierarchy
 
 - Parent Constructor
 - Parent Render
 - Child Counstructor
 - Child Render
 - Child component Did Mount
 - Parent component Did Mount

# use of components
- reusable
- maintainable....easy to debug
- testable