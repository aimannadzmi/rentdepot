import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import "./Contact.css"


const Contact = () => {
    return (
      <div className="AppContact">
      <h2>Contact Us</h2>
      <div>
      <form action="/action_page.php">
      <label>First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name.." />
      <label>Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
  
  
      <label>Email</label>
      <input type="email" id="email" name="email" placeholder="Your email" />
  
  
      <label>Subject</label>
      <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
      <input type="submit" value="Submit" />
      </form>
      </div>
      </div>
    );
  }

export default Contact;