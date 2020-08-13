import React from 'react';

class Hello extends React.Component {

    // ********************************************
    // การสร้าง state ใน class componaent
    // สร้างปุ่ม click เพิ่มจำนวนนับ
    constructor(props) {
        super(props)

        // กำหนดค่า default ด้วย this.state
        // โดยกำหนดค่า default เริ่มต้น = 0 ()
        this.state = {
            counter:0
        }
    }

    // function เปลี่ยนค่า counter ใน state
    handleClick() {
        // การนำข้อมูลเก่ามาเปลี่ยนแปลงอาจทำให้เกิดปัญหาได้
        // ทาง react จึงแนะนำให้ setState ที่เป็น function 
        // โดยมี 1 agement เป็น state ก่อนหน้า (prevState) และมี return เป้น new state
        this.setState(function(prevState){
            return {
                counter: prevState.counter + 1
            }
        }) 
    }

    // ********************************************

	render() {
		return(
            // นอกจาก React.Fragment เราสามารถใช้ div คลุมได้
            // สามารถใช้ได้้ทั้งกับ class และ function
			<React.Fragment> 
				<h1>Hello React Class Component</h1>
                <p>{this.props.hello}</p>   

                {/* ส่วนของการแสดงผลการ click 
                โดยทุกครั้งที่ click จะทำให้ function handleClick ทำงาน ด้วย even onClick
                ทำงานโดย เมื่อสั่ง function ไปให้ onClick แล้ว function จะถูก execute โดย tag button 
                เมื่อเรียกใช้ this ใน handleClick จะเป็นการอ้างอิงถึง obj ของ tag button 
                ทำให้ต้องใช้ bind(this) เพื่อบอกว่า เมื่อไหร่ก็ตาม ที่เรียกใช้ this ใน handleClick จะหมายถึง obj ของ react*/}
                <button onClick={this.handleClick.bind(this)}>Click me to increment</button> 
                <p>counter: {this.state.counter}</p>       
			</React.Fragment>
		)
	}
}

export default Hello;