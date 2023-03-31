import React from "react";

const Blog = () => {
  return (
    <div>
      
      <div className="card glass grid grid-cols-1 md:grid-cols-2 gap-3 p-4 mt-64 md:mt-3 w-96 mx-auto">
        <div className="card-body glass">
          <h2 className="card-title">1. Props vs state</h2>
          <div className="flex">
            <div>
              <p>
                Props are read-only. Props are immutable. Props allow you to
                pass data from one component to other components as an argument.
                Props can be accessed by the child component. Props are used to
                communicate between components.
              </p>
            </div>
            <div><p>State changes can be asynchronous. State is mutable. State holds
      information about the components. State cannot be accessed by child
      components. States can be used for rendering dynamic changes with the
      component.</p></div>
          </div>
        </div>

        <div className="card-body glass">
          <h2 className="card-title">2. How does useState work?</h2>
          <p>
            The useState hook uses a concept known as closures to manage state
            between function calls. When we call the useState hook, React
            creates a state object with the initial state value that we pass as
            an argument. This state object is stored internally by React and is
            associated with the component where the useState hook is used. React
            then returns an array with two elements: the current state value and
            a function that can be used to update the state value. The state
            value is initially set to the initial state value that we passed to
            the useState hook. When we call the state update function, React
            schedules a re-render of the component with the updated state value.
            When the component re-renders, React uses the updated state value to
            render the component with the updated UI. React also manages the
            state updates and ensures that they are applied in the correct
            order. If multiple state updates are triggered in a single function
            call, React will batch the updates and apply them in the correct
            order during the next render cycle. Overall, the useState hook is a
            powerful tool that simplifies state management in functional
            components and allows us to create dynamic and interactive UIs in
            React.
          </p>
        </div>

        <div className="card-body glass">
          <h2 className="card-title">
            3. Purpose of useEffect other than fetching data.
          </h2>
          <p>
            Purposes of useEffect other than fetching data: Managing side
            effects such as setting up and tearing down timers, subscriptions,
            and event listeners. Integrating with third-party libraries.
            Animating component transitions. Updating the document title based
            on state or props. Handling user authentication and authorization.
            Handling browser or network events. Updating the URL or navigating
            to a different page. Updating global state outside of React.
          </p>
        </div>

        <div className="card-body glass">
          <h2 className="card-title">4. How Does React work?</h2>
          <p>
            React is a JavaScript library that is used for building user
            interfaces. React uses a component-based architecture, which means
            that UI elements are broken down into reusable components. When a
            user interacts with a React-based application, the browser sends an
            event to the application. React then updates the UI by modifying the
            state of the components. This process is called rendering. React
            uses a virtual DOM to efficiently update the UI. The virtual DOM is
            a lightweight copy of the actual DOM that React keeps in memory.
            When the state of a component changes, React updates the virtual DOM
            and then calculates the minimal set of changes required to update
            the actual DOM. This approach is much faster than updating the
            entire DOM. React also supports server-side rendering, which allows
            the initial rendering of the application to be done on the server
            rather than in the browser. This can improve performance and enable
            better SEO .
          </p>
        </div>
      </div>
     
    </div>
  );
};

export default Blog;
