import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// **************************************************************************
// สร้าง clock component ซึ่งสามารถ reuse, timer , update เวลาทุกวินาทีด้วย 
// เขียนแบบ function component
// function Clock(props) { // function แสดงเวลา
//   return(
//     <div>
//       <h1>Hello, Clock </h1>
//       <p>It is {props.date.toLocaleTimeString()}</p>
//     </div>
//   );
// }

// function tick() { // function update เวลา 
// {/*เปลี่ยนการ render จาก <App /> component เป็น Clock component*/}
// ReactDOM.render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <Clock date={new Date()} /> 
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// }

// **************************************************************************


  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister(); // serviceWorker สำหรับ <App />
// setInterval(tick, 1000); // เรียกใช้ function tick ทุกๆ 1000 ms หรือ 1s
 