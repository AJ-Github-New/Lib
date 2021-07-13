import { useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from 'axios';
//import { useAlert } from 'react-alert'
import 'react-phone-number-input/style.css'
import PhoneInput, {  isValidPhoneNumber } from 'react-phone-number-input'
const LibRegistration = () => {
    const [Username,setName]=useState('');
    const [Password,setPass]=useState('');
    const [Email,setEmail]=useState('');
    const [College,setCollege]=useState('');
    const [Mobile,setMobile]=useState('');

    const history=useHistory();

    const handleRegistration=()=>
    {
        //console.log("Check with database query if this student exists ");
        Axios.post("http://localhost:3001/handleLibRegistration",{Username:Username,Password:Password,Email:Email,College:College,Mobile:Mobile
      }).then((response)=>
      {
        console.log(response);
        if(response===false)
        {
          alert("No such Librarian exists as per the details provided by your college,kindly input correct details ");
        }

        //setStudid(response.data[0].Studid);

        
        
        else
        {      
          alert("Your one time password has been sent to your mail"); 
           
        history.push({
            pathname: '/LibLogin',
            state: { Username,College}
          })
        }  
        




       // alert("Your student Id is"+Studid+"kindly use while logging in")


     // }).then(()=>

      //{
      })
    }

    return ( 

        <div className="create">
        <label>Username:</label>
        <input type="text"  value={Username} required onInput={(e)=>setName(e.target.value)}></input>
         <br></br>   
        <label>Password:</label>
        <input type="password"  value={Password} required onInput={(e)=>setPass(e.target.value)}></input>
        <br></br>
        <label>Email:</label>
        <input type="email"  value={Email} required onInput={(e)=>setEmail(e.target.value)}></input>
        <br></br>
        <label>College:</label>
        <select required value={College} onChange={(e)=>setCollege(e.target.value)}>
        <option value="Sinhgad">Sinhgad</option>
        <option value="WIT">WIT</option>
        <option value="Orchid">Orchid</option>
        </select>
        <br></br>
        <label>Mobile No.:</label> 

        <PhoneInput
        //placeholder="Enter mobile number"
        defaultCountry="IN"
        initialValueFormat="national"

        value={Mobile}
        onChange={setMobile}
        error={Mobile ? (isValidPhoneNumber(Mobile) ? undefined : 'Invalid phone number') : 'Phone number required'}/>
        <br></br>
        <button onClick={()=>handleRegistration()}>Registration</button>
        </div>

     );
}
 
export default LibRegistration;