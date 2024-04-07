import React,{useState,useEffect} from "react";
import { IoFastFood } from "react-icons/io5";
import '../Assetts/Firstpage.css'
import { Link } from "react-router-dom";

const Firstpage=()=>
{
  const [showContent, setShowContent] = useState(false);
  
  useEffect(() => {
    setShowContent(true);
  }, []);
  const imageUrls = [
   'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b33020eb6608b35bc925b8cf8614b418',
   'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d0kifukgn0mpsmjfkw2z',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fuk7fzdomy8cnztzk4iq',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/dj3uolwygk8nzlli2apz',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/61083fda84a333a06234a511f870412b',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/d3b3db238b6448c3f297c851e9d0b96b',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e1114ef2ed8df79fdf4acaee0ec0b040',
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/v3wlw08mzbrhkdfbx38p    ',
  ];
    return(
        <body className="bodyy">
        <div className="firstpagebody">
        <nav class="navbar">
          <a href="#" class="logo">Food Rush<IoFastFood /></a>
          <h2 className="logo">Your Cravings! Our Delivery!</h2>
          <ul class="nav-list">
            <Link to='/Login'>
            <button className="btn">Login</button>
            </Link>
            <Link to='/Signup'>
            <button className="btn">Sign Up</button>
            </Link>
          </ul>

      </nav> 
      </div>
      <div className={`intro ${showContent ? 'slide-in' : ''}`}>
        <marquee>
      <p className="titlehead">
        "Where Flavor Meets Your Front Door – Fast, Fresh, and Fabulous!"
        <br />
        One Bite At A Time
      </p>
      </marquee>
    </div>
      
    <br></br><br></br>
      <div className="image-container">
      {imageUrls.map((imageUrl, index) => (
        <div className="image" key={index}>
          <img src={imageUrl}  />
        </div>
      ))}
    </div>
     
        </body>
    );
}
export default Firstpage;
