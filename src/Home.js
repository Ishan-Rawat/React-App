import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    //Right now we are not handling any errors during the fetch process. So in case there is a network error or something the user will just wait indefinitely without any knowledge.
    //So lets create a catch block that just logs out the error 
    
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setIsPending(false);
            })
            .catch(err => console.log(err))
    },[])

    return ( 
        <div className="home">
            {isPending && <div>Loading ...</div>}
            {blogs && <BlogList blogs={blogs} title={ "All blogs"} />}
        </div>
     );
}
 
export default Home;