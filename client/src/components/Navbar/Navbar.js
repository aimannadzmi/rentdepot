import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Logo from "../images/logo.png";
import HomePage from "../HomePage/HomePage.js";
import Messaging from "../Messaging/Messaging.js";
import MyProfile from "../MyProfile/MyProfile.js";
import Contact from "../Contact/Contact.js";

function Navbar() {
  return (
    <Router>
      <nav>
    <img className="rentDepotLogo" src={Logo}/>
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to={"/"} className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to={"/Messaging"}
          className={window.location.pathname === "/Messaging" ? "nav-link active" : "nav-link"}
        >
          Messaging
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to={"/myProfile"}
          className={window.location.pathname === "/myProfile" ? "nav-link active" : "nav-link"}
        >
          My Profile
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to={"/Contact"}
          className={window.location.pathname === "/Contact" ? "nav-link active" : "nav-link"}
        >
          Contact Us
        </Link>
      </li>
    </ul>
    </nav>
    <Switch>
      <Route exact path ="/" component = {HomePage} />
      <Route path="/Messaging" component={Messaging} />
      <Route path ="/MyProfile" component={MyProfile} />
      <Route path ="/Contact" component={Contact} />
    </Switch>
    </Router>
  );
}

export default Navbar;

// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// function Home() {
//     return <h2>Home</h2>;
//   }
  
//   function Messages() {
//     return <h2>Messages</h2>;
//   }
  
//   function myProfile() {
//     return <h2>My Profile</h2>;
//   }

// const Navbar = () => (
//     <div className="container">
//         <div className="col-lg-6" id="rentDepotLogo">
//             <img className="logo" src=""/>
//         </div>

//         <div className="col-lg-6" id="navBar">
//             <a style={{marginRight: "20px"}} Link to="/">Home</a>
//             <a style={{marginRight: "20px"}} href="">Messages</a>
//             <a href="">My Profile</a>
//         </div>
//     </div>
// )

// function AppRouter() {
//     return (
//         <Router>
//           <div>
//             <nav>
//               <ul>
//                 <li>
//                   <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                   <Link to="/messages/">Messages</Link>
//                 </li>
//                 <li>
//                   <Link to="/myProfile/">My Profile</Link>
//                 </li>
//               </ul>
//             </nav>
    
//             <Route path="/" exact component={Index} />
//             <Route path="/about/" component={About} />
//             <Route path="/users/" component={Users} />
//           </div>
//         </Router>
//       );
//     }
    
//     export default AppRouter;