import Navbar from "./Navbar"


const Home = () => {

  return (
    <div className="Home">
      
      <Navbar/>
      <div className="content">
      <div className = "leftbox">
                <h3>Rules for Librarian:</h3>
                <ul className="listElements">
                <li>Once the Student returns the book , the librarian has to make required entries such as submitted,current copies,etc</li>
                <li>Before deleting the book librarian must search if the book was previously with some student</li>
                <li>Librarian must follow up with the students if he/she has the book for more than 15 days even though a warning is automatically sent</li>
                </ul>
            </div> 
              
            <div className= "rightbox">
                
                <h3>Rules for Student:</h3>
                <ul className="listElements">
                <li>Student cannot have more than two books at a time,a book will be given only when one of the book is returned.</li>
                <li>Student will have to pay Rs.5 per day if he/she has the book for more than 15 days , warning emails will be sent accordingly</li>
                <li>Student can search for a book in the system , and if the book is available , he/she can request the book physically from the Librarian</li>

                </ul>
            </div>

      </div>

    </div>
    
  );
}
 
export default Home;





   
