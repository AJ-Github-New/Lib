const express = require('express');
const { sendEmail } = require('./mail');
const bodyParser = require('body-parser');
const { createConnection } = require('mysql');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app=express();
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors());
let Pass="";
const connection =createConnection({
    user:"root",
    host:"127.0.0.1",
    password:"password",
    database:"Studentdb",
    port:3306,
});

connection.connect((err)=>{
  if(err)
  {
    throw err;
  } 
  else
  {
    console.log("Connected");
  }
  
})

app.get("/",(req,res)=>
{
    res.send("Hello World");
});




app.post("/handleRegistration",(req,res)=>
{
    const Username = req.body.Username;
    const Rollno = req.body.Rollno;
    //const College = req.body.College;
    const Email = req.body.Email;
    const College = req.body.College;
    const Department = req.body.Department;
    const Year = req.body.Year;
    const Mobile = req.body.Mobile;
    let StudentExists=false;
    Pass=sendEmail(Email,Username, "Password");

    connection.query("SELECT * from StudExists where College =? AND Email = ? AND Studname= ? AND Rollno=? AND Department=? AND Year=? AND Mobile=?",[College,Email,Username,Rollno,Department,Year,Mobile],(err,result)=>{
      if(err)
      {
        res.send(err);
      }
      if(result.length>0)
      {
        StudentExists=true;
        res.send(result);
      }
      else
      {
        res.send(StudentExists);
      }
      
    })
    
  //console.log("Value"+Pass);
    if (StudentExists==true)
    {
    connection.query("INSERT INTO Register (Username,Rollno,Password,Email,College,Department,Year,Mobile) VALUES (?,?,?,?,?,?,?,?)",[Username,Rollno,Pass,Email,College,Department,Year,Mobile],(err,result)=>{
      console.log("db error",err);
      //if(result.length>0)
      //{
      res.send(result);
      
      //}
    })
  }

    

});


//app.post("/getStudid",(req,res)=>

//{
 // const Email = req.body.Email;

  //connection.query("SELECT Studid from Register where Email=?",[Email],(err,result)=>{

    //res.send(result);
  //})
//});


app.post("/handleLibRegistration",(req,res)=>
{
    const Username = req.body.Username;
    const Rollno = req.body.Rollno;
   // const Password = req.body.Password;
    const Email = req.body.Email;
    const College = req.body.College;
    //const Department = req.body.Department;
    //const Year = req.body.Year;
    const Mobile = req.body.Mobile;
    let LibrarianExists=false;
    Passw=sendEmail(Email,Username, "Password");

    connection.query("SELECT * from LibrarianExists where Email = ? AND Username= ? AND Password=? AND College=? AND Mobile=?",[Email,Username,Passw,College,Mobile],(err,result)=>{
      if(err)
      {
        console.log(err);
      }
      if(result.length>0)
      {
        LibrarianExists=true;
        console.log(result);
      
      }
      else
      {
        res.send(LibrarianExists);
        console.log(result);
      }
      
    })
    
  //console.log("Value"+Pass);
    if (LibrarianExists==true)
    {
    connection.query("INSERT INTO Librarian (Username,Password,Email,College,Mobile) VALUES (?,?,?,?,?)",[Username,Passw,Email,College,Mobile],(err,result)=>{
      console.log("db error",err);
      //if(result.length>0)
      //{
      res.send(result);
      //}
    })
  }

    

});

app.post("/handleLibLogin",(req,res)=>
{
    const Email = req.body.Email;
    const Password = req.body.Password;
    //console.log("Password"+globalPass);
    connection.query("SELECT * from Librarian where Email = ? AND Password= ?",[Email,Password],(err,result)=>{
      if(err)
      {
        res.send(err);
      }
      if(result.length>0)
      {
      res.send(result);
      console.log(result);
      
      }
      else{
        res.send({message :"Wrong username / password combination"});
      }
    })
});


