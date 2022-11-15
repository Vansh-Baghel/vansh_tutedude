import classes from "./Home_BalRef.module.css";

const HomeBalRef = () => {
  return (
    <div className={classes.container}>
      <div>
        {" "}
        <div className={classes.refer_earn}>
          <span className={classes.earnText}>
            {" "}
            UI/UX {">"} Refer & Earn
            {/* {">"} Friends Referred{" "} */}
          </span>
        </div>
      </div>
      <div className={classes.withdrawCode_container}>
        <div className={classes.withdraw_bal_container}>
          <div className={classes.withdraw_details}>
            <div className={classes.detail}>
              <div className={classes.ref_earning}>Referral Earning </div>
              <div className={classes.ref_earning_amount}>₹ 2,500</div>
            </div>
            <div className={classes.detail}>
              <div className={classes.ref_earning}>Total Referrals </div>
              <div className={classes.ref_earning_amount}>7</div>
            </div>
            <div className={classes.detail}>
              <div className={classes.ref_earning}>Wallet Balance </div>
              <div className={classes.ref_earning_amount}>₹ 500</div>
            </div>
          </div>
          <div className={classes.button_div}>
            <button className={classes.withdraw_button}>
              Withdraw Balance
            </button>
          </div>
        </div>
        <div className={classes.your_ref_container}>
          <div className={classes.ref_text}>Your Referral Code </div>

          <div className={classes.ref_code}>
            <div>EDCH54</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBalRef;
