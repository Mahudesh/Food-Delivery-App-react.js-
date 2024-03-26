import React from "react";
import '../Assetts/Terms.css';
import { Link } from "react-router-dom";

function Terms() {
    return (
        <div className="termbody">
            <nav className="navbar">
                <Link to='/' className="logo">Food Rush</Link>
                <h2 className="logo">Terms & Conditions</h2>
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
                <article className="terms-and-conditions">
                    <h1> FoodRush</h1><br />
                    <p>These terms and conditions outline the rules and regulations for the use of our company.</p>
                    {/* Rest of the content */}
                </article>
            </main>
        </div>
    );
}

export default Terms;
