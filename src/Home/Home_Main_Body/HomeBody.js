import classes from './HomeBody.module.css'
import details from './HomeMainDetails';

const HomeBody = () => {
  return (
    <div className={classes.home_container}>
    <div className={classes.how_work}>How does it work?</div>
        <div className={classes.details_container}>
            {details.map((data , index) => (
                <div className={classes.details}>
                <div className={classes.image_container}>
                    <div>
                        <img src={data.image}></img>
                    </div>
                </div>
                <div className={classes.text_container}>
                    <div className={classes.heading}>{data.heading}</div>
                    <div className={classes.description}>{data.description}</div>
                </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default HomeBody;