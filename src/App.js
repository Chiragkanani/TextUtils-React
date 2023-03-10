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


const removebodyclass = ()=>{
  document.body.classList.remove("bg-light")
  document.body.classList.remove("bg-success")
  document.body.classList.remove("bg-dark")
  document.body.classList.remove("bg-danger")
  document.body.classList.remove("bg-warning")
  document.body.classList.remove("bg-primary")
}

  const togglemode = (cls) => {
    if(cls===null){
      if (mode === "dark") {
      removebodyclass()
        setmode("light")
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        showAlert("light mode is enabled", "success")
  
      }
      else {
      removebodyclass()
        setmode("dark")
        document.body.style.backgroundColor = "#343a40"
        document.body.style.color = "white"
        showAlert("dark mode is enabled", "success")
  
      }
    }else{
      removebodyclass()
      console.log(cls)
      document.body.classList.add('bg-'+cls)
    }
    
    

  }
  return (
    <>
    
 <Router>
 <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggle={togglemode} />
      <Alert alert={alert} />
     
      <Routes>
        <Route exact path="/about" element={<About  mode={mode}/>} />
        <Route exact path="/" element={<TextForm heading="Enter the text to Enalyze" showalert={showAlert} mode={mode}/>} />
        
      </Routes>
 </Router>

      {/* <Greet></Greet> */}
    </>
  );
}



export default App;
