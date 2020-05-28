import React ,{useState} from 'react'

export default function Register() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    return (
        <div className="container">
            <h3>Register</h3>
            <div class="row">
      <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input  id="first_name" type="text" class="validate"  value={firstname} onChange={(e)=>{setfirstname(e.target.value)}}  />
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate"  value={lastname} onChange={(e)=>{setlastname(e.target.value)}} />
          <label for="last_name">Last Name</label>
        </div>
      </div>
      
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate" value={password} onChange={(e)=>{setpassword(e.target.value)}} />
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate"  value={email} onChange={(e)=>{setemail(e.target.value)}} />
          <label for="email">Email</label>
        </div>
      </div>
      
    </form>
  </div>
        
        </div>
    )
}
