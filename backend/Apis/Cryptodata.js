const express = require('express');
const { fetchCoinData } = require('./functions/fromCoinGecko');
const { getLatestBlockNumber } = require('./functions/Finalizedblock');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const sortdata = req.query.sortdata;
    const sortvalue = parseInt(req.query.sortvalue);
    const filter = req.query.filter;
    //console.log(sortdata,sortvalue,filter);
    const cryptoData = await fetchCoinData(sortdata, sortvalue, filter);
    res.json(cryptoData);
  } catch (error) {
    res.json({ message: 'Error fetching crypto data' });
  }
});

router.get('/finalized', async (req, res) => {
  try {
    const blockvalue = await getLatestBlockNumber();
    res.send(blockvalue);
  } catch (error) {
    res.json({ message: 'Error fetching block value' });
  }
});

module.exports = router;