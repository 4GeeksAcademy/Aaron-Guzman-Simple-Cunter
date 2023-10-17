// import React, { useEffect, useState} from 'react';


// const SecondsCounter = () => {
//   const [count, setCount] = useState(0);
//   const [digitDiv, setDigitDiv] = useState([]);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCount((i) => i + 1);
//     }, 1000);

//     useEffect(() => {
//       const digits = count.toString().split('').map((digit, index) => (
//         <div key={index} className="digit">{digit}</div>
//       ));
//       setDigitDiv(digits);
//     }, [count]);

//      return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   return <div className='container'>
//     <h1>{digitDiv}</h1>
    
//     </div>;
// };

// export default SecondsCounter;

import React, { useEffect, useState } from 'react';

const SecondsCounter = () => {
  const [count, setCount] = useState(0);
  const [digitDivs, setDigitDivs] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((i) => i + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const formatCount = count.toString().padStart(5, "0");
    const digits = formatCount.split('').map((digit, index) => (
      <div key={index} className="digit d-inline-block p-2 border text-center text-primary">{digit}</div>
    ));
    setDigitDivs(digits);
  }, [count]);

  return (
    <div className='container d-flex text-bg-dark p-3 flex-row justify-content-center'>
      <div><h1>Clock</h1></div>
      <h1>{digitDivs}</h1>
    </div>
  );
};

export default SecondsCounter;
