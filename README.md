Q1.What is JSX, and why is it used?
JSX is JavaScript XML that is look alike HTML. It is much easier to visualise the structure of UI when it looks like the final output.

Q2.What is the difference between State and Props?
Props are like arguments passed to a function, while State is like variables declared inside that function.

Q3.What is the useState hook, and how does it work?
The useState hook is the most fundamental in React, which allows adding State to functional components It returns an array with exactly two values: the first one is the current state/value second one is the function to update the value

Q4.How can you share state between components in React? The parent holds the useState.It passes the value to one child and the setter function (as a callback) to another child.

Q5.How is event handling done in React?
We can’t just call the function in the JSX (e.g., onClick={handleClick(id)}) because that would run the function immediately when the component renders. Instead, we use an arrow function: onClick={()=>handleClick(id)}
