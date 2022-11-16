import { AnimatePresence } from "framer-motion";
import { Route, Routes , useLocation} from "react-router-dom";
import Home from "./Home/Home";
import NoPage from "./NoPage";
import Enrolled from "./FriendRef/Enrolled/Enrolled";
const AnimationComponent = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {" "}
        <Route index path="/" element={<Home />}></Route>
        <Route path="/friendRef" element={<Enrolled />}></Route>
        <Route path="/*" element={<NoPage />}></Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimationComponent;
