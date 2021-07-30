import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";


function App() {
	return (
	<Router>
		<ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>

		<Switch>
			<Route exact path="/about">
            	<About />
          	</Route>
			<Route exact path="/">
            	<Home />
          </Route>
		</Switch>
	</Router>
	);
}
export default App;
