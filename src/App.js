import './App.css';

// More on the root component: The root component is the first component to be renedered to the DOM.
// Components in React are structured/organised like a tree and the root component makes the root of the component tree
//Other components have to be nested inside the root component, and these child components can heve further child components as well.
// Example component tree:
//            ┌───────────────────────┐
//            │ App.js                │
//            │                       │
//            │                       │
//            └─┬───────────────────┬─┴─────────────────────────────┐
//              │                   │                               │
//              │                   │                               │
//              │                   │                               │
// ┌────────────▼───────┐        ┌──▼────────────────┐           ┌──▼─────────────────┐
// │                    │        │                   │           │                    │
// │   Navbar.js        │        │ BlogDetails.js    │           │ Sidebar.js         │
// │                    │        └───────────────────┘           │                    │
// └────────────────────┘                                        └─┬──────────────────┴─────────┐
//                                                                 │                            │
//                                                                 │                            │
//                                                                 │                            │
//                                                                 │                            │
//                                                        ┌────────▼───────────┐                │
//                                                        │                    │       ┌────────▼─────────┐
//                                                        │ Categoreies.js     │       │Tags.js           │
//                                                        │                    │       │                  │
//                                                        └────────────────────┘       └──────────────────┘


// Lets create a new navbar component. Notes for that in the Navbar.js file
// To use the Navbar component that we have created we have to import it here
import Navbar from './Navbar'
import Home from './Home'
function App() {
  

  const title = "App component"; 

  return (
    <div className="App">
      <Navbar/> {/*To nest the component within we use a tag with the same name as the component */}
      {/* This tag can be self closing, as shown in the example above, or it can be divided into opening and closing tags */}
      {/*For example: <Navbar></Navbar> */}
      <div className="content">
        <Home></Home> 
      </div>
    </div>
  );
}

export default App;
