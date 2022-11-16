import EnrollCard from "./EnrollCard";
import classes from "./Enrolled.module.css";
import EnrollData from "./EnrollData.js"
import BalanceRef from "../Balance_Refer/BalanceRef";
import { motion } from "framer-motion";

const Enrolled = () => {
  return (
    <motion.div
    initial={{opacity: .3}}
    animate={{opacity: 1, transition: ".3s"}}
    exit={{opacity: .4}}
    >
    <BalanceRef />
    <div className={classes.enroll_container}>
      <div className={classes.friendsText}>
        Friends who enrolled<span style={{ color: "#626262" }}>(3)</span>
      </div>
    <EnrollCard details={EnrollData}/>
    <div className={classes.footer}>Terms & Conditions</div>
    </div>
    </motion.div>
  );
};

export default Enrolled;
