import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';

// Renders our main app into the web page
// ReactDOM.render(<App />, document.getElementById("root"));
// registerServiceWorker();


// import React from "react";
// import ReactDOM from "react-dom";
// import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
// import Inbox from "./components/Inbox";
// import HeaderHtml from "./components/templates/HeaderHtml";

// function App() {
//   return (
//     <div>
//       <HeaderHtml />
//       <div className="container">
//         <Inbox />
//       </div>
//     </div>
//   );
// }

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);