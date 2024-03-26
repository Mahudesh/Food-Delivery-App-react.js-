import React from 'react';
import { FaHome } from "react-icons/fa";
import '../Assetts/Privacy.css'; 
import { Link } from 'react-router-dom';

function Privacy() {
  return (
    <div className="privacy-policy">
         <nav className="navbar">
          <Link to='/' className="logo">Food Rush</Link>
          <h2 className="logo">Privacy Policy</h2>
          <ul className="nav-list">
          <Link to='/Landingpage'>
            <button className="btn">Back</button>
          </Link>
          <div className="dropdown">
            <select id="languages">
              <option value="en">English</option>
            </select>
          </div>
          </ul>
      </nav> 
     <main>
      <article>
        <h1 id="home"><span>FoodRush Inc.</span>Privacy Policy</h1>
        {/* Your Privacy Policy content */}
      </article>
      <br/>
      <div className="tacbox">
        <input id="checkbox" type="checkbox" />
        <label htmlFor="checkbox"> I agree to these <Link to='/Terms'>Terms and Conditions.</Link></label>
      </div>
      <br/>
    </main>
    </div>
  );
}

export default Privacy;
