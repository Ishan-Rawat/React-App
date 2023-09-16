// NOTE that the notes fot the starting part of the tutorial have been made in a Notion page titled React Introduction
//notes attached to 2nd commit as markdown file in folder titled notes
import './App.css';

function App() {
  //we can write any valid JS inside this function before we return the JSX template.
  
  //One of the USPs of react templates is that we can insert dynamic content into them.
  //We insert dynamic content into the JSX template by inserting variables into them.

  const title = "Welcome to the blog"; // to insert this value inside the template we specify this variable inside {} curly braces in the JSX
  const likes = 50; //We can insert numbers, strings and arrays into the template, but NOT obejcts
  const link = "www.google.com";
  return (
    <div className="App">
      <div className="content">
        <h1>{ title }</h1>  {/* here we are inserting the value stored in the variable into the template*/}
        <p>Liked {likes} times</p>
        {/* We can write any valid JS statment that returns a value inside the curly braces. For example: */}
        <p>{ 10 }</p>
        <p>{ "This is a string literal" }</p>
        <p>{"when supplied an array it just creates a string by concatenating all the elements"}</p>
        <p>{[1,2,3,4]}</p>
        <p>{ Math.random()*10}</p>

        {/* Another cool thing it allows us to do is that it allows us to specify dynamic values to attributes of element tags. For example: */ }
        <a href={ link }>Google site</a> {/* Notice that the curly braces aren't surrounded by quotes */}
      </div>
    </div>
  );
}

export default App;
