import React, { useRef } from "react"
import { useUserAuth } from "../context/AuthContext"
import { useNavigate, Link } from "react-router-dom";
import "./styles.css"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()
  const { login } = useUserAuth()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      await login(emailRef.current.value, passwordRef.current.value)
      navigate("/")
    } catch(err) {
      console.log(err);
    }
  }

  return (

    <section className="container">
      <div className="login_box">
        <form onSubmit={handleSubmit}>
          <img
            src="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_1280.png"
            width="100px"
            alt="user icon"
          />
          <h2>Member login</h2>
          <input
          className="inputBox"
            type="email"
            placeholder="Enter your email address"
            required
            ref={emailRef}
          />

          <input
          className="inputBox"
            type="password"
            placeholder="Password"
            ref={passwordRef}
            required
          />

          <button className="btn" type="submit" >
            Login
          </button>

          <div style={{padding:4,marginTop:3,textAlign:"center"}} >
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>

        </form>
      </div>
    </section>

  )
}
