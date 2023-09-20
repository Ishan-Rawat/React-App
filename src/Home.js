import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    
    const [blogs, setBlogs] = useState(null);
   
    const [name, setName] = useState('mario');
    
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setBlogs(data);
            })

    },[])

    return ( 
        <div className="home">
            {/**When we ran the code of the previous commit we got the error: cannot map null
             * This is because, remember that we are passign the list of blogs as a prop and runnign the map function on the list in the Bloglist component
             * For a few milliseconds when the fetch method has not updated the state with the blogs it has fetched, the blog list consists of Null (that we initialised it with)
             * Which gets sent as a prop to the bloglist component, and this leads to the above mentioned error.
             * 
             * To fix this, we will perform dynamic checking and wait till we get a value for blogs and then only output the BlogList component
             * We do this in the following manner: (notice that the BlogList component has been enclosed within curly braces)
             */}
            {blogs && <BlogList blogs={blogs} title={ "All blogs"} handleDelete={handleDelete}/>}
            {/**After this change it starts working, but why?
             * What we are doing here is called conditional templating
             * In the expression we have created using the && operator the LHS is evaluated first and if it evaluates to false then it just ignores the RHS, thus nothing is outputed
             * In the start when blogs is null, null evalutes to false in JS, thus the RHS is ignored
             * But when the state updates and blogs is no longer null, the RHS is evaluated and outputted.
             */}
            <button onClick={() => setName('Solid snake')}>change name</button>
            <p>{name}</p>
        </div>
     );
}
 
export default Home;