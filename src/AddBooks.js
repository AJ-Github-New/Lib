import LibDashboard from "./LibDashboard";
import { useState } from "react";
//import { useHistory } from "react-router-dom";
import Axios from 'axios';
//import { response } from "express";
const AddBooks = () => {

    const [Bookid,setBookid]=useState('');
    const [Title,setTitle]=useState('');
    const [Author,setAuthor]=useState('');
    const [Department,setDepartment]=useState('CSE');
    const [College,setCollege ]= useState('Sinhgad');

    const [Year,setYear]=useState('FE');
    const [Copies,setCopies]=useState('');
    const [CurrentCopies,setCurrentCopies]=useState('');
    //const [errorMessage,seterrorMessage]=useState('');

    //const history=useHistory();

    const handleAddbooks=()=>
    {
        setCurrentCopies(Copies);
        // console.log("Check with college student database query if this student exists and if so add the states to the database");
        Axios.post("http://localhost:3001/handleBooks",{Bookid:Bookid,Title:Title,Author:Author,College:College,Department:Department,Year:Year,Copies:Copies,CurrentCopies:CurrentCopies
      }).then((response)=>
      {
           
        
        
        if(response.data==="Allow")
        {
            alert("Book added");
                //history.push('/');
        }
        else if(response.data==="duplicate")
        {
            
                alert("Duplicate bookid not allowed");


        }
      

    }).catch(function (error) {     if (error.response) {       console.log(error.response.data);     }   })

   }      
    return ( 

        <div>
                <LibDashboard/>

        
        <div className="create">
        <label>Bookid:</label>
        <input type="text"  value={Bookid} required onInput={(e)=>setBookid(e.target.value)}></input>
         <br></br>   
        <label>Title:</label>
        <input type="text"  value={Title} required onInput={(e)=>setTitle(e.target.value)}></input>
        <br></br>
        <label>Author:</label>
        <input type="text"  value={Author} required onInput={(e)=>setAuthor(e.target.value)}></input>
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
        <label>Copies:</label>
        <input type="text"  value={Copies} required onInput={(e)=>setCopies(e.target.value)}></input>
         <br></br>   
        

        
        <button onClick={()=>handleAddbooks()}>Add Book</button>
        </div>
        </div>

     );
}
 
export default AddBooks;