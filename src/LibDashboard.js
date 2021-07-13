//import { useState } from "react";
import { Link } from "react-router-dom";
//import { useEffect } from "react";
//import { useLocation } from "react-router";
//import { useLocation } from "react-router-dom";



const LibDashboard = () => {
    //const location = useLocation();
   
    //const location = useLocation();
    //const [Email,setEmail]=useState('');
    //const [pathname,setPathname]=useState('');
    //useEffect(() => {
       //setPathname(location.pathname); 
      // setEmail(location.state.Email); 
    //}, [location]);

    //const Username=location.state.Username;
    //console.log("Username"+Username);
    //const [Email,setEmail]=useState('');
    //const [prevPath,setprevPath]=useState('');
    //setprevPath(location.state.prevPath);
    
  return (
      <div>
    <nav className="Navbar">
            <h1>Welcome </h1> {/*{Email}*/}
            


      <div className="links">
     
            &ensp;

              <Link to="/" >Home</Link>

                <Link to="/Addbooks" >Add Books </Link>
                &ensp;


                <Link to="/DeleteBooks"  >Delete Books </Link>
                &ensp;

                <Link to="/UpdateBooks" >Update Books</Link>


                &ensp;

                <Link to="/StudentBooks" >Issued to students</Link>


                &ensp;

                <Link to="/DisplayBooks" >Display Books</Link>

      </div>
     
    </nav>

                
                
                 

    </div>
  );
}
 
export default LibDashboard;