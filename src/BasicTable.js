import React, { useEffect ,useState,useMemo} from "react"
import { useTable } from 'react-table'

   import {COLUMNS} from './Columns' 
import axios from "axios"
import LibDashboard from "./LibDashboard"
import './table.css'
const BasicTable = () => {

    const [data,setData]=useState();
    const columns=useMemo(()=>COLUMNS,[])
    useEffect(() => {

        axios.get("http://localhost:3001/displayBooks")
      .then(response => {
        console.log(response);
        if(response.data==="NoBook")
        {
          alert("There is no such book");
        }
        else
        {
        
          response.json();
        }
      }).then((json)=>setData(json))
      },[data]);
     
    
    const tableInstance=useTable({

        columns,
        data:data
    })
   
   const {
       getTableProps,
       getTableBodyProps,
       headerGroups,
       rows,
       prepareRow
    } =tableInstance

    return ( 
        <div>
      <LibDashboard/>

      
        <table {...getTableProps()}>

        <thead >
            {
                headerGroups.map(headerGroup=>(
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                            headerGroup.headers.map(column=>(
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th> 
                            ))
                        }
                        
                     </tr>

                ))
            }
            
        </thead>
    
            <tbody  {...getTableBodyProps()}>
                {
                    rows.map(row=>{
                        prepareRow(row)
                        return(
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map(cell=>{
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })
                                }
               
                            </tr>
                        )
                    })
                }
                
            </tbody>
        </table>
        </div>
     );
}
 
export default BasicTable;