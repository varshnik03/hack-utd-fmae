import React, { useState } from 'react';

function Qone() {
  const [step, setStep] = useState(1);
  const [income, setIncome] = useState('');
  const [creditScore, setCreditScore] = useState('');

  const handleGoBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleGoForward = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  return (
    <div className="h-screen bg-gradient-to-b from-green-200 to-green-500">
      {step === 1 && (
        <div>
          <button onClick={handleGoForward}>Go Forward</button>
          <p>Income</p>
          <input
            type="text"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            placeholder="Enter income"
          />
        </div>
      )}
      {step === 2 && (
        <div>
          <button onClick={handleGoBack}>Go Back</button>
          <button onClick={handleGoForward}>Go Forward</button>
          <p>Income: {income}</p>
          <p>Credit Score Ratio</p>
          <input
            type="text"
            value={creditScore}
            onChange={(e) => setCreditScore(e.target.value)}
            placeholder="Enter credit score ratio"
          />
        </div>
      )}
      {step === 3 && (
        <div>
          <button onClick={handleGoBack}>Go Back</button>
          <p>Income: {income}</p>
          <p>Credit Score Ratio: {creditScore}</p>
          <p>Step 3 Content</p>
        </div>
      )}
    </div>
  );
}

export default Qone;
