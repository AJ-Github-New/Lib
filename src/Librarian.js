import { Link } from 'react-router-dom';

const Librarian = () => {
    return ( 
        <nav className="navbar">
            <h1>Welcome Librarians</h1>
            <div className="links">
                <Link to="/LibRegistration">Registration</Link>
                &ensp;

                <Link to="/LibLogin">Login</Link>
            </div>  
        </nav>

     );
}
 
export default Librarian;