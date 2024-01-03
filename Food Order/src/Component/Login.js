import React,{useState} from 'react'
import '../Assetts/Login.css'
import { Link,useNavigate } from 'react-router-dom';
import LandingPage from './Landingpage';

const Login=()=>
{
    const nav = useNavigate();
    const[username, Setusename] = useState('');
    const[password, Setpassword] = useState('');
    const handleLogin = (e) =>
    {
        e.preventDefault();
        if(username === '')
        {
            alert("Username must be filled");
        }
        else if(password === '')
        {
            alert("Password must be filled");
        }
        else if(username==="mahudesh@gmail.com" && password==="123")
        {
            nav('/Landingpage');
        }
        else if(username!=="mahudesh" || password!=="mahu123")
        {
            alert("Username And Password Does Not Match");
        }
    }

    return(
        
        <div className='loginbody'>
        <form class="container1">
        <h2 className='text'>Login</h2>
      


        <input type="email"  id="emailid" 
            value={username}
            onChange={(e) => Setusename(e.target.value)}
            className="name" 
           placeholder="    Email" required/>
           
        <input type="password"minLength={8}
          id="pass"
          value={password}
          onChange={(e) => Setpassword(e.target.value)}
           className="name"
          placeholder="    Password" required/>

        <p className='submitsection'>
        <button  class="submit" onClick={handleLogin} >Login</button>

        <Link to='/Signup'>

        <button className="submit">Sign Up</button>

        </Link>
        </p>
    </form>
    </div>
    );
}
export default Login;