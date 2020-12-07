const express = require('express');
const router = express.Router();
const { getTransactions, addTransaction, deleteTransaction } = require('../controller/transcations');
const cors = require('cors');

router
  .route('/', cors())
  .get(getTransactions, cors())
  .post(addTransaction, cors());

router
  .route('/:id', cors())
  .delete(deleteTransaction, cors());

module.exports = router;
