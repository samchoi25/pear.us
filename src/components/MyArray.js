import TypeRenderHelper from './TypeRenderHelper';
import ButtonHeader from './ButtonHeader';
import { useState } from 'react';

function MyArray({
    data=[],
    keyName
}) {

    const [shown, setShown] = useState(true);

    const handleClick = e => {
        e.preventDefault();
        setShown(prev => !prev);
    }

    return (
    <>
        <ButtonHeader
            handleClick={handleClick}
            keyName={keyName}
            data={data}
            shown={shown}
        />
        {shown && (
            <ul className='my-array'>
                {data.map((x, index) => 
                <li key={index}>
                    <TypeRenderHelper data={x} keyName={index} />
                </li>
                )}
            </ul>

        )}

    </>
    );
}

export default MyArray;
