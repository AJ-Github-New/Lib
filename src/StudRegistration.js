import { useState } from "react";
import { useHistory } from "react-router-dom";
//import StudLogin from "./StudLogin";
import Axios from 'axios';
//import { useAlert } from 'react-alert'
import 'react-phone-number-input/style.css'
import PhoneInput, {  isValidPhoneNumber } from 'react-phone-number-input'
const StudRegistration = () => {
   // var count=1;
   //const [Studid,setStudid]=useState(0);

    const [Username,setName]=useState('');
    //const [Password,setPass]=useState('');
    const [Email,setEmail]=useState('');
    const [College,setCollege]=useState('Sinhgad');
    const [Department,setDepartment]=useState('CSE');
    const [Rollno , setRollno]=useState();
    const [Year,setYear]=useState('FE');
    const [Mobile,setMobile]=useState('');
    const history=useHistory();
    //const alert=useAlert();
    


    //const handleID=()=>
   // {
      //  console.log("get count of rows from database");
        //setStudid(++count);
   // }
    const handleRegistration=()=>
    {
       // console.log("Check with college student database query if this student exists and if so add the states to the database");
        Axios.post("http://localhost:3001/handleRegistration",{Username:Username,Rollno:Rollno,Email:Email,College:College,Department:Department,Year:Year,Mobile:Mobile
      }).then((response)=>
      {
        console.log(response);
        if(response.StudentExists===false)
        {
          alert("No such student exists as per the details provided by your college,kindly input correct details ");
        }

        //setStudid(response.data[0].Studid);

        
        
        if(response.StudentExists===true)
        {      
          alert("Your one time password has been sent to your mail"); 

        history.push('/StudLogin');
        }  
        




       // alert("Your student Id is"+Studid+"kindly use while logging in")


     // }).then(()=>

      //{
      })

      //Axios.post("http://localhost:3001/getStudid",{Email:Email
      //}).then((response)=>
      //{
        //setStudid(response.data[0].Studid);
        //console.log(Studid);

      //}) 
      //  setStudid(++count);
       // console.log("Count"+count +"Studid",Studid);
       // console.log("College"+College);

   }
   
   
    return (  

      <div className="create">
      {/* <label>Student id:</label>    
       <input type="Integer" value={Studid} readOnly />
      */} 
        <label>Username:</label>
        <input required type="text"  value={Username}  onInput={(e)=>setName(e.target.value)}></input>

        <br></br>

       {/* <label>Password:</label>
        <input required type="password"  value={Password}  onInput={(e)=>setPass(e.target.value)}></input>
        */}
        <br></br>

        <label>Email:</label>
        <input required type="email"  value={Email}  onInput={(e)=>setEmail(e.target.value)}></input>

        <br></br>

        <label>College:</label>
        <select required value={College} onChange={(e)=>setCollege(e.target.value)}>
        <option value="Sinhgad">Sinhgad</option>
        <option value="WIT">WIT</option>
        <option value="Orchid">Orchid</option>
        </select>

        <br></br>

        <label>Department:</label> 
        <select required value={Department} onChange={(e)=>setDepartment(e.target.value)}>
        <option value="CSE">CSE</option>
        <option value="ENTC">ENTC</option>
        <option value="Electrical">Electrical</option>
        <option value="IT">IT</option>
        <option value="Mechanical">Mechanical</option>

        </select>

        <br></br>

        <label>Year:</label> 
        <select required value={Year} onChange={(e)=>setYear(e.target.value)}>
        <option value="FE">FE</option>
        <option value="SE">SE</option>
        <option value="TE">TE</option>
        <option value="BE">BE</option>
        </select>

        <br></br>

        <label>Roll No.:</label> 
        <input   type="Integer" value={Rollno} required onInput={(e)=>setRollno(e.target.value)}></input>

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
 
export default StudRegistration;