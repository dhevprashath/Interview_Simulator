// // App.js
// import React, { useState } from 'react';
// import ResultPage from '/ResultPage';
// import './App.css';

// const App = () => {
//   const [score, setScore] = useState(null);

//   // Simulate finishing the test and calculating the score (0 - 10)
//   const finishTest = () => {
//     // Simulate a random score between 0 and 10
//     const randomScore = Math.floor(Math.random() * 11);
//     setScore(randomScore);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Interview Simulator</h1>
//         {!score ? (
//           <button onClick={finishTest}>Finish Test</button>
//         ) : (
//           <ResultPage score={score} />
//         )}
//       </header>
//     </div>
//   );
// };

// export default App;
