import { useState, useEffect } from 'react';
import BlogList from './BlogList';
/**Introduction to use effect dependencies:
 * When we use the useEffect hook without specifying any dependencies it runs the function for every render of the document.
 * If we dont want that to happen, we can pass an array of dependencies to the useEffect() as a 2nd argument.
 * The dependencies are basically the state values for which the useEffect hook runs the callback function when they are changed. 
 */
const Home = () => {
    
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    //Example of dependencies: if we specify an empty array for dependencies argument (2nd argument) then the useEffect hook's function runs only once when the page is first rendered.
    useEffect(() => {
        console.log("use effect demo")
    },[])
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title={ "All blogs"} handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home;