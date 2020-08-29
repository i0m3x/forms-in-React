forms - added componentDidMount()

Component Lifecycle: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

tutorial

https://reactjs.org/docs/react-component.html


Is componentDidMount() a good lifecycle to fetch data?
Absolutely!

My problem when I started learning React lifecycles was, where do I place API calls in my React component when it first loads.

It turns out, you can’t just stick it anywhere. Otherwise it causes really odd, inconsistency issues with your React application.

You can either place your data fetch calls on an event listener, such as click. Or if you need to grab initial data when the component mounts, do it inside the componentDidMount() method.

source: https://linguinecode.com/post/understanding-react-componentdidmount
