import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import TableItem from './table-item';
import BTCIcon from './btc.svg'
import ETHIcon from './eth.png'
import BNBIcon from './bnb.svg'
import SOLIcon from './sol.svg'
import USDC from './usdc.svg'
import XRPIcon from './xrp.svg'

const COINS = [
    { id: 'BTC', name: 'Bitcoin', icon: BTCIcon },
    { id: 'ETH', name: 'Ethereum', icon: ETHIcon },
    { id: 'BNB', name: 'Binance Coin', icon: BNBIcon },
    { id: 'SOL', name: 'Solana', icon: SOLIcon },
    { id: 'USDC', name: 'USDC', icon: USDC },
    { id: 'XRP', name: 'XRP', icon: XRPIcon },
];

const rowVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" }
    })
};

const TableComponent = () => {
    const [data, setData] = useState({});
    const [sparklineData, setSparklineData] = useState({});

    const fetchData = async () => {
        try {
            const allData = {};
            const sparklineDataObj = {};

            for (const coin of COINS) {
                const symbol = coin.id + 'USDT';
                const tickerResponse = await fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}`);
                const tickerData = await tickerResponse.json();

                allData[coin.id] = {
                    price: parseFloat(tickerData.askPrice),
                    change: parseFloat(tickerData.priceChangePercent),
                    volume: parseFloat(tickerData.volume),
                    marketCap: parseFloat(tickerData.count)
                };

                // Если sparkline не нужен, этот блок можно убрать
                // const klineResponse = await fetch(
                //     `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=1d&limit=30`
                // );
                // const klineData = await klineResponse.json();
                // const sparkline = klineData.map(item => parseFloat(item[4]));
                // sparklineDataObj[coin.id] = sparkline;
            }
            setData(allData);
            setSparklineData(sparklineDataObj);
        } catch (error) {
            console.error('Ошибка при получении данных с Binance:', error);
        }
    };

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className='table'
            id="trade"
            data-aos='zoom-in'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div
                className='table__top'
            >
                <div className='table__item'>Markets</div>
                <div className='table__item'>Price</div>
                <div className='table__item'>Change%</div>
                <div className='table__item'>Market cap</div>
                <div className='table__item'>Volume 24h</div>
            </div>

            <div className='table__body'>
                {COINS.map((coin, idx) => (
                    <TableItem
                        key={coin.id}
                        idx={idx}
                        name={coin.name}
                        icon={coin.icon}
                        data={data[coin.id]}
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default TableComponent;
