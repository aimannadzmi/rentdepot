import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import 'bootstrap/dist/css/bootstrap.css';

// Renders our main app into the web page
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
