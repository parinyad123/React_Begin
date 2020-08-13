import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import Content from './Content';
import Hello from './Hello';
import Clock from './Clock';
import Click from './Click';
import EventBind from './EventBind';
import Greeting from './Greeting';
import LoginControl from './LoginControl';
import Mailbox from './Mailbox';
import YourAge from './YourAge';
import NameList from './NameList';

let i = 2;

{/*สร้าง css แบบ inline style*/}
let myCss = {
	fontsize: 48,
	color:" #FF0000"
}

function App() {

	// Handling Events ในรูปแบบ function component
	function handleClick(e) {
		// preventDefault method ใช้สำหรับยกเลิด event  
		// ทำให้เมื่อคลิปแล้ว event ที่ set ไว้จะไม่เกิดขึ้น
		e.preventDefault();
		console.log('The link was clicked');
	}

	// สร้างตัวแปรไว้เก็บ array ข้อความที่เรายังไม่ได้อ่าน
	const messages = ['Message1', 'Message2', 'Message3'];

	return (
		
		<div>
			<a href="https://google.com" onClick={handleClick}>Click me</a>


			<Clock />
			<Click />
			<EventBind />

			<Header message="This is message from header"/> 
			<Content />
			<h1 style={myCss}>Hello React !!!</h1>
			<h3 className="red">Testing</h3>
			
			{/* <p>{ i==2 ? 'True':'False' }</p> */}

			<Hello hello='Hello React from Hello !!'/>
			<Greeting isoLoggedIn={true} /> {/*เขียน if แบบ function */}
			<LoginControl />  {/* เขียน if แบบ class */}

			<Mailbox unreadMessages={messages} />

			<YourAge age={18} />
			<NameList />
		</div>
	);
	}





export default App;