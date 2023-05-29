import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';

function App() {
  const [appTheme, setAppTheme] = useState('dark');
  const [alert, setAlert] = useState(null);

  const toggleTheme = () => {
    if (appTheme === 'light') {
      setAppTheme('dark');
      showAlert('success', 'Dark mode is enabled');
      localStorage.setItem('theme', 'dark');
    } else {
      setAppTheme('light');
      showAlert('success', 'Light mode is enabled');
      localStorage.setItem('theme', 'light');
    }
  };

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message,
    });
        setTimeout(() => {
          setAlert(false);
        }, 3000);
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setAppTheme('dark');
      document.body.style.backgroundColor = '#042743';
    } else {
      setAppTheme('light');
      document.body.style.backgroundColor = 'white';
    }
  }, [appTheme]);
  

  return (
    <>
      <Navbar title="Text Utils" aboutText="About Us" theme={appTheme} toggle={toggleTheme} />
      <Alert alert={alert}/>
      <TextForm heading="Enter your Text to analyze" theme={appTheme} showAlert={showAlert} />
    </>
  );
}

export default App;
