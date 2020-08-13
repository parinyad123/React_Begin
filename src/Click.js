// Handling Events ในรูปแบบ class component

import React from 'react';

class Click extends React.Component {

    clickHandler() {
        console.log('Clicked the button');
    }

    render() {
        return (
            <div>
                {/* onClick คือ event handler
                this.ชื่อ event */}
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        );
    }
}

export default Click;