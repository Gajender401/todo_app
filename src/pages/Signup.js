import React, { useRef } from "react"
import { useUserAuth } from "../context/AuthContext"
import { useNavigate, Link } from "react-router-dom";

import "./styles.css"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const confPasswordRef = useRef()
  const navigate = useNavigate()
  const { signup } = useUserAuth()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value===confPasswordRef.current.value) {
      try {
        await signup(emailRef.current.value, passwordRef.current.value)
        navigate("/")
      } catch(err) {
        console.log(err);
      }

    }else{
      alert("please reconfirm you password")
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
          <h2>Register</h2>
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

          <input
            type="password"
            className="inputBox"
            placeholder="Confirm Password"
            ref={confPasswordRef}
            required
          />

          <button className="btn" type="submit" >
            Sign Up
          </button>

          <div style={{padding:4,marginTop:3,textAlign:"center"}} >
            Already have an account? <Link to="/login">Log In</Link>
          </div>
        </form>
      </div>
    </section>

  )
}
