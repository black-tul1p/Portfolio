import "./App.css";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";

export default function App() {
  return (
    <div className="App body-font">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Home" exact component={App} />
          <Route path="/About" exact component={App} />
          <Route path="/Skills" exact component={App} />
          <Route path="/Experience" exact component={App} />
          <Route path="/Contact" exact component={App} />
        </Routes>
      </Router>
      <Profile />
      <About />
    </div>
  );
}
