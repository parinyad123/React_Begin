import React from 'react';
import Person from './Person';

function NameList() {
    // ********************************************************************
    // const names = ['Parinya', 'Duangklng', 'Aof']; // วิธีที่ 1 และ 2
    // const nameList = names.map(name => <p>{name}</p>); // วิธีที่ 3

    // return (
    //     <div>
    //         {/* วิธีที่ 1  */}
    //         <p>{names[0]}</p>
    //         <p>{names[1]}</p>
    //         <p>{names[2]}</p>

    //         {/* วิธีที่ 2 */}
    //         {names.map(name => <p>{name}</p>)}

    //         {/* วิธีที่ 3 */}
    //         {nameList}

    //     </div>
    // )
    // ********************************************************************


    // เขียนแบบ array ที่มีการเก็บ obj ไว้

    const persons = [
    
        {
            id: 1,
            name: 'Parinya',
            Age: 22,
            skill: 'Html',
        },

        {
            id: 2,
            name: 'Duangklang',
            Age: 20,
            skill: 'CSS',
        },

        {
            id: 3,
            name: 'Aof',
            Age: 12,
            skill: 'JS',
        }
    ];

    // เวลา render list item ด้วยการ map นั้น 
    // react แนะนำว่า item แต่ละตัวควรมี props ที่ชื่อว่า key และ value ที่ props ต้องมีความ unique 
    // ซึ่งในที่นี้เราจะใช้ id เป็น key เนื่องจากค่ามีความ unique
    // การใช้ key จะช่วยให้ react สามารถแยกแยะได้ว่า item  ตัวไหนมีการเปลี่ยนแปลง ถูกเพิ่ม หรือ remove
    const personList = persons.map(person => <Person key={person.id} person={person} /> );

    return (
        <div>
            {personList}
        </div>
    )

}

export default NameList;