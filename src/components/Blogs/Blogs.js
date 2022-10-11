import React from 'react';

const Blogs = () => {
    return (
        <div>
             <div className="card text-center border-info bg-light m-5">
                <div className="card-body">
                    <h5 className="card-title">What is the purpose of react router?</h5>
                    <p className="card-text">React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.At its heart, React Router is a state container for the current location , or URL. It keeps track of the location and renders different Route s as it changes, and it also gives you tools to update the location using Link s and the history API</p>
                </div>
             </div>
             <div className="card text-center border-info m-5 bg-light">
                <div className="card-body">
                    <h5 className="card-title">How does contex API works?</h5>
                    <p className="card-text">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.Context is a built-in API introduced in react 16.3 . It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props</p>
                </div>
             </div>
             <div className="card text-center border-info m-5 bg-light">
                <div className="card-body">
                    <h5 className="card-title">What are the uses of reference details?</h5>
                    <p className="card-text">Refs provide a way to access DOM nodes or React elements created in the render method.In the typical React dataflow, props are the only way that parent components interact with their children. To modify a child, you re-render it with new props. However, there are a few cases where you need to imperatively modify a child outside of the typical dataflow. The child to be modified could be an instance of a React component, or it could be a DOM element. For both of these cases, React provides an escape hatch.</p>
                </div>
             </div>
        </div>
    );
};

export default Blogs;