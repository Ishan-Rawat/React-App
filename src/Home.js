import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    
    
    useEffect(() => {
        fetch('http://localhost:8000/blogss') //intentionally mispspelling the endpoint so that the server returns an error
            .then(res => {
                if(!res.ok){
                    throw Error ('could not fetch data for this resource');
                }
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
            })
            .catch(err => console.log(err))
            /**But even this is not good enough. It works for connection errors where the request doesnt even reach the server, 
             * but what about the cases where we do get a response back from the server and the response object specifies some other kind of error.
             * To handle cases like this we will utilize the .ok property of the response object. If we get a response succesfully for the resource we requested, it is set to to true otherwise it is false
             * So we will check for this property at the start of the .then() method in the fetch block.
             * If it is false then we will throw an error, which will be caught by the catch block at the end and we will be able to display to the user of something is wrong.
             */
    },[])

    return ( 
        <div className="home">
            {isPending && <div>Loading ...</div>}
            {blogs && <BlogList blogs={blogs} title={ "All blogs"} />}
        </div>
     );
}
 
export default Home;