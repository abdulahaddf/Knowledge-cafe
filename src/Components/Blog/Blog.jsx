
import React from 'react';

const Blog = () => {
    return (
        <div>
           <div>
           <h1>1. Props vs state</h1>
            <ol>
                <li>Props are read-only.</li>
                <li>Props are immutable.</li>
                <li>Props allow you to pass data from one component to other components as an argument.</li>
                <li>Props can be accessed by the child component.</li>
                <li>Props are used to communicate between components.</li>
            </ol>
            <ul role="list">
                <li>State changes can be asynchronous.</li>
                <li>State is mutable.</li>
                <li>State holds information about the components.</li>
                <li>State cannot be accessed by child components.</li>
                <li>States can be used for rendering dynamic changes with the component.</li>
            </ul>
           </div>
        <div>
            <h1>
            2. How does useState work?
            </h1>
            <p>The useState hook uses a concept known as closures to manage state between function calls. When we call the useState hook, React creates a state object with the initial state value that we pass as an argument. This state object is stored internally by React and is associated with the component where the useState hook is used. React then returns an array with two elements: the current state value and a function that can be used to update the state value. The state value is initially set to the initial state value that we passed to the useState hook. When we call the state update function, React schedules a re-render of the component with the updated state value. When the component re-renders, React uses the updated state value to render the component with the updated UI. React also manages the state updates and ensures that they are applied in the correct order. If multiple state updates are triggered in a single function call, React will batch the updates and apply them in the correct order during the next render cycle. Overall, the useState hook is a powerful tool that simplifies state management in functional components and allows us to create dynamic and interactive UIs in React.</p>
        </div>
        <div>
            <h1>
            3. Purpose of useEffect other than fetching data.
            </h1>

        </div>


           
        </div>
    );
};

export default Blog;