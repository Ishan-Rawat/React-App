# React Introduction

React is a JS library used to create interactive web sites and user interfaces.

It allows us to easily create Single Page Apps

Single Page apps: 

![Untitled](React%20Introduction%2084a7658c422548f9a18c2cf4b6bdcbee/Untitled.png)

![Untitled](React%20Introduction%2084a7658c422548f9a18c2cf4b6bdcbee/Untitled%201.png)

In a single page app the server only has to send a single page to the browser, and then react takes over and manages the whole website in the browser, including any kind of website data(?) and any kind of user activity such as click events and even routing from page to page.

Users can click on links and navigate from page to page but these new pages are not sent by the server, but react changes the content in the browser depending on the route of the URL that the user clicks.

# Creating a react application

There are many ways of getting started with react but we will be using a command line tool called `create react app` . It generates a starter react project for us, that comes with all of the setup and config that we need like babel and webpack. We need those to compile our react app into JSX , that is, production ready JS. 

To use it we need to have installed a modern version of Node because modern versions of Node come with NPX which is required to run the create react app tool.

## Overview of the starter react app:

Node-modules: This directory contains all the dependencies (including the react library).

![Untitled](React%20Introduction%2084a7658c422548f9a18c2cf4b6bdcbee/Untitled%202.png)

public:

![Untitled](React%20Introduction%2084a7658c422548f9a18c2cf4b6bdcbee/Untitled%203.png)

This is where all the files that are “public to the browser”(?) reside, including the index.html file.

index.html is the 1 file that is served to the browser and this file is where the all the react code is injected, inside the div with the “root” id:

![Untitled](React%20Introduction%2084a7658c422548f9a18c2cf4b6bdcbee/Untitled%204.png)

src:

![Untitled](React%20Introduction%2084a7658c422548f9a18c2cf4b6bdcbee/Untitled%205.png)

→The src folder contains 99% of all the code that we are going to write. It contains all of our react components. App.js is one of the components. 

→Delete the App.test.js and setupTests.js file cause they are out of the scope of this course. 

→The index.js file in this directory is what kickstarts our react app. It is responsible for taking all of the react components and mounting them to the DOM.

![Untitled](React%20Introduction%2084a7658c422548f9a18c2cf4b6bdcbee/Untitled%206.png)

Here we can see that it is taking the App component and  rendering it in the div with id=”root” that we saw earlier in the index.html file.

→ Reportwebvitals is a file that deals with performance and we will delete it right now. 

After deleting it we need to delete a 2 lines in index.js file as well.

→ Package.JSON file:

![Untitled](React%20Introduction%2084a7658c422548f9a18c2cf4b6bdcbee/Untitled%207.png)

It specifies the dependencies , scripts etc.

## How to preview the app:

We do this by running the start script. We do so by running `npm run start` in the terminal.

It spins up a local development server.

The output:

![Untitled](React%20Introduction%2084a7658c422548f9a18c2cf4b6bdcbee/Untitled%208.png)

What we see on the browser:

![Untitled](React%20Introduction%2084a7658c422548f9a18c2cf4b6bdcbee/Untitled%209.png)

(The content of the app is on the left side.) From inspect element we can see that this content is coming from a div with class = “app” nested inside a div with id = “root”.

![Untitled](React%20Introduction%2084a7658c422548f9a18c2cf4b6bdcbee/Untitled%2010.png)

In the app.js file we can see that we have specified a div with class=”app”. This div is being injected into the index.html file. If we scroll up we can see that in the index.html file we have specified a div with class = “root” which takes this “injection” from the react component.

---

Run npm install to install all the dependencies from the package.json file.

---

# React Components

A typical web page built with react is made up of multiple components where each component is a self contained unit of content. For example:

![Untitled](React%20Introduction%2084a7658c422548f9a18c2cf4b6bdcbee/Untitled%2011.png)

A navbar can be a component, an article can be a component and a sidebar can be a component. As a react developer our job is to create these components that are then rendered into the DOM by react.

Each component contains its own:

- Template: The template is the HTML for that bit of content that the component shows.
- Logic: This is JS code, for example a JS function that runs when a log out button is clicked

## A deeper look at App.js

![Untitled](React%20Introduction%2084a7658c422548f9a18c2cf4b6bdcbee/Untitled%2012.png)

At the moment whatever we are seeing on the page is coming from this component. 

This component is called the root component. What is the root component? That is for later.

Here we can see that this component is basically a function that returns something that looks like HTML code.

NOTE that this function’s name MUST start with a capital letter.

It can be an array function if you want.

The thing that this function returns that looks like HTML is NOT actually HTML. Instead it is JSX code.

JSX allows us to easily create these HTML like templates. In the background, a transpiler called babel converts JSX to HTML that is then rendered on to the DOM.

One difference between HTML and JSX that we can note right now is that we use the “keyword” className instead of class in JSX. This is because class is a reserved word in JS and at the end of it, we are writing in a JS file.

![Untitled](React%20Introduction%2084a7658c422548f9a18c2cf4b6bdcbee/Untitled%2013.png)

### Import react:

In react versions lesser than 17 we have to import react at the top of each component like this:

![Untitled](React%20Introduction%2084a7658c422548f9a18c2cf4b6bdcbee/Untitled%2014.png)

Here, we are using react version 18 so we don’t have to do this.

###