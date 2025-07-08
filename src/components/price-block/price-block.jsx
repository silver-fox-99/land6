import { motion } from "framer-motion";
import iconList from './icon.svg';
import arrowIcon from './arrow.svg';
import './price-block.scss';
import markIcon from './mark.svg';

const priceCards = [
    {
        type: 'Silver',
        from: '$200',
        features: ['Start with minimal risk'],
        popular: false,
    },
    {
        type: 'Gold',
        from: '$1,500',
        features: ['Advanced tools', 'Low spreads', 'High-volume trading'],
        popular: true,
    },
    {
        type: 'Platinum',
        from: '$5,000',
        features: ['Advanced tools', 'Low spreads', 'High-volume trading'],
        popular: false,
    },
];

export default function PriceBlock() {
    return (
        <motion.div
            className="price-block container"
            id="price"
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.div
                className="price-block__top"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.09 }}
            >
                <span className="headline">Price</span>
                <h3 className="price-block__title">Pick your trading account</h3>
                <span className="price-block__subtitle">
          We offer a range of account types with excellent trading conditions to suit any trader.
        </span>
            </motion.div>

            <motion.div
                className="price-block__list"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.22 }}
                variants={{
                    visible: { transition: { staggerChildren: 0.19, delayChildren: 0.18 } },
                }}
                style={{ display: "flex", gap: 36, justifyContent: "center" }}
            >
                {priceCards.map((card, idx) => (
                    <motion.div
                        className={`price-block__item${card.popular ? ' price-block__item--popular' : ''}`}
                        key={card.type}
                        variants={{
                            hidden: { opacity: 0, y: 40, scale: 0.97 },
                            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
                        }}
                        whileHover={{
                            scale: 1.033,
                            boxShadow: card.popular ? "0 0 48px 0 #fd532f45" : "0 4px 28px #0004"
                        }}
                        transition={{ type: "spring", stiffness: 320, damping: 23 }}
                    >
                        {card.popular && (
                            <div className="price-block__item-mark">
                                <img src={markIcon} alt="" /> Most popular
                            </div>
                        )}
                        <div className="price-block__item-wrapper">
                            <div className="price-block__item-top">
                                <div className="price-block__item-type">{card.type}</div>
                                <span className="price-block__item-from">from</span>
                                <span className="price-block__item-price">{card.from}</span>
                            </div>
                            <a
                                href={process.env.REACT_APP_LINK}
                                className="price-block__button"
                            >
                                Open trading account <img src={arrowIcon} alt="" />
                            </a>
                        </div>
                        <div className="price-block__item-bottom">
                            {card.features.map((feature) => (
                                <div className="price-block__item-bottom-item" key={feature}>
                                    <img src={iconList} alt="" /> {feature}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}
