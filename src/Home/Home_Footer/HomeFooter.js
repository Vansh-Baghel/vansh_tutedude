import "./HomeFooter.css";
import { Link } from "react-router-dom";

const HomeFooter = () => {
  return (
    <div className="footer">
      <div>
        <Link to="/friendRef" style={{textDecoration: "none" , color: "#800080"}}>Friends Who Enrolled</Link>
      </div>
      <div>Terms & Conditions</div>
    </div>
  );
};

export default HomeFooter;
