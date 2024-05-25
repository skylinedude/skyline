import { useState } from "react";
// import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
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
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      showAlert("Dark mode as been enabled", "success")
      document.title = "Skyline-Dark Mode"
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode as been enabled", "success")
      document.title = "Skyline-Light Mode"
    }
  }
  return (

    <>
      <NavBar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} mode={mode} toggleMode={toggleMode} />
      {/* <BrowserRouter>
      <NavBar mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
        <Routes>
          <Route index path="/" element={<TextForm showAlert={showAlert} mode={mode} toggleMode={toggleMode} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
