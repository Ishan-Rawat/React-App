const BlogList = ({blogs, title}) => {
    const handleDelete = (id) => {
        /**Its not a good idea to put this function here
         * Its because all our blogs have been initialised in the Home component, they make up the Home component's state.
         * And we have learnt that to update the state of a component we have to use the set method of the useState hook in that component.
         * Thus we will have to define the function in the Home component and pass it as a prop to this component.
         */
    }
    return ( 
        <div className="blog-list">
            <h2> {title} </h2>
            {blogs.map( (blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>delete blog</button>
                    {
                        /**
                         * Now we want to add the functionality of allowing users to delete the blogs
                         * For that we create a button in the template of the blogs and attach an event handler to it
                         * And we will wrap the handler function in an anonymous function so that we can use "()" to pass the id of the blog as an argument to it
                         */
                    }
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;