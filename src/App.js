
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
//import React from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light') //state var ,tells whether dark mode is enable or not,can change it

  const [alert, setAlert] = useState(null) // we treat alert as an object,staring from null

  // function to show alers
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type }) // as alert was an object
    setTimeout(() => { // dismiss alert after few seconds
      setAlert(null)
    }, 1500)
  }

  
  const removeBodyClasses=()=>
  {
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
  }

  // function for mode setting
  const toggleMode = (cls) => { //cls is event,current color of theme template
     removeBodyClasses()
     document.body.classList.add('bg-'+cls)
    if (mode === 'light') {

      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark mode has been enabled', 'success')
      //document.title = 'Text-util Dark Mode Enabled' //just to change title

      // Bad practice
      /*
       setInterval(() => {
         document.title = 'Practice 1'
       }, 2000)
       setInterval(() => {
         document.title = 'Practice 2'
       }, 1500)
 */
    }

    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled', 'success')
      //document.title = 'Text-util Light Mode Enabled'
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Ammar utils" aboutText="About " mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-23">
          <Routes>
            <Route eaxct path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading=" Text Analyzer " className="my-3" mode={mode} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}


export default App;
