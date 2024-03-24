import { useState } from "react";


export default function Home() {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const registerNewUser = async (event) => {
    event.preventDefault()

    const newUser = {
      username,
      email,
      password,
    }

    const res = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })

    const data = await res.json();


    console.log('Response =>', res);
    console.log("response data =>", data);

    if (res.status === 201) {
      setUsername('')
      setEmail('')
      setPassword('')
    }
  }

  return (

    <div>
      <div className="main-w3layouts wrapper">
        <h1>Creative SignUp Form</h1>
        <div className="main-agileinfo">
          <div className="agileits-top">
            <form action="#" method="post">
              <input className="text" value={username} onChange={(event) => setUsername(event.target.value)} type="text" name="Username" placeholder="Username" />
              <input className="text email" value={email} onChange={(event) => setEmail(event.target.value)} type="email" name="email" placeholder="Email" />
              <input className="text" value={password} onChange={(event) => setPassword(event.target.value)} type="password" name="password" placeholder="Password" />
              <button type="submit" onClick={registerNewUser}>Register</button>
            </form>
          </div>

          <ul className="colorlib-bubbles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  )


}
