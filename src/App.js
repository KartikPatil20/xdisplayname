import React,{useState} from 'react'
import './App.css';

function App() {

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [fullname, setFullname] = useState("");


  return (
    <div className='App'>
      <h1>Full Name Display</h1>
      <form onSubmit={(e)=>{
        e.preventDefault();
        if(fname === " " || fname === "" || lname === " " || lname === ""){
          setFullname("");
        }else{
          setFullname(`${fname} ${lname}`);
        }
        
      }}>
      <div>
      <label>First Name:</label>
      <input type="text" value={fname} onChange={(e)=>setFname(e.target.value)}></input>
      </div>
      <div>
      <label>Last Name:</label>
      <input type="text" value={lname} onChange={(e)=>setLname(e.target.value)}></input>
      </div>
      <button type="submit" >Submit</button>
      </form>
      {fullname && <h2>Full Name: {fullname}</h2>}
    </div>
  );
}

export default App;
