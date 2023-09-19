import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
        /**How this function works:
         * First, we are using the filter function to filter out the blog that has the id of the blog we want to delete
         * we are storing this new list of blogs that we get after filtering in a variable
         * Then we call the set method of the useState hook to change our blog list to the new list we have created.
         * Thus, we page gets updated (cuz we used the useState hook)
         * 
         * Whats inside the filter function: the callback function we have given to the filter function here returns true for all the blogs that dont have the id that we want to delete
         * Thus the blogs that we dont want to delete survive this filtering process
         */
    }

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title={ "All blogs"} handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home;