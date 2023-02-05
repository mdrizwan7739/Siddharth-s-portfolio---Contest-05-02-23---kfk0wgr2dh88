import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import Blog from './Blog';
import Home from './Home';

const Info = () => {
    const navigate=useNavigate();
 const handleBlog=()=>{
       navigate("/Blog");
    }
  const handleHome=()=>{
       navigate("/Home");
    }

    return (
        <div id="info-page">


            <h1> Info page </h1>
            <h2>I am born in India</h2>
            <h2>and I like to play Cricket </h2>
             <button id="info-to-blog"  onClick={handleBlog} > Go to Blog</button>
            <button id="info-to-home"  onClick={handleHome} > Go to Home</button>
        </div>
    )
}
export default Info
