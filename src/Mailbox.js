import React from 'react';

// ทำข้อความที่เรายังไม่ได้อ่าน
function Mailbox (props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            {unreadMessages.length > 0 && <p>You have {unreadMessages.length} unread messages.</p>}
        </div>
    ) 
}

export default Mailbox;