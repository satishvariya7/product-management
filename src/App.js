import NavigationBar from "./Components/Navbar/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
