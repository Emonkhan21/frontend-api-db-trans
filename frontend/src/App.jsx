
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
function App() {
const [users,setUsers] = useState([])

const [firstname, setfirstname] = useState ('');
const [lastname, setlastname] = useState ('');
const [email, setemail] = useState ('');
const [password, setpassword] = useState ('');

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then(data => setUsers(data.data))
  }, [users])

console.log(users);


const handleSubmit =() =>{
  axios.post('http://localhost:3000/users',{
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password

  })
}


  return (
    <>

<div>

<input onChange={(e) => setfirstname(e.target.value)} type="text" placeholder='firstname' /> <br />
<input onChange={(e) => setlastname(e.target.value)}type="text" placeholder='lastname' /> <br />
<input onChange={(e) => setemail(e.target.value)}type="text" placeholder='email' /> <br />
<input onChange={(e) => setpassword(e.target.value)}type="text" placeholder='password' /> <br />

<button onClick={handleSubmit}>Submit</button>


</div>

{
  users.map((item)=>(
    <ul>
      <li>{item.firstname} {item.lastname} {item.email}</li>
    </ul>
  ))
}
    </>
  )
}

export default App




