const mongoose = require('mongoose');

const nodeSchema = new mongoose.Schema({
  type: { type: String, required: true }, // 'operator' or 'operand'
  value: { type: String, required: false }, // For operand nodes
  left: { type: mongoose.Schema.Types.Mixed, default: null },
  right: { type: mongoose.Schema.Types.Mixed, default: null }
});

const Rule = mongoose.model('Rule', nodeSchema);

module.exports = Rule;
