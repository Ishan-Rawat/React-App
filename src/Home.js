import { useState } from 'react';

const Home = () => {
    /**In our project we mainly want to create a mini blog site. So lets start by adding some blogs to our site
     * We can do so by adding a list of them. We want this list to be reactive as well. So we will specify an array of blogs as an arg to the useState hook.
     * each array item is an object with 3 properties that represents a blog
     */
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);
    /**Now how do we output these blogs. Bruteforce way would be to hardcode 3 divs in the JSX template 1 for each blog
     * But what if the number blogs changes in the future?
     * Better way would be to loop through all the blogs and output a bit of template for each blog
     * We can use the map function to cycle through the array, and the map function can do something for each item in the array.
     * Here we want the map function to return a bit of template for each item in the array.
     */
    return ( 
        <div className="home">
            {blogs.map( (blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
            {/** Explaination of the code:
             * The argument to the blog function is a calback function. Since we have used "()" instead of "{}" after "=>" it means that return stament is implicit and we want to return the 1 expression mentioned inside the parantheses
             * Inside the arrow function we are specifying a div which shows the blog name and author (not the blog body. That should be shown after we click the blog)
             * Whenever we are outputing a list using the map function, each of the list item returned should have a "key" property that react will use to keep track of the different List items.
             * React does this so that if at any point the data changes(we add or delete item from the list) react can keep track and render those changes
             *  More specifically, whenever outputing a list, each root element of the template we return should have a "key" property
             * The value for this key property must be something that is unique for each item in the list. Here we are using the "id" property of the blogs.
             *  
             */}
        </div>
     );
}
 
export default Home;