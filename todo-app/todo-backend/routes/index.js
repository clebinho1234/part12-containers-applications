const express = require('express');
const router = express.Router();
const { getAsync } = require('../redis');

const configs = require('../util/config')

let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  visits++

  res.send({
    ...configs,
    visits
  });
});

/* GET statistics data. */
router.get('/statistics', async (req, res) => {
  try {
    const todoCount = await getAsync('added_todos') || '0';
    res.status(200).json({ added_todos: parseInt(todoCount, 10) });
  } catch (err) {
    console.error('Error fetching statistics:', err);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

module.exports = router;
