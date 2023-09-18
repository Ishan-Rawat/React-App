import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title={ "All blogs"}/>
            {
            /**Now lets see how we can pass different data to the same component and re-use it for a different purpose.
             * Lets say I want to show only the blogs authored by mario beneath the list of all blogs.
             * So, we can just reuse the component we created to cycle through a list of blogs, and we can pass it a list of blogs authored by mario and it will do the job.
             * 
             * Also, instead writing a new list with just the blogs authored by mario, we can cycle through the list of  alll blogs and just filter out the blogs not written by mario
             * We can use the filter function for this.
             * The filter() iterates over a list and we pass it a function as an argument which it calls for each list item. If the function returns true for an item,
             * then it keeps the item, and if it returns false for an item, it filters the item out.
             */
            }
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title={"Mario's blogs"}/>
        </div>
     );
}
 
export default Home;