app.post("/handleLogin",(req,res)=>
{
    const Email = req.body.Email;
    const Password = req.body.Password;
    //console.log("Password"+globalPass);
    connection.query("SELECT * from Register where Email = ? AND Password= ?",[Email,Password],(err,result)=>{
      if(err)
      {
        res.send({err:err});
      }
      if(result.length>0)
      {
      res.send("Login successful");
      console.log(result);
      
      }
      else{
        res.send({message :"Wrong username / password combination"});
      }
    })
});


app.post("/handleBooks",(req,res)=>
{
    const Bookid = req.body.Bookid;
    const Title = req.body.Title;
    const Author = req.body.Author;
    const College = req.body.College;

    const Department = req.body.Department;
    const Year = req.body.Year;
    const Copies=req.body.Copies;
    const added=false;
    const CurrentCopies=req.body.Copies;
    connection.query("INSERT INTO Books (Bookid,Title,Author,College,Department,Year,Copies,CurrentCopies) VALUES (?,?,?,?,?,?,?,?)",[Bookid,Title,Author,College,Department,Year,Copies,CurrentCopies],(err,result)=>{
      
      //if(result.length>0)
      //{
      if(err)
      

        res.send("duplicate");
      
      else     
      

      res.send("Allow");
      
    })
    
  //console.log("Value"+Pass);
    
  
    

});


app.post("/handleDelete",(req,res)=>
{
    const Bookid = req.body.Bookid;
    
    //Insert into Trash the row where Bookid is the inputed Bookid if any student has Book of this id and then delete after 24 hours
    //If no student has the book delete it.

    connection.query("Delete from Books where Bookid=?",[Bookid],(err,result)=>{
      
      //if(result.length>0)
      //{
      
        console.log(result.affectedRows);
      
      //
      //{   
      
        //connection.query("INSERT INTO Trash (Bookid,Title,Author,College,Department,Year,Copies,CurrentCopies) VALUES (?,?,?,?,?,?,?,?)",[Bookid,Title,Author,College,Department,Year,Copies,CurrentCopies],(err,result)=>{
      //}
      if(result.affectedRows>0)
      {
        res.send("Deleted");
        
      }
      else if(result.affectedRows==0){
        res.send("Not Deleted");

      }
      
    })
    
  //console.log("Value"+Pass);
    
  
    

});



app.get("/displayBooks",(req,res)=>
{
    
    //Insert into Trash the row where Bookid is the inputed Bookid if any student has Book of this id and then delete after 24 hours
    //If no student has the book delete it.

    connection.query("Select * from Books",(err,result)=>{
      
      //if(result.length>0)
      //{
     // if(err)
      

       // res.send(err);
      if(result.length>0)
      {
        res.send(result);
        console.log(result);

      }
      else  
      {   
        
        res.send("NoBook");
        //connection.query("INSERT INTO Trash (Bookid,Title,Author,College,Department,Year,Copies,CurrentCopies) VALUES (?,?,?,?,?,?,?,?)",[Bookid,Title,Author,College,Department,Year,Copies,CurrentCopies],(err,result)=>{
      }
      
    })
    
  //console.log("Value"+Pass);
    
  
    

});



app.post("/UpdateBooks",(req,res)=>
{
    const Bookid = req.body.Bookid;
    
    const Copies=req.body.Copies;
    const CurrentCopies=req.body.Copies;

    var sql = "UPDATE Books SET Bookid=?,Copies=?,CurrentCopies=?  where Bookid=?";
 

    connection.query(sql,[Bookid,Copies,CurrentCopies,Bookid],(err,result)=>{
      
      //if(result.length>0)
      console.log(result);
        if(result.affectedRows>0)
        {
          res.send("Updated");
          
        }
        else if(result.affectedRows==0){
          res.send("Update failed");
  
        }
        if(err){
          res.send("Update failed");
                }
      })
    
  //console.log("Value"+Pass);
    
  
    

});


app.listen(3001,()=>{
    console.log("Running server on 3001");
})