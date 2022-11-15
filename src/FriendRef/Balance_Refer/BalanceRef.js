import classes from "./Balance_Ref.module.css";
import { Link } from "react-router-dom";
import arrow from "../../Resources/Arrow.png";
import { useEffect, useState } from "react";

const BalanceRef = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const setHorizontalWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", setHorizontalWidth);
    return () => {
      window.removeEventListener("resize", setHorizontalWidth);
    };
  }, [width]);

  return (
    <div className={classes.container}>
      <div className={classes.refer_earn}>
        <span className={classes.earnText}>
          {" "}
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            UI/UX {">"} Refer & Earn
          </Link>
          {">"} Friends Referred{" "}
        </span>
      </div>
      {width <= 520 ? (
        <Link to="/" style={{width: "fit-content" , textDecoration: "none" }}>
          {" "}
          <img src={arrow}></img>{" "}
          <div
            style={{
              display: "inline-block",
              color: "#800080",
              fontSize: "1rem",

              marginBottom: "2rem",
            }}
          >
            go back{" "}
          </div>
        </Link>
      ) : (
        <></>
      )}
      <div className={classes.bottom}>
        <div className={classes.refer_Code}>
          <div className={classes.ref_name}>Your Referral Code </div>
          <div className={classes.code}>EDCH54</div>
        </div>
        <div className={classes.wallet_bal}>
          <div className={classes.wallet_text}>Wallet Balance</div>
          <div>₹ 500</div>
        </div>
      </div>
    </div>
  );
};

export default BalanceRef;
