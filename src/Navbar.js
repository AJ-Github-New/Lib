import { Link } from "react-router-dom";

const Navbar = () => {
  return (

    <nav className="navbar">
          
            <h1>Library management system</h1>

      <div className="links">
     
                <Link to="/Librarian">Librarian </Link>
                &ensp;


                <Link to="/Student" >Student </Link>
      </div>
     
    </nav>
  );
}
 
export default Navbar;