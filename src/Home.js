import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    /**At the moment, we are not outputting anything to the page till the time our blogs are fetched. 
     * Since we are making a request only to our local server the loading is very quick so we dont notice this blank screen.
     * But now lets create a message that shown on the screen till the blogs load.
     * For this create an additional piece of state in this component named isPending
     * isPending is initialised as true and we can use conditional templating to output a template for the loading message while it is true
     * We can set isPending to false as soon as the blogs load, and it will stop displaying it.
     */
    
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
            })
    },[])

    return ( 
        <div className="home">
            {isPending && <div>Loading ...</div>}
            {blogs && <BlogList blogs={blogs} title={ "All blogs"} />}
        </div>
     );
}
 
export default Home;