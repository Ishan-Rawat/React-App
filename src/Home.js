const Home = () => {
    /**In the context of React, state of a component refers to the data in that component at a given time
     * The data in a component can numbers, strings, booleans, objects etc. 
     * Lets understanding this by introducing some data to this component. 
     * Consider a variable name, whos value is changed 
     */

    let name = 'mario';
    const clickHandle = () => {
        name = 'Luigi';
        console.log(name);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <button onClick={clickHandle}>Click to change name</button> 
            {/**Here we would expect that after clicking the button the name displayed on the page would change.
             * But it doesn't. On the other hand if we check the console and it logs out the changed name.
             * Why is this happening?
             * This is because the variable name is not REACTIVE. Meaning that react is not monitoring it for changes.
             * For the name to change on the web page, react would have to monitor the variable for changes, and then re-render the JSX template everytime it changes.
            */}       
            {/**To make the variable name Reactive we have to use a Hook, called useSate
             * A hook in react is a special type of function that serves a specific fucntion
             * Lets see how that is used in the next commit
             */}
        </div>
     );
}
 
export default Home;