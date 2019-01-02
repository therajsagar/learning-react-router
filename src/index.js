import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Home = () => <div><h1>Home</h1></div>;
//const About = () => <div><h1>About</h1></div>;
const About = () => <div><h1>About</h1></div>;
const Users = (props) => {
  return (
    <div>
      <h1>UserId: {props.match.params.id}</h1>
    </div>
)}



const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/users/:id" component={Users} />
      <Route exact path="/users" render={()=> <div><h1>Users</h1></div>} />
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));

