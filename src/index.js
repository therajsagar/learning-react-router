import React from "react";
import {render} from "react-dom";

import "./index.css";

import App from "./components/App.jsx";



const rootElement = document.getElementById("root");

render(<App />, rootElement);
