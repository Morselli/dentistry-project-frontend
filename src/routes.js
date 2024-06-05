import React from "react"
import { BrowserRouter, Route, Routes} from "react-router-dom"

import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}