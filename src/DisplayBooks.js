import React, { Component } from 'react';
import axios from 'axios';
import LibDashboard from './LibDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';  


class DisplayBooks extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: []
    }
  }

  componentDidMount() {
   
    axios.get("http://localhost:3001/displayBooks")
      .then(response => {
        console.log(response);
        if(response.data==="NoBook")
        {
          alert("There is no such book");
        }
        else
        {
        this.setState({
          todos: response.data
        });
        }
      })
  }

  render() {
    const { todos = [] } = this.state;
    return (
      <div>
      <LibDashboard/>

      <div>
        <header className="App-header">

          <table className="table">

            <thead>
              <tr>
                        <th>Book id</th>
                       <th>Title</th>
                       <th>Author</th> 
                       <th>College</th> 
                       <th>Department</th> 
                        <th>Year</th>
                        <th>Copies</th>
                        <th>CurrentCopies</th>
              </tr>
            </thead>
            <tbody>
            {todos.length ? 
              todos.map(item => (
                <tr>
                  <td>{item.Bookid}</td>
                       <td>{item.Title}</td>
                       <td>{item.Author}</td> 
                       <td>{item.College}</td> 
                       <td>{item.Department}</td> 
                        <td>{item.Year}</td>
                        <td>{item.Copies}</td>
                        <td>{item.CurrentCopies}</td>
                </tr>
              ))
              : 
              (<tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>)
            }
            </tbody>
          </table>

        </header>
      </div>
      </div>  
    );
  }
}

export default DisplayBooks;