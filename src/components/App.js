import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  const dateTime = new Date().toLocaleString();

  const[currentTime,setCurrentTime] = useState(dateTime);

  const update = () => {
    const dateTime = new Date().toLocaleString();
    setCurrentTime(dateTime)
  }

  setInterval(update,1000);
  return (
    <div id="main">
      <div className="date-time">
        <h1>{currentTime}</h1>
      </div>
    </div>
  )
}


export default App;
