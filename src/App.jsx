import { Routes, Route } from "react-router-dom";
import Login from './components/auth/login'
import SignUp from './components/auth/signup'
import Landing from "./components/landingPage/landing";
import './App.css'

function App() {


  return (
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}

export default App
