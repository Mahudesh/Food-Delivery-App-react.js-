  import React from 'react';
  import { FaHome } from "react-icons/fa";
  import '../Assetts/Aboutus.css'; 
  import { Link } from 'react-router-dom';

  function Aboutus() {
    return (
      <div className="privacy-policy">
          <nav class="navbar">
            <a href="#" class="logo">Food Rush</a>
            <h2 className="logo">About</h2>
            <ul class="nav-list">
            <Link to='/Landingpage'>
              <button className="btn">Back</button>
              </Link>
            <div class="dropdown">
    <select id="languages">
      <option value="en">English</option>
    </select>
  </div>

            </ul>

        </nav> 
      <main>
          <article>
          Launched in 2023, Our technology platform connects customers, restaurant partners and delivery partners, serving their multiple needs. Customers use our platform to search and discover restaurants, read and write customer generated reviews and view and upload photos, order food delivery, book a table and make payments while dining-out at restaurants. On the other hand, we provide restaurant partners with industry-specific marketing tools which enable them to engage and acquire customers to grow their business while also providing a reliable and efficient last mile delivery service. We also operate a one-stop procurement solution, Hyperpure, which supplies high quality ingredients and kitchen products to restaurant partners. We also provide our delivery partners with transparent and flexible earning opportunities.
          <br></br><br></br> Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience. Convenience is what makes us tick. It's what makes us get out of bed and say, "Let's do this."<br></br> <br></br>
          FoodRush has grand plans to be India’s most loved hyperlocal player. It aims to be the most accessible platform on the network - reimagining the meaning of convenience in the country through a variety of service offerings.  From finding time to workout to spending precious moments with family and prioritising mental health — Swiggy's Remote-First way of working has been helping Swiggsters across the country. Watch this video to understand how things have been changing for them.
          Want to know what's buzzing at the Swiggy side of the planet? There here is what you need to follow. We Are Swiggy channels on Social Media will give you an inside-out view of the everyday serious and fun stuff within our world. All you need to do is to click your preferred channel and make sure you follow us.


  </article>
      
    
      </main>

        </div>
    );
    }
    export default Aboutus;
