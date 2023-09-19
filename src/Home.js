import { useState, useEffect } from 'react';
import BlogList from './BlogList';
/**Introduction to useEffect hook:
 * The useEffect hook runs a function that we provide it every time the component is rendered.
 * A component is 1st rendered when the page is loaded. Then it is renedered again everytime the state changes.
 * Here, notice that we are importing it along with the useState hook in the 2st line
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
    //To use the the useEffect hook, we just call it. We dont store it in a variable because it doesnt return anything
    //As an argument we provide it a callback function
    useEffect(() => {
        console.log("use effect demo")
    })
    /**When using the useffect hook we must be careful that function it calls doesn't change the state of the component OR it will create an inifinite loop
     * Because the 1st time it is called it will change the state, which will result in a re-render, which will cause the useEffect function to run, which will again trigger a rerender and this goes on and on
     */

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title={ "All blogs"} handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home;