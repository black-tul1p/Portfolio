import "./App.css";
import Navbar from "./Navbar";
import Profile from "./Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
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
    </div>
  );
}
