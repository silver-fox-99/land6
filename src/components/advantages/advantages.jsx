import { motion } from "framer-motion";
import icon1 from './icon1.svg';
import icon2 from './icon2.svg';
import icon3 from './icon3.svg';
import './advantages.scss';

const list = [
    {
        icon: icon1,
        title: "Data, not guesswork",
        text: "Every decision is based on accurate metrics, algorithmic analytics, and real market behavior. No emotions — just verified signals and clear calculations"
    },
    {
        icon: icon2,
        title: "Adaptation to markets",
        text: "We don't shy away from volatility — we turn it into a resource. Our strategies flexibly adapt to market conditions, turning fluctuations into growth opportunities"
    },
    {
        icon: icon3,
        title: "360° diversification",
        text: "Trade based on balance: assets by class and region for stable income. The risk and income distribution strategy works for your long-term results."
    }
];

const itemVariants = {
    hidden: { opacity: 0, y: 32, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Advantages() {
    return (
        <motion.div
            className="advantages container"
            id="about"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <motion.div
                className="advantages__top"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.09 }}
            >
                <div className="headline">Advantages</div>
                <h2 className="advantages__title">Technologies that work for your results</h2>
                <span className="advantages__subtitle">
          In an era of instant market fluctuations, automation and analytics are not just a convenience, but your competitive advantage. Technologies that work for your results.
        </span>
            </motion.div>

            <motion.div
                className="advantages__list"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.22 }}
                transition={{ staggerChildren: 0.19 }}
                style={{ display: 'flex', gap: 40 }}
            >
                {list.map((item, i) => (
                    <motion.div
                        className="advantages__item"
                        key={item.title}
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.033,
                            boxShadow: "0 6px 32px #fd532f18"
                        }}
                        transition={{ type: "spring", stiffness: 320, damping: 23 }}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="advantages__item-icon">
                            <img src={item.icon} alt="" />
                        </div>
                        <h5 className="advantages__item-title">{item.title}</h5>
                        <p className="advantages__item-text">{item.text}</p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}
