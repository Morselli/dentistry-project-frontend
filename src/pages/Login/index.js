import React from "react"
import "./styles.css"

export default function Login() {
  return (
    <div className="login-container">
      <div className="form-container">
        <form>
          <h1>Dentistry Project</h1>
          <input
            type="email"
            placeholder="E-mail"
         /> 
          <input
            type="password"
            placeholder="Senha"
         />

         <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}