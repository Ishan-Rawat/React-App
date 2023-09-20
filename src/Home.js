import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);
   
    const [name, setName] = useState('mario');
    
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    /**The useEffect hook is often used to fetch data, this is because it runs once when the page is first rendered, which is a good time to fetch data
     * Usually we would be fetching data from a database using an API endpoint instead of hard-coding it like we have here, but that is too much work away from React for this tutorial
     * So we will be using a package called JSON server. It allows us to create a fake REST API using only a JSON file.
     * We will be creating a directory called data in our project and create a JSON file in it called db.json
     * In the JSON file we will have a top level property called Blogs which will have an array of blogs as its value.
     * In JSON server each top level element is called a resource, and it provides API endpoints that allow us to interact with the resource and 
     * perform actions such as insert, delete, update, retrieve, etc.
     * In our case we only have one top level element, i.e., "blogs". 
     */
    useEffect(() => {
        console.log("use effect demo")
    },[name])

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title={ "All blogs"} handleDelete={handleDelete}/>
            <button onClick={() => setName('Solid snake')}>change name</button>
            <p>{name}</p>
        </div>
     );
}
 
export default Home;