const Home = () => {
    /**Inorder to handle events we can define functions inside the function body of the component. These functions are then invoked when the event happens */
    const handleClick = () => {
        console.log("Hello user");
    }

    const handleClickAgain = (name) => {
        console.log("Hello, " + name)
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button> {/**In JSX we supply the method as a dynamic value to the onClick (attribute?) */}
            {/**Notice the we did not write onClick={handleClick()} 
             * The () will invoke the function without the user even clicking it. So we would find that just as the page loads without anyone clicking anywhere "Hello user gets logged to console"
            */}
            {/**But then, how do we pass arguments to the function without paranetheses? */}
            {/**Answer: we have to nest the function inside an anonymous function. So onClick event calls the anaonymous function which in turn calls the function we have defined. 
             * When our function is nested inside the anoynm. func. we can use pararntheses and they wont end up automatically triggering the function.
            */}
            <button onClick={() => {
                handleClickAgain("Naruto");
            }}>Click me</button>

            {/**Now lets take a look the event object that our functions get access to automatically when an event occurs */}
            <button onClick={(e) => console.log(e)}>Click to log event object</button>
        </div>
     );
}
 
export default Home;