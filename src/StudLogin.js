import { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from 'axios';
//import Student from "./Student";
//import Home from "./Home";

const StudLogin = () => {
    const [Email,setEmail]=useState('');
    const [Password,setPass]=useState('');
    //const [LoginStatus,setLoginStatus]=useState("");

    // const [Studid,setStudid]=useState(1);
    const history=useHistory();
    
    const handleLogin=()=>
    {
        //console.log("Check with database query if the username password matches with Librarian Registartion database ")
        
        Axios.post("http://localhost:3001/handleLogin",{Email:Email,Password:Password
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
            setTimeout(function () {
                history.push('/');

            }, 100)

        }
      })
        
      //history.push('/');
    }
    //const goHome=()=>{
      //  history.push('/');
    //}
   

    return ( 
        
        <div className="create">
        {/*<label>Stuid:</label>
        <input type="Integer" value={Studid} required onChange={(e)=>setStudid(e.target.value)}/>
        */}
        <label>Email:</label>
        <input type="Email"  value={Email} required onInput={(e)=>setEmail(e.target.value)}></input>
        
        <br></br>

        <label>Password:</label>
        <input type="password"  value={Password} required onInput={(e)=>setPass(e.target.value)}></input>
        
        <br></br>

        <button onClick={()=>handleLogin()}>Login</button>
        <br></br>
        {/*<button onClick={()=>goHome()}>Home</button>*/}
        {/*<h1>{LoginStatus}</h1>*/}
        </div>

     );
}
 
export default StudLogin;