import React, { useState } from 'react';
import axios from 'axios';
import './EvaluateRule.css';

function EvaluateRule() {
  const [ruleId, setRuleId] = useState('');
  const [data, setData] = useState('');
  const [result, setResult] = useState(null);

  const handleEvaluate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/rules/evaluate', {
        ruleId,
        data: JSON.parse(data),
      });
      setResult(response.data.eligible ? 'Eligible' : 'Not Eligible');
    } catch (error) {
      console.error(error);
      setResult('Error evaluating rule.');
    }
  };

  return (
    <div>
      <h2>Evaluate Rule</h2>
      <form className="evaluate-form" onSubmit={handleEvaluate}>
        <input
          type="text"
          value={ruleId}
          onChange={(e) => setRuleId(e.target.value)}
          placeholder="Enter rule ID"
        />
        <textarea
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder='Enter data as JSON (e.g., {"age": 25})'
        />
        <button type="submit">Evaluate</button>
      </form>
      {result && <p>Result: {result}</p>}
    </div>
  );
}

export default EvaluateRule;
