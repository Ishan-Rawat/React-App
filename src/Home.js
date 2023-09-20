import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    
    const [blogs, setBlogs] = useState(null); // we are going to initialise the blog list with null to start with, and then after fetching the data 
    //we will use the setBlogs method to store the blogs in the blogs variable
   
    const [name, setName] = useState('mario');
    
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    
    useEffect(() => {
        //do note that we CANNOT use ASYNC and AWAIT here. We can exteranlise a function with this logic and make that async, but we wont do that here
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
                //here we are taking the response object as the argument and using the .json() method to parse the JSON data into a form that we can use and we are returning it
                //The process of parsing the JSON data is also asynchronous as it takes some time, so this .then() also returns a promise
                //Thus we tack on another .then mehtod to it. 
            })
            .then(data => {
                setBlogs(data);
                //here we use the setBlogs() method to change the state so that it contains the blogs
                //Also note here that we are avoiding the infinite loop of useState changing the state which in turn triggering useState to update the state again and so on,
                //by using an empty dependency list at the end
            })

    },[])

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title={ "All blogs"} handleDelete={handleDelete}/>
            <button onClick={() => setName('Solid snake')}>change name</button>
            <p>{name}</p>
        </div>
     );
}
 
export default Home;