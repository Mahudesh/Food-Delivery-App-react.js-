import React from "react";
import '../Assetts/Landingpage.css'
import Faq from "./Faq";
import { FaHome } from "react-icons/fa";
import { PiBuildingsFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";
import { PiShoppingCartFill } from "react-icons/pi";
import { IoFastFood } from "react-icons/io5";
import { MdPolicy } from "react-icons/md";
import { FcRating } from "react-icons/fc";
import { IoIosPin } from "react-icons/io";
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Youtube } from 'lucide-react';
import { Link } from "react-router-dom";
import KFCImage from "../Assetts/KFCnew.avif"
import PizzaHut from "../Assetts/Pizzahut.avif"
import Meatandeat from "../Assetts/Meatandeat.avif"
import HMR from "../Assetts/HMR.avif"
import Annnapoorna from "../Assetts/Annnapoorna.avif"
import Baskin from "../Assetts/Baskin.avif"
import Haribhavanam2 from "../Assetts/Haribhavanam2.avif"
import Kwality from "../Assetts/Kwality.avif"
import TacoBell from "../Assetts/Taco Bell.avif" 

const restaurants = [
  { name: "KFC", description: "Burger, Fast Food, Biryani, Dessert, Beverages. ", Location: "Gandhipuram, Coimbatore", imageUrl: KFCImage, rating: "Rating 9.5" },
  { name: "Pizza Hut", description: "Pizza, Pasta, Fast Food, Desserts, Shake, Beverages", imageUrl: PizzaHut, rating: "Rating 9.0", Location: "Peelamedu, Coimbatore" },
  { name: "Meat And Eat", description: "Burger, Fast Food, Wraps, Beverages, Shakes", imageUrl: Meatandeat, Location: "RS Puram, Coimbatore", rating: "Rating 9.2" },
  { name: "HMR Restaurant", description: "South Indian, North Indian, Chinese, Sichuan", imageUrl: HMR, Location: "RS Puram, Coimbatore", rating: "Rating 8.5" },
  { name: "Baskin Robbins - Ice Cream Desserts", description: "Ice Cream, Desserts, Beverages,Drinks,Shakes", imageUrl: Baskin, Location: "RS Puram, Coimbatore", rating: "Rating 9.2" },
  { name: "Sree Annapoorna ", description: "South Indian, North Indian, Chinese, Beverages", imageUrl: Annnapoorna, Location: "Gandhipuram, Coimbatore", rating: "Rating 9.1" },
  { name: "Hari Bhavanam ", description: "Chettinad, Chinese, North Indian, South Indian, Seafood, Biryani, Desserts, Beverages", imageUrl: Haribhavanam2, Location: "RS Puram, Coimbatore", rating: "Rating 8.8" },
  { name: "Kwality Wall’s ", description: "Ice Cream, Desserts Frozen Dessert and Ice Cream", imageUrl: Kwality, Location: "Gandhipuram, Coimbatore", rating: "Rating 8.9" },
  { name: "Taco Bell", description: "Mexican, Fast Food, Wraps, Beverages", imageUrl: TacoBell, Location: "Prozone Mall, Ganapathy, Coimbatore", rating: "Rating 9.1" },
];

const Landingpage = () => {
  return (
    <div className="landingbody">
      <nav className="navbar">
        <Link to="/" className="logo">Food Rush<IoFastFood /></Link>
        <ul className="nav-list">
          <Link to='/'>
            <li className="home1"><FaHome />Home</li>
          </Link>
          <Link to='#restaurants'>
            <li className="rest"><PiBuildingsFill />Restaurants</li>
          </Link>
          <Link to='/Aboutus'>
            <li className="about"><FaUser />About Us</li>
          </Link>
          <Link to='/Privacy'>
            <li className="contact"><MdPolicy /> Policies</li>
          </Link>
          <Link to='#contactus'>
            <li className="cart" style={{ color: "black" }}><FaHeadphones />Contact Us</li>
          </Link>
        </ul>
        <div>
          <Link to='/'>
            <button className="btn">LogOut</button>
          </Link>
        </div>
      </nav>
      {/* Navbar */}

      <div className="homepage">
        <div className="headersec">
        </div>
        <header className="showcase">
          <h1>Welcome to Food Rush!</h1>
          <h2>Order from the best restaurants in town!</h2>
          <p>Hungry? Say no more! <br></br>Explore a world of flavors with , delivering culinary delights right when you crave them.</p>
          <h1></h1>
        </header>

        <br></br>
        <div className="Restaurants" id="restaurants">
        </div>
        <div className="pick">
          <h2>Pick Your Restaurant</h2><br></br>
        </div>

        <section className="featured-restaurants">
          {restaurants.map((restaurant, index) => (
            <div key={index} className="restaurant-container">
              <img src={restaurant.imageUrl} alt={restaurant.name} />
              <h2 className="names">{restaurant.name}</h2><br></br>
              <div className="content">
                <h3 className="names">{restaurant.description}</h3><br></br>
                <h3 className="names"><IoIosPin />{restaurant.Location}</h3><br></br>
                <h3 className="names  "><FcRating />{restaurant.rating} </h3>
              </div>
              <button>Order Now</button>

            </div>
          ))}
        </section>
        <br></br>
        <hr></hr>
        {/* Footer section */}

        <footer id="contactus">
  <div className="content">
    <div className="top">
      <div className="logo-details">
        <p className="logo_name">FoodRush</p>
      </div>
      <div className="media-icons">
        <p className="socmedia">Social Media<br></br>Handle</p>
        <a href="https://www.facebook.com/zomato/" target="_blank"><Facebook size={32} /></a>
        <a href="https://twitter.com/zomato?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank"><Twitter size={32} /></a>
        <a href="https://www.instagram.com/zomato/?hl=en" target="_blank"><Instagram size={32} /></a>
        <a href="https://www.youtube.com/@zomato" target="_blank"><Youtube size={32} /></a>
      </div>
    </div>
    <div className="link-boxes">
      <ul className="box">
        <li className="link_name">Important Links</li>
        <li className="hoverr"><Link to="/">Home</Link></li>
        <li className="hoverr"><Link to='/Aboutus'>About Us</Link></li>
        <li className="hoverr"><Link to="#restaurants">Restaurants</Link></li>
        <li className="hoverr"><Link to='/Privacy'>Policies</Link></li>
      </ul>
      <ul className="box">
        <li className="link_name">Terms & Conditions</li>
        <li className="hoverr"><Link to='/Terms'>Terms</Link></li>
        <li className="hoverr"><a href="#">Govt</a></li>
        <li className="hoverr"><Link to='/Privacy'>Privacy Policies</Link></li>
      </ul>
      <ul className="box">
        <li className="link_name">Contact Us</li>
        <li className="hoverr"><a href="#">+91 987654321</a></li>
        <li className="hoverr"><a href="#">+91 900990009</a></li>
        <li><a href="#">Mail Us To:</a></li>
        <li className="hoverr"><a href="#">care@foodrush.com</a></li>
        <li className="hoverr"><a href="#">Banglore - 530068</a></li>
      </ul>
    </div>
  </div>
  <div className="bottom-details">
    <div className="bottom_text">
      <span className="copyright_text">Copyright © 2023 <a href="#">FoodRush.</a></span>
      <span className="policy_terms">
        <Link to='/Privacy'>Privacy policy</Link>
      </span>
    </div>
  </div>
</footer>

