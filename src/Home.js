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
    /**
     * Now, after creating the data/db.json file we can either install the JSON server package locally and then run it so that it cam watch the db.json file and create endpoints for it
     * OR
     * we can run it with npx just like we did when we used create-react-app and have it watch the db.json file that way.
     * We are going to go with the latter approach.
     * For this, in a new terminal we will run:
     * npx json-server --watch data/db.json --port 8000
     * 
     * When we run this in the terminal it will return us an endpoint for our resource (something like: http://localhost:8000/blogs)
     * Then, we can send requests to this endpoint (such as a get request to fetch all the data)
     * 
     * The endpoints we will be using:
     *  +-------------+--------------+---------------------+
        | URL         | request type | function            |
        +-------------+--------------+---------------------+
        | /blogs      | get          | fetch all blogs     |
        | /blogs/{id} | get          | fetch a single blog |
        | /blogs      | post         | add a new blog      |
        | /blogs/{id} | delete       | delete a blog       |
        +-------------+--------------+---------------------+

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