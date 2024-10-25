// AST Node Constructor
class Node {
    constructor(type, value = null, left = null, right = null) {
      this.type = type;
      this.value = value;
      this.left = left;
      this.right = right;
    }
  }
  
  // Parse rule string into AST recursively
  function createAST(rule) {
    // Basic parsing logic for demo purposes
    if (rule.includes('AND') || rule.includes('OR')) {
      const [left, operator, right] = rule.split(' '); // Simplified logic
      return new Node('operator', operator, createAST(left), createAST(right));
    }
    return new Node('operand', rule);
  }
  
  // Evaluate AST with provided data
  function evaluateAST(node, data) {
    if (node.type === 'operand') {
      const [key, op, val] = node.value.split(' '); // Example: "age > 30"
      if (op === '>') return data[key] > parseInt(val);
      if (op === '<') return data[key] < parseInt(val);
      if (op === '=') return data[key] === val;
    } else if (node.type === 'operator') {
      if (node.value === 'AND') return evaluateAST(node.left, data) && evaluateAST(node.right, data);
      if (node.value === 'OR') return evaluateAST(node.left, data) || evaluateAST(node.right, data);
    }
    return false;
  }
  
  module.exports = { createAST, evaluateAST };
  