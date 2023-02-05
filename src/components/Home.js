import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Info from './Info';
import Blog from './Blog';
const Home = () => {
    const navigate=useNavigate();
    const handleInfo=()=>{
       navigate("/Info");
    }
    const handleBlog=()=>{
       navigate("/Blog");
    }

    return (
        <div id='home-page'>

            <h1>Home page</h1>
            <h2>Hi, my name is Siddharth </h2>
            <h2>and I work at <a href="https://www.newtonschool.co/">Newton School</a></h2>
           <button id="home-to-blog"  onClick={handleBlog}> Go to Blog</button>
            <button id="home-to-info"  onClick={handleInfo}> Go to Info</button>

        </div>
    )
}
export default Home
