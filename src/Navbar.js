//New navbar component
// Remember that components are just functions that return a JSX template and then that function is exported at the bottom of the file
const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>The B L O G:</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color : "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New blog</a>
                {/**Normally in HMTL for inline style you would write style="property:value"
                 * but in JSX the value for the syle attribute can be dynamic, so we wrote style = {}
                 * Then, the styles are represented as an object (key value pairs) so we wrote something like
                 * {{key: Value, key: value}}
                 */}
            </div>
        </nav>
    );
}
 
export default Navbar;