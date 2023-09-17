import { useState } from 'react';

const Home = () => {
    //First we specify a value to the hook, and we use array destructuring to get 2 things returned by the Hook
    //The datatype of the value provided to the hook can be any JS datatype.
    const [name, setName] = useState('Mario');
    /**The first value in the array above is the name of the value/variable(?) that the hook returns
     * The second value in the array is the function that the hook returns that allows us to change the value that we want to monitor
     * The naming convetion for this function is that we name it set + the name of the variable 
     */
    const handleClick = () => {
        setName('luigi');
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click to change name</button> 
            
        </div>
     );
}
 
export default Home;