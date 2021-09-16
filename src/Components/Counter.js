import React from 'react';

export default function Counter() {
  return (
    <div class="wow fadeInLeft" data-wow-delay=".2s">
      <div className="countdown d-flex">
        <div className="single-count-content">
          <span className="count">00</span>
          <p class="text">Days</p>
        </div>
        :
        <div className="single-count-content">
          <span className="count">00</span>
          <p class="text">Hours</p>
        </div>
        :
        <div className="single-count-content">
          <span className="count">00</span>
          <p class="text">Minutes</p>
        </div>
        :
        <div className="single-count-content">
          <span className="count">00</span>
          <p class="text">Seconds</p>
        </div>
      </div>
    </div>
  );
}
