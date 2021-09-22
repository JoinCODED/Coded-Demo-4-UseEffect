import React, { useEffect, useState } from 'react';

export default function Counter() {


  const [seconds, setSeconds] = useState(30);
  const [text, setText] = useState()



  //1 a starting point 
  //2 a clean up 

  useEffect(() => {
    console.log("hello i am use effect")
  }, []) // running once

  useEffect(() => {
    console.log("hello i am the second use effect")
  }, [text]) // runs everytime text is changing 

  useEffect(() => {
    if (!seconds) return window.alert("YOU LOSE ")
    const interval = setInterval(() => {
      setSeconds(seconds - 1)
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [seconds])

  useEffect(() => {
    if (text === "the frog run from the fox to get something to eat")
      window.alert("YAAAAY YOU WON")
  }, [text])

  return (
    <div class="wow fadeInLeft" data-wow-delay=".2s">
      <div className="countdown d-flex">
        <div className="single-count-content">
          <span className="count">{seconds ?? '00'}</span>
          <p class="text">Seconds</p>
        </div>
      </div>

      <form
        class="subscribe-form subscribe-form-1 validate wow fadeInDown"
      >
        <label>the frog run from the fox to get something to eat</label>
        <input
          onChange={(e) => setText(e.target.value)}
          class="subscribe-form subscribe-form-1 validate wow fadeInDown"
          placeholder=""
        />
      </form>
    </div>
  );
}
