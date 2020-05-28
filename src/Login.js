import React ,{useState} from 'react'

export default function Login() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    return (
        <div className="container">
            <h3>Register</h3>
            <div class="row">
      <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate" value={email} onChange={(e)=>{setemail(e.target.value)}} />
          <label for="email">Email</label>
        </div>
      </div>
      
      
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
          <label for="password">Password</label>
        </div>
      </div>
      
    </form>
  </div>
        
        </div>
    )
}
