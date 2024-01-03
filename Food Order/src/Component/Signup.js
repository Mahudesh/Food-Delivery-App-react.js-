import React, {useState} from 'react'
import '../Assetts/Signup.css'
import { Link, useNavigate } from 'react-router-dom';

const Signup=()=>
{
    const nav=useNavigate();
    const[password,setpassword] = useState('');
    const[cpassword,setcpassword] = useState('');

    const handlesignup=(e)=>
    {
        e.preventDefault();
        if(password === cpassword && (password!=='' || cpassword!==''))
        {
            nav('/Landingpage');
        }
        else
        {
            alert("Verify ur password");
        }
        
    }

    return(
        <body className='Signupbody'>
        <form class="container2">
        <h2 className='text'>Sign Up</h2>

        <input type="text" name="" id="name" className="name" placeholder="   Name" required/>

        <input type="tel" name="" id="phone" className="name"  placeholder="   Phone No" required/>

        <input type="number" name="" id="age" className="name"  placeholder="    Age" required/>

        <input type="email" name="" id="email" className="name"  placeholder="    Email" required/>

        <input type="password" name="" id="pass1" value={password} onChange={(e) => setpassword(e.target.value)} className="name"  placeholder="    Password" required/>
        <input type="password" name="" id="pass2" value={cpassword} onChange={(e) => setcpassword(e.target.value)} className="name"  placeholder="    Confirm Password" required/>


        <input type="text" name="" id="Address" className="name"  placeholder="    Address" required/>
        <Link to='/'>
        <button class="submit" onClick={handlesignup}>Sign Up</button>
        </Link>
    </form>
    </body>
    );
}
export default Signup;