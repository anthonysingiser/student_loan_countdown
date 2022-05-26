import './App.css';
import React, {useEffect, useState} from "react";

function App() {

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`09/01/${year}`) - +new Date();
    let timeLeft = {};
    if (difference > 0){
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft()); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });
  
  return (
    <div> 
      <center>
        <h1>Federal Student Loan Freeze Countdown</h1>
        <h3>**Update: April 6, 2022**</h3>
        <h3>The U.S. Department of Education has extended the forebearance through August 31, 2022</h3>
        <h2>{timerComponents.length ? timerComponents : <span> It's time!</span>}</h2>
      </center>
    </div>
  );
}

export default App;
