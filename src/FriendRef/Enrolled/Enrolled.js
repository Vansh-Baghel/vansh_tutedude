import EnrollCard from "./EnrollCard";
import classes from "./Enrolled.module.css";
import EnrollData from "./EnrollData.js"
import BalanceRef from "../Balance_Refer/BalanceRef";

const Enrolled = () => {
  return (
    <>
    <BalanceRef />
    <div className={classes.enroll_container}>
      <div className={classes.friendsText}>
        Friends who enrolled<span style={{ color: "#626262" }}>(3)</span>
      </div>
    <EnrollCard details={EnrollData}/>
    <div className={classes.footer}>Terms & Conditions</div>
    </div>
    </>
  );
};

export default Enrolled;
