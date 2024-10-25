import React from 'react';
import CreateRule from './components/CreateRule';
import EvaluateRule from './components/EvaluateRule';
import './App.css'; // Import CSS styles

function App() {
  return (
    <div className="container">
      <header className="app-header">
        <h1>🛠️ Rule Engine</h1>
        <p>Create and Evaluate Custom Rules with Ease</p>
      </header>

      <main className="app-content">
        <section className="card">
          <h2>Create New Rule</h2>
          <CreateRule />
        </section>

        <section className="card">
          <h2>Evaluate Rule</h2>
          <EvaluateRule />
        </section>
      </main>

      <footer className="app-footer">
        <p>Built with ❤️ using React</p>
      </footer>
    </div>
  );
}

export default App;
