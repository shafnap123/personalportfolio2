// import './Login.css'
// export function Login(){
//     return(
//       <div className="loginmaindiv">

//        <input className="logindivmaininput" type="text" placeholder="text your email"/><br/>
//         <input className="logindivmaininput" type="text" placeholder="text your Paaword"></input>

//       </div>  
//     )
// }
import axios from 'axios';
import { Button } from '../button/Button';
import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const [email, setemail] = useState('')
  const [Password, setpassword] = useState('')
  console.log(Password)
  const navigate = useNavigate();

  const loginnedvalues = () => {
    axios.post("http://localhost:5000/userlogin", { email:email, Password:Password })
      .then((res) => {
        console.log(res.data,'///////')
        if (res.data.status == true) {
          const data = res.data
          console.log(data)
          localStorage.setItem('adminId',data._id)
          navigate("/");
        }
        else {
          alert('err')
        }
      })
      .catch((err) => {
        console.log(err,'errrrrrrrrrrrrrrrrrrrrrrrr')
        alert("somthing went wrong with login")
      })
  }
  return (


    <div className="loginmaindiv">
      <h1>login</h1><br />
      <input
        className="logindivmaininput"
        type="text"
        placeholder="Enter your email"
        onChange={(e) => setemail(e.target.value)}
      />
      <br />
      <input
        className="logindivmaininput"
        type="password"
        placeholder="Enter your password"
        onChange={(e) => setpassword(e.target.value)}

      />
      <Button text="Login" onClick={loginnedvalues} />
    </div>

  );
}
