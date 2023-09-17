//New navbar component
// Remember that components are just functions that return a JSX template and then that function is exported at the bottom of the file
const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>The B L O G:</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;