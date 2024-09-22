const express = require('express');
const { getLatestBlockNumber } = require('./functions/Finalizedblock');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const blockvalue = await getLatestBlockNumber();
        res.send(blockvalue);
    } catch (error) {
        res.json({ message: 'Error fetching block value' });
    }
});

module.exports = router;