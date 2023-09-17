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
            {/**After creating a component for the cycling through the list part, we can just import that component into this component
             * Normally we would insert this component here by writing the tag for it like <BlogList/>. But here this will give the error 'blogs' is not defined.
             * Thus we have to pass it the list of blogs using a prop
             */}
            { /**Here we want to pass the blogs array to the BlogList component so we do so by specifying an attribute with the same name in the component's attribute */}
            
            <BlogList blogs={blogs}/>
        </div>
     );
}
 
export default Home;