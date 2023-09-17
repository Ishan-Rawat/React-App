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
            {/**We can also supply another attribute to it and it will again be attached to the props object as a property*/}
            <BlogList blogs={blogs} title={ "All blogs"}/>
        </div>
     );
}
 
export default Home;