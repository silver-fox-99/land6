import { motion } from "framer-motion";
import arrowIcon from './arrow.svg';
import bgImage from './bg.jpg';
import './main-block.scss';

export default function MainBlock() {
    return (
        <motion.div
            id="info"
            className="main-block container"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.7 }}
        >
            <motion.div
                className="main-block__column"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.13, ease: "easeOut" }}
            >
                <motion.h1
                    className="main-block__title"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.22, ease: "easeOut" }}
                >
                    Digital savvy in trading – your path to confident growth
                </motion.h1>
                <motion.p
                    className="main-block__text"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.33, ease: "easeOut" }}
                >
                    We offer smart trading based on data, automatic signals, and adaptive strategies. Everything you need to make decisions that work — in any market phase.
                </motion.p>
                <motion.a
                    href={process.env.REACT_APP_LINK}
                    className="main-block__button"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.65, delay: 0.53, ease: "backOut" }}
                    whileHover={{ scale: 1.07, boxShadow: "0 2px 32px #fd532f40" }}
                >
                    <img src={arrowIcon} className="main-block__button-icon" alt="" />
                    Open trading account
                </motion.a>
            </motion.div>

            <motion.div
                className="main-block__column"
                initial={{ opacity: 0, x: 56 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.29, ease: "easeOut" }}
            >
                <img src={bgImage} alt="" />
            </motion.div>
        </motion.div>
    );
}
