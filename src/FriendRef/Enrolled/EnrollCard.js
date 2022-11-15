import classes from "./Enrolled.module.css"

const EnrollCard = (props) => {
  return (
    <div className={classes.card_outer}>
          {props.details.map((data) => (
    <div className={classes.card_container}>
        <div className={classes.card_content}>
            <>
              <div className={classes.name_date}>
                <div>{data.name}</div>
                <div>{data.date}</div>
              </div>
              <div className={classes.courses_enrolled}>
                Courses Enrolled(6)
              </div>
              <div className={classes.skill_list}>
                {/* <span className={classes.skills}>UI/UX</span>
                <span className={classes.skills}>Photoshop</span>
                <span className={classes.skills}>Illustrator</span>
                <span className={classes.skills}>Python</span>
                <span className={classes.skills}>MERN</span>
                <span className={classes.skills}>Java</span> */}
                {data.skills.map((eachSkill) => (
                <span className={classes.skills}>{eachSkill}</span>
                ))}
              </div>
              <div className={classes.referral_amount}>
                Referral Amount{" "}
                <span className={classes.referral_span}>{data.amount}</span>
              </div>
            </>
        </div>
      </div>
          ))}
          </div >
  )
}

export default EnrollCard