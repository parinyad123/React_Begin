import React from 'react'

class Clock extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    // componentDidMount ใช้สำหรับ set timer
    componentDidMount() { 
        this.timerID = setInterval(
            () => this.tick(), 1000);

    }

    // componentWillUnmount ใช้สำหรับ เคลียเวลาถ้า component ถูกลบ จะได้เวลาหยุด
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }


    render() {
        return (
            <div>
                <h1>Hello, Clock</h1>
                <p>It is {this.state.date.toLocaleTimeString()}</p>
            </div>
        )

    }
}

export default Clock;