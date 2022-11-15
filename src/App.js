import "./App.css";
import Navbar from "./NavBar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import NoPage from "./NoPage";
import Enrolled from "./FriendRef/Enrolled/Enrolled";

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
        <Route index path='/' element={<Home />}></Route>
        <Route path='/friendRef' element={<Enrolled />}></Route>
          <Route path="/*" element={<NoPage/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
