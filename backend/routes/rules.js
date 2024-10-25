const express = require('express');
const router = express.Router();
const { createRule, evaluateRule } = require('../controllers/rulesController');

// Define routes
router.post('/create-rule', createRule);  
router.post('/evaluate-rule', evaluateRule);

module.exports = router;
