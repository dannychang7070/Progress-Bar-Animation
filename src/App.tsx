import * as React from 'react';
import './styles.css';

export default function App() {
  const [progress, setProgress] = React.useState(0);
  const [progress2, setProgress2] = React.useState(0);
  const [progress3, setProgress3] = React.useState(0);
  const startProgressBar = () => {
    setProgress(0);
    setProgress2(0);
    setProgress3(0);
    const interval = setInterval(() => {
      setProgress((progress) => progress + 1);
    }, 20);
    setTimeout(() => {
      clearInterval(interval);
      const interval2 = setInterval(() => {
        setProgress2((progress2) => progress2 + 1);
      }, 20);
      setTimeout(() => {
        clearInterval(interval2);
        const interval3 = setInterval(() => {
          setProgress3((progress3) => progress3 + 1);
        }, 20);
        setTimeout(() => {
          clearInterval(interval3);
        }, 2000);
      }, 2000);
    }, 2000);
  };

  return (
    <div>
      <button onClick={startProgressBar}>Add</button>
      <div className="container">
        <div
          className="progress-bar"
          style={{ width: `${progress}%`, backgroundColor: 'green' }}
        ></div>
      </div>
      <br />
      <div className="container">
        <div
          className="progress-bar"
          style={{ width: `${progress2}%`, backgroundColor: 'green' }}
        ></div>
      </div>
      <br />
      <div className="container">
        <div
          className="progress-bar"
          style={{ width: `${progress3}%`, backgroundColor: 'green' }}
        ></div>
      </div>
    </div>
  );
}
