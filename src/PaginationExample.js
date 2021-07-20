import React, { PureComponent } from 'react'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
    

export class PaginationExample extends PureComponent {

    constructor(props) {
        super(props)
    
        this.state = {
            offset: 0,
            tableData: [],
            orgtableData: [],
            perPage: 10,
            currentPage: 0
        }

        this.handlePageClick = this.handlePageClick.bind(this);

    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.loadMoreData()
        });

    };

    loadMoreData() {
		const data = this.state.orgtableData;
		
		const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
		this.setState({
			pageCount: Math.ceil(data.length / this.state.perPage),
			tableData:slice
		})
	
    }

   componentDidMount(){
        this.getData();
    }
    getData() {
        axios
            .get("http://localhost:3001/displayBooks")
            .then(res => {
                var tdata = res.data;
                console.log('data-->'+JSON.stringify(tdata))
				 var slice = tdata.slice(this.state.offset, this.state.offset + this.state.perPage)
                this.setState({
                    pageCount: Math.ceil(tdata.length / this.state.perPage),
                    orgtableData : tdata,
                    tableData:slice
                })
            });
    }


    render() {
        return (
            <div>
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

  {this.state.tableData.map(item => (
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
}
</tbody>
</table> 

                 <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </div>
        )
    }
}

export default PaginationExample
