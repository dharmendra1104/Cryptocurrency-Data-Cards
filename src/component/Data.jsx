import React, { useState,useEffect } from 'react'
import '../component/Data.css'

function Data() {
    const [coin, setCoin] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        async function fetchData() {
                const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`;
                const response = await fetch(url);
                const data = await response.json();
                setCoin(data);
                setLoading(false); 
                console.log(data);
        }
        fetchData();
    }, []);

    if (loading) {
        return <div className='card-container'  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><h1 className='loading'></h1></div>;
    }

    return (
        <div className='data-container'>
            {coin.map((item) => (
                <div className="data" key={item.id}>
                    <span className='span'>
                        <img src={item.image} alt={"#"} />
                        <span>{item.name}</span>
                    </span>
                    <p>{item.symbol}</p>
                    <p>${item.current_price.toFixed(2)}</p>
                    <p>${item.market_cap.toLocaleString()}</p>
                    <p>${item.total_volume.toLocaleString()}</p>
                    <p className={item.price_change_percentage_24h < 0 ?'red':'green'}>
                        {item.price_change_percentage_24h.toFixed(2)}%
                    </p>
                    <p>Mkt Cap:<span>${item.market_cap.toFixed(2)}</span></p>
                </div>
            ))}
        </div>
    );
}

export default Data;
