import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    /**Currently we are only outputing the error in the console. Now lets make it visible to the user
     * For this lets add a value to the state that is set to the error message when we catch an error and then we can use conditional templating to display an error message to the page when there is one.
     */
    
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs') 
            .then(res => {
                if(!res.ok){
                    throw Error ('could not fetch data for this resource');
                }
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
                setError(null); //If upon a subsequent request we do get the data(without hitting reload) then the error message doesnt disappear on its own
                //Thus we have to set Error to null here once we succesfully fetch data
            })
            .catch(err => {
                setError(err.message);
                setIsPending(false); //we dont want to keep seeing "Loading" when there is an error
            })
            
    },[])

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading ...</div>}
            {blogs && <BlogList blogs={blogs} title={ "All blogs"} />}
        </div>
     );
}
 
export default Home;