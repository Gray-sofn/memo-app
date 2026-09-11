import React, { useState } from 'react';
import './App.css';
import Button from './Button';

function App_def() {
  const [count, setCount] = useState(0);
  // const handleClickCountup = () => {
  //   setCount((prev) => {
  //     return prev + 1;
  //   });
  // }

  return (
    <>
      <div className="App">
        <p>カウント: {count}</p>
        <Button
          btn_click={() => { setCount(count + 1) }}
          btn_txt='1増やす'
        />
        <Button
          btn_click={() => { setCount(count - 1) }}
          btn_txt='1減らす'
        />
        {/* <Button btn_click={handleClickCountup} btn_txt='クリック' /> */}
      </div>
    </>
  );
}


export default App_def;
