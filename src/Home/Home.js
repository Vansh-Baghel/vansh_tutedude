import HomeBalRef from "./Home_Balance_Ref/HomeBalRef";
import HomeFooter from "./Home_Footer/HomeFooter";
import HomeBody from "./Home_Main_Body/HomeBody";
import { motion } from 'framer-motion';


const Home = () => {
  return (
    <motion.div
      initial={{opacity: .3}}
      animate={{opacity: 1 , transition: ".3s"}}
      exit={{opacity: .4}}
      >
        <HomeBalRef />
        <HomeBody />
        <HomeFooter />
    </motion.div>
  );
};

export default Home;
