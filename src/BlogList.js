const BlogList = (props) => {
    /**We have to specify the prop that we get as an argument in the Home.js component as a parameter in this component defintion other wise it will still have no clue what 'blogs' means
     * This function gets the props object as an argument, and the blogs attribute that we specified in this component's tag in Home.js gets added as a property to the props method
     * So, to get the blogs list we have to access it as a property of the props object as shown below
     */
    const blogs = props.blogs;
    return ( 
        <div className="blog-list">
            {blogs.map( (blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;