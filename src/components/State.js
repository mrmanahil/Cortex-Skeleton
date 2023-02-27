
import React from 'react';

export default function Counter() {
    const times = [1,2,3,4,5,6,7,8,9,10]; 
    const [multiple, setmultiplies] = React.useState(3);

    function multipleChanged(event) {
        setmultiplies(+event.target.value);
    }

        return(
            <div className='NumberMultiplication'>
                <h1>Number Is :{multiple}</h1>
                <input type="number" value={multiple} onChange={multipleChanged} min="0"/>
                <ul>
                    {times.map(time => (
                        <li key={time}>{time} x {multiple} = {time * multiple}</li>
                    ))}
                </ul>
            </div>
        )
};