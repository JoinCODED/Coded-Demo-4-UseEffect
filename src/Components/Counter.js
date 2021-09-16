import React, { useEffect, useState } from 'react';
export default function Counter() {
  const [countdownDate, setCountdownDate] = useState(
    new Date('12/25/2021').getTime()
  );
  const [result, setResult] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();

      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      setResult({ days: days, hours: hours, minutes, seconds });
    }
  };

  return (
    <div class="wow fadeInLeft" data-wow-delay=".2s">
      <div className="countdown d-flex">
        <div className="single-count-content">
          <span className="count">{result.days ?? '00'}</span>
          <p class="text">Days</p>
        </div>
        :
        <div className="single-count-content">
          <span className="count">{result.hours ?? '00'}</span>
          <p class="text">Hours</p>
        </div>
        :
        <div className="single-count-content">
          <span className="count">{result.minutes ?? '00'}</span>
          <p class="text">Minutes</p>
        </div>
        :
        <div className="single-count-content">
          <span className="count">{result.seconds ?? '00'}</span>
          <p class="text">Seconds</p>
        </div>
      </div>
    </div>
  );
}
