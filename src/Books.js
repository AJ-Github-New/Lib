import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";
import "./index.css";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[{ Header : 'Bookid',
          accessor:'Bookid'
          },  
            { Header : 'Title',
              accessor:'Title'
            },
            { Header :'Author' ,
              accessor:'Author'
            },
            { Header : 'College',
              accessor:'College'
            },
            {
              Header : 'Department',
              accessor: 'Department'
            } ,
            { 
              Header :'Year',
              accessor: 'Year'
            },
            { 
              Header :'Copies',
              accessor:'Copies'
            },
            {
              Header :'CurrentCopies',
              accessor: 'CurrentCopies'
            }

          ]}
          defaultPageSize={20}
          style={{
            height: "400px" // This will force the table body to overflow and scroll, since there is not enough room
          }}
          className="-striped -highlight"
        />
        <br />
        <Tips />
        <Logo />
      </div>
    );
  }
}