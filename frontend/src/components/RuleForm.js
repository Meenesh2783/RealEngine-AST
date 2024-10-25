import React, { useState } from 'react';
import { createRule, evaluateRule } from '../services/ruleService';

function RuleForm() {
  const [ruleString, setRuleString] = useState('');
  const [data, setData] = useState('{}');
  const [result, setResult] = useState(null);

  const handleCreateRule = async () => {
    const response = await createRule(ruleString);
    alert(`Rule Created with ID: ${response.rule._id}`);
  };

  const handleEvaluateRule = async () => {
    const response = await evaluateRule(JSON.parse(data));
    setResult(response.eligible ? 'Eligible' : 'Not Eligible');
  };

  return (
    <div>
      <h1>Rule Engine</h1>
      <textarea value={ruleString} onChange={(e) => setRuleString(e.target.value)} placeholder="Enter rule" />
      <button onClick={handleCreateRule}>Create Rule</button>

      <textarea value={data} onChange={(e) => setData(e.target.value)} placeholder="Enter data" />
      <button onClick={handleEvaluateRule}>Evaluate Rule</button>

      {result && <h2>Result: {result}</h2>}
    </div>
  );
}

export default RuleForm;
