const Rule = require('../models/Rule');
const { createAST, evaluateAST } = require('../utils/ast');

// Create and store a new rule
async function createRule(req, res) {
  const { ruleString } = req.body;
  const rootNode = createAST(ruleString);
  const rule = new Rule(rootNode);
  await rule.save();
  res.status(201).json({ message: 'Rule created', rule });
}

// Evaluate an existing rule against user data
async function evaluateRule(req, res) {
  const { ruleId, data } = req.body;
  const rule = await Rule.findById(ruleId);
  const result = evaluateAST(rule, data);
  res.json({ eligible: result });
}

module.exports = { createRule, evaluateRule };
