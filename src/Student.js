import { Link } from 'react-router-dom';


const Student = () => {
    return ( 
        <div className="navbar">
            <h1>Welcome Students </h1>
            
            
            <div className="links">
                <Link to="/StudRegistration" >Registeration
                </Link>
                &ensp;


                <Link to="/StudLogin" >
                    Login
                </Link>
            </div>

        </div>

     );
}
 
export default Student;