const axios = require('axios');
const newCoin = require('../../mongoose/cryptoModel');
const setTime = require('../../mongoose/timeModel');

async function fetchCoinData(sortdata, sortvalue, filter1) {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?x_cg_demo_api_key=CG-tmnPayZP2xwtcFyf4DNfhZqU', {
      params: {
        vs_currency: 'usd',
        ids: 'bitcoin,ethereum,matic-network,tether,binancecoin,tron',
        price_change_percentage: '1h,24h'
      }
    });
    const data1 = response.data
    let result = data1.map(data => ({
      id: data.symbol,
      name: data.name,
      image: data.image,
      price: data.current_price,
      marketcap: data.market_cap,
      percentChange1h: data.price_change_percentage_1h_in_currency,
      percentChange24h: data.price_change_percentage_24h
    }));

    for (let coin of result) {
      await newCoin.findOneAndUpdate({ id: coin.id }, coin, { upsert: true, new: true });
    }

    await setTime.findOneAndUpdate({ fieldfor: 'cryptodata' }, { fieldfor: 'cryptodata', timeStamp: new Date().toLocaleString() }, { upsert: true, new: true });

    if (filter1) {
      result = result.filter(coin => (coin.id.toLowerCase().includes(filter1.toLowerCase()) || coin.name.toLowerCase().includes(filter1.toLowerCase())));
    }

    if (sortvalue == 0) {
      return { fetched: 'true', data: result };
    }

    result.sort((a, b) => {
      if (sortvalue === 1) {
        return a[sortdata] - b[sortdata];
      }
      return b[sortdata] - a[sortdata];
    })

    return { fetched: 'true', data: result };

  }
  catch (error) {
    const lastUpdated = (await setTime.findOne({ fieldfor: 'cryptodata' })).timeStamp;
    if (sortvalue == 0) {
      let result = await newCoin.find();
      if (filter1) {
        result = result.filter(coin => (coin.id.toLowerCase().includes(filter1.toLowerCase()) || coin.name.toLowerCase().includes(filter1.toLowerCase())));
        return { fetched: 'false', data: result, time: lastUpdated };
      }
      return { fetched: 'false', data: result, time: lastUpdated };
    }

    let result = await newCoin.find().sort({ [sortdata]: sortvalue });
    if (filter1) {
      result = result.filter(coin => (coin.id.toLowerCase().includes(filter1.toLowerCase()) || coin.name.toLowerCase().includes(filter1.toLowerCase())));
    }
    return { fetched: 'false', data: result, time: lastUpdated };

  }
}

module.exports = { fetchCoinData };
