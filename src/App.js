// import logo from './logo.svg';
import './App.css';
import About from './components/About';
// import Greet from './components/Greet'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }




  const togglemode = () => {
    if (mode === "dark") {
      setmode("light")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      showAlert("light mode is enabled", "success")

    }
    else {
      setmode("dark")
      document.body.style.backgroundColor = "#343a40"
      document.body.style.color = "white"
      showAlert("dark mode is enabled", "success")

    }

  }
  return (
    <>
    
 <Router>
 <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggle={togglemode} />
      <Alert alert={alert} />
     
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<TextForm heading="Enter the text to Enalyze" showalert={showAlert} mode={mode}/>} />
        
      </Routes>
 </Router>

      {/* <Greet></Greet> */}
    </>
  );
}



export default App;
