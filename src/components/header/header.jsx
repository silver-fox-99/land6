import {AnimatePresence, motion} from "framer-motion";
import './header.scss';
import {useState} from "react";

const menuLinks = [
    { href: "#about", text: "About us" },
    { href: "#price", text: "Account Type" },
    { href: "#info", text: "Information" },
    { href: "#trade", text: "Trade view" },
    { href: "#contact", text: "Contact us" }
];


const menuVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.11,
            delayChildren: 0.3 // задержка старта после появления логотипа
        }
    }
};
const linkVariants = {
    hidden: { opacity: 0, y: -16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
};

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <motion.div
            className="header container"
            initial={{opacity: 0, y: -44}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.7, ease: "easeOut"}}
            viewport={{once: true, amount: 0}}
        >
            <motion.div
                className="header__logo"
                initial={{opacity: 0, x: -40}}
                animate={{opacity: 1, x: 0}}
                transition={{duration: 0.85, ease: "easeOut"}}
            >
                LOGO
            </motion.div>
            <motion.div
                className="header__menu"
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                style={{display: "flex", gap: 36}}
            >
                {menuLinks.map((link, i) => (
                    <motion.a
                        className="header__link"
                        key={link.href}
                        href={link.href}
                        variants={linkVariants}
                        whileHover={{
                            scale: 1.14,
                            color: "#fd532f",
                            textShadow: "0 4px 16px #fd532f44"
                        }}
                        transition={{type: "spring", stiffness: 340, damping: 12}}
                        style={{cursor: "pointer"}}
                    >
                        {link.text}
                    </motion.a>
                ))}
            </motion.div>
            <button
                className={`header__mobile-button${menuOpen ? " is-open" : ""}`}
                onClick={() => setMenuOpen((v) => !v)}
                aria-label="Open menu"
            >
                <span/>
                <span/>
                <span className="header__mobile-menu-text">Menu</span>
            </button>

            <AnimatePresence>
                {menuOpen && (
                    <motion.nav
                        className="header__mobile-menu"
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -40 }}
                        transition={{ duration: 0.26 }}
                    >
                        {menuLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="header__mobile-menu-link"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.text}
                            </a>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
