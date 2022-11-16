import "./App.css";
import Navbar from "./NavBar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import AnimationComponent from "./AnimationComponent";

function App() {

  return (
    <Router>
      <Navbar />

      <AnimationComponent />
    </Router>
  );
}

export default App;
