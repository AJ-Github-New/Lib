import { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from 'axios';
//import { useAlert } from 'react-alert'

//import { useLocation } from "react-router-dom";
//import { withRouter } from "react-router";
//import { useLocation } from "react-router-dom";

//import LibDashboard from "./LibDashboard";

const LibLogin = props => {
    const [Email,setEmail]=useState('');
    const [Password,setPass]=useState('');
    const history=useHistory();
    //const location = useLocation();
    //const alert = useAlert()
    //const location = useLocation();
    //const [Username,setUsername]=useState('');
     //setUsername(location.state.Username);
    const handleLogin=()=>
    {
        Axios.post("http://localhost:3001/handleLibLogin",{Email:Email,Password:Password
    }).then((response)=>
    {
      if(response.data.message)
      {
      //setLoginStatus(response.data.message);
      alert(response.data.message);
      }
      else{
          //setLoginStatus("successful");
          alert("Logged in successfully");
          console.log(response.data);

            // 

           // <LibDashboard Email={Email} />//Password={Password}/>
            history.push('/LibDashboard');
            history.push({
                pathname: '/LibDashboard',
                state: { Email:Email}
              })

      }
    })        

    }

    return ( 

        <div className="create">
        <label>Email:</label>
        <input type="Email"  value={Email} required onInput={(e)=>setEmail(e.target.value)}></input>
        <br></br>
        <label>Password:</label>
        <input type="password"  value={Password} required onInput={(e)=>setPass(e.target.value)}></input>
        <br></br>
        <button onClick={()=>handleLogin()}>Login</button>
        </div>

     );
}
 
export default LibLogin;