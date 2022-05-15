import './index.css';
import './App.css';
import { useState } from 'react';

function App() {
  const[users,setUsers]=useState([]);
  const[hasError,setHasError]=useState(false);


  const  loadusers=()=>{
    fetch("https://reqres.in/api/users?page=1")
    
    .then((response)=> response.json())
    .then((result)=> setUsers(result.data))
    .catch(err=>setHasError(true))
   alert("Welcome To my Gym folks");

  
    
    
     

}
 return (
    <>
 <header>

<a href="#" className="logo"><span>Tindog</span>Peeps</a>
    <center><h1 class="new">LGM-TASK2</h1></center>
     <button className="btn" onClick={loadusers}>GET USER DATA</button>


</header>
<br></br>
   <br></br>
   <br></br>
   <br></br>
    <br></br>
    <br></br>
   <br></br>
    <br></br>
    <br></br>
   <br></br>
    <br></br>

    <h2>Click on The button above</h2>

  {users.map(user => (
  <center>
<table classname="table"  cellPadding="20" cellSpacing="20" key={user.id}>
  
  {/* <tr>
  <th>ID</th>
  <th>First Name</th>
  <th>Last Name</th>
  <th>Email</th>
  <th>Images</th>

  </tr> */}
  <tr>
    
  <td><img src={user.avatar}></img></td>
  <td>ID:<br/>{user.id}</td>
  <td>FIRST_NAME:<br/>{user.first_name}</td>
  <td>LAST_NAME:<br/>{user.last_name}</td>
  <td>EMAIL:<br/>{user.email}</td>
  

  </tr>
    </table>
    </center>
 ))}

 </>
  );
}


export default App;