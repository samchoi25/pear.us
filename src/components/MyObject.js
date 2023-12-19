import TypeRenderHelper from './TypeRenderHelper';
import ButtonHeader from './ButtonHeader';
import { useState } from 'react';

function MyObject({
    object = {},
    keyName,
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
            data={object}
            shown={shown}
        />
        {
        shown && (
        <ul className='my-object'>
            {
            Object.keys(object).map((key, index) => (
                <li key={index}>
                    <TypeRenderHelper data={object[key]} keyName={key} index={index}/>
                </li>
            ))
            }
        </ul>)
        }
    </>
    );
}

export default MyObject;
