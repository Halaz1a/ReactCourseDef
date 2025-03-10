fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((response) => response.json())
.then((json) => console.log(json));

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

//Render ne peut être utilisée qu'une fois sinon elle écrase ce qui a été fait avant
h1 = React.createElement("div", {}, React.createElement("h1", {}, "Mon blog"), 
React.createElement("div", {className: 'card'}, 
    React.createElement("h2", {}, "Article de blog 1"),
    React.createElement("p", {}, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat…"))
);

root.render(h1);