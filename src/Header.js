import React , {useState} from 'react';

// การใช้งาน state ใน function component 
// เริ่มต้นโดยการ ใส่ { useState } เข้าที่ import หลัง React

function Header(props) {
    // สร้างตัวแปร count และ setCount 
    // useState ใช้เพื่อประกาศตัวแปรของ State โดย useState มีความสามารถแบบเดียวกับ this.state() แบบที่เขียนในรูปแบบ class
    const [count, setCount] = useState(0); // ใช้ useState เพื่อ set ค่า default เริ่มต้น 0 ให้กับ count และ setCount

	return(
		<div>
			<h1>Herder</h1>
            <p>{props.message}</p> 
            <p>You click {count} time</p>
            {/*  update ค่า count โดยเรียก setCount โดยให้ count+1  */}
            <button onClick={() => setCount(count+1)}>Click me</button>
		</div>
	);
}

export default Header;

// หมายเหตุ 
// props ถูกใช้เพื่อส่งข้อมูลระหว่าง component เป่็นข้อมูลทั่วไป หรือ function
// state ใช้เมื่อต้องการเก็บข้อมูล เมื่อข้อมุลมีการเปลี่ยนแปลง ui ก็เปลี่ยนด้วย