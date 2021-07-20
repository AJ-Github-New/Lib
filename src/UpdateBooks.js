import LibDashboard from "./LibDashboard";
import { useState } from "react";
//import { useHistory } from "react-router-dom";
import Axios from 'axios';
//import { response } from "express";
const UpdateBooks = () => {
   

    const [Bookid,setBookid]=useState('');       
    
    const [Copies,setCopies]=useState('');
    const [CurrentCopies,setCurrentCopies]=useState('');

 

    const handleUpdatebooks=()=>
    {
        setCurrentCopies(Copies);
        if(Bookid==='') 
        {
            alert("Input an existing bookid of the book and it's copies you want to update");
        }
        else{
        // console.log("Check with college student database query if this student exists and if so add the states to the database");
        Axios.post("http://localhost:3001/UpdateBooks",{Bookid:Bookid,Copies:Copies,CurrentCopies:CurrentCopies
      }).then((response)=>
      {
           
        
        
        if(response.data==="Updated")
        {
            alert("Book updated");
        }
        else if(response.data==="Update failed")
        {
            alert("Update failed 1.Check if bookid exists 2.Check if Copies have been inputed");
        }
        
      

    }).catch(function (error) {     if (error.response) {       console.log(error.response.data);     }   })
    }
   }      
    return ( 

        <div>
                <LibDashboard/>

        
        <div className="create">
        <label>Bookid:</label>
        <input type="text"  value={Bookid} required onInput={(e)=>setBookid(e.target.value)}></input>
         <br></br>   
        

        
        <label>Copies:</label>
        <input type="text"  value={Copies} required onInput={(e)=>setCopies(e.target.value)}></input>
         <br></br>   
        

        
        <button onClick={()=>handleUpdatebooks()}>Update Book</button>
        </div>
        </div>

     );
}
 

 
export default UpdateBooks;