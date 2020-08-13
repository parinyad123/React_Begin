import React from 'react';

class EventBind extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }
        
        this.clickHandler = this.clickHandler.bind(this) // วิธีที่ 3 (วิธี 1 และ 2 ไม่ต้องมีบรรทัดนี้)
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'Goodbye!'
    //     })
    //     console.log(this);
    // }

    // สามารถเขียน clickHandler ในรูปแบบ arrow function ได้
    clickHandler = () => {
        this.setState({
            message: 'GoodBye!!!'
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */} {/*วิธีที่ 1 */}
                {/* หรือ สามารถเขียนในรูปแบบ arrow function */}
                {/* <button onClick={()=> this.clickHandler()}>Click</button> */}  {/* วิธีที่ 2 */}
                <button onClick={this.clickHandler}>Click</button>  {/* วิธีที่ 3 */}

            </div>
        );
    }
}

export default EventBind;

// หมายเหตุ วิธีที่ 3 เป็นวิธีที่ดีที่สุดในเรื่อง performance การทำงาน