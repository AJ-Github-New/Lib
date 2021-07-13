import { useState } from "react";
import Axios from 'axios';
import LibDashboard from "./LibDashboard";
const DeleteBooks = () => {
    const [Bookid,setBookid]=useState('');
    const handleDelbooks=()=>
    {
        Axios.post("http://localhost:3001/handleDelete",{Bookid:Bookid
    }).then((response)=>{
            if (response.data==="Deleted")
            {
                alert("Book is deleted");
            }
            else if (response.data==="Not Deleted")
            {
                alert("There is no such book with the given Book id ")
            }

    })

    }
    return ( 
    
    <div className="delete">
        <LibDashboard/>
        <div className="create">
        <label>Bookid:</label>
        <input type="text"  value={Bookid} required onInput={(e)=>setBookid(e.target.value)}></input>
         <br></br> 

         <button onClick={()=>handleDelbooks()}>Delete Book</button>


        </div>
    </div> );
}
 
export default DeleteBooks;