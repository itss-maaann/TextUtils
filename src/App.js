import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import About from "./components/About";
import useAlert from "./hooks/useAlert";
import useTheme from "./hooks/useTheme";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [alert, showAlert] = useAlert();
  const [appTheme, toggleTheme] = useTheme(showAlert);

  useEffect(() => {
    const body = document.body;
    body.classList.remove("dark-theme", "light-theme");
    body.classList.add(appTheme === "light" ? "light-theme" : "dark-theme");
  }, [appTheme]);

  return (
    <>
      <Router>
        <Navbar
          title="Text Utils"
          aboutText="About Us"
          theme={appTheme}
          toggle={toggleTheme}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextForm
                heading="Enter your Text to analyze"
                theme={appTheme}
                showAlert={showAlert}
              />
            }
          />
          <Route exact path="/about" element={<About theme={appTheme} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
