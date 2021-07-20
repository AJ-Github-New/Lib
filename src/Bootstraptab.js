import React, { Component } from 'react'  
import LibDashboard from './LibDashboard';

import BootstrapTable from 'react-bootstrap-table-next';  
import 'bootstrap/dist/css/bootstrap.min.css';  
import filterFactory , { textFilter } 
from 'react-bootstrap-table2-filter';  
import paginationFactory from 'react-bootstrap-table2-paginator';  


import axios from 'axios';  

export class Bootstraptab extends Component {  

        state = {  

                book:[],
                columns: [{  

                  dataField: 'Bookid',  

                  text: 'Bookid'  

                },  

                {  

                  dataField: 'Title',  

                  text: 'Title',  

                 sort:true  ,
                 filter: textFilter()  


                }, {  

                  dataField: 'Author',  

                  text: 'Author',  

                  sort: true  ,
                   filter: textFilter()  

                },  

                {  

                        dataField: 'College',  

                        text: 'College',  

                        sort: true  ,
                                        filter: textFilter()  

                      },  

                      {  

                        dataField: 'Department',  

                        text: 'Department',  

                        sort: true  ,

                                        filter: textFilter()  


                      },  

                      {  

                        dataField: 'Year',  

                        text: 'Year',  

                        sort: true  ,
                                        filter: textFilter()  


                      },  

                      {  

                        dataField: 'Copies',  

                        text: 'Copies',  

                        sort: true  

                      },  

                      {  

                        dataField: 'CurrentCopies',  

                        text: 'CurrentCopies',  

                        sort: true  

                      }]  

              }  

              componentDidMount() {    

                axios.get('http://localhost:3001/displayBooks').then(response => {    

                  console.log(response.data);    

                  this.setState({    

                        book: response.data    

                  });    

                });    

              }   

              render() {  

                               const options = {  
               
                                       page: 2,   
                                       sizePerPageList: [ {  
               
                                         text: '5', value: 5  
               
                                       }, {  
               
                                         text: '10', value: 10  
               
                                       }, {  
               
                                         text: 'All', value: this.state.book.length  
               
                                       } ],   
               
                                       sizePerPage: 5,   
               
                                       pageStartIndex: 0,   
               
                                       paginationSize: 3,    
               
                                       prePage: 'Prev',   
               
                                       nextPage: 'Next',   
               
                                       firstPage: 'First',   
               
                                       lastPage: 'Last',   
               
                                       paginationPosition: 'top'    

               
                                     };  
               
                               return (  
               
                                       <div className="container">  
                                                     <LibDashboard/>
 
               
                                       <div class="row" className="hdr">    
               
                                       {/*<div class="col-sm-12 btn btn-info" >    
               
                                        Table of Books
                                        </div>  */}    
               
                                         </div>  
               
                                       <div  >  
               
                                       <BootstrapTable   
               
                                       striped  
               
                                       hover  
               
                                       keyField='Bookid'

                                       data={ this.state.book }   
               
                                       columns={ this.state.columns }  
                                        filter={ filterFactory() }   

                                    pagination={ paginationFactory(options) } 
                ></BootstrapTable> 
               
                                     </div>  
               
                                     </div>  
               
                               )  
               
                       }  
               
               }  
               
                 
               
               export default Bootstraptab 
               
               
               
               