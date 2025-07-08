import { motion } from "framer-motion";
import './instruments.scss';

export default function Instruments() {
    return (
        <div className="instruments">
            <motion.div
                className="instruments__wrapper"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.44 }}
                transition={{ duration: 1.1, ease: "easeOut" }}
            >
                <motion.div
                    className="headline headline--transaprent"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
                >
                    Instruments
                </motion.div>
                <motion.h3
                    className="instruments__title"
                    initial={{ opacity: 0, y: 36 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0, delay: 0.3, ease: "easeOut" }}
                >
                    All asset classes.<br />Control in your hands
                </motion.h3>
                <motion.span
                    className="instruments__subtitle"
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0, delay: 0.55, ease: "easeOut" }}
                >
                    Cryptocurrencies, stocks, ETFs, and bonds — <br />
                    your strategy, our technology
                </motion.span>
            </motion.div>
        </div>
    );
}
