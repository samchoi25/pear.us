import { useState } from 'react';
import cn from 'classnames';

import DataSet from './DataSet';
import ButtonHeader from './ButtonHeader';

function MyObject({
    object = {},
    name,
}) {

    const [shown, setShown] = useState(true);

    const handleClick = e => {
        e.preventDefault();
        setShown(prev => !prev);
    }

    const dataTypeLabel = Array.isArray(object)
        ? 'array'
        : typeof object;
    const headerText = `${name} (${dataTypeLabel})`;

    return (
        <>
            <ButtonHeader
                handleClick={handleClick}
                headerText={headerText}
                data={object}
                shown={shown}
            />
            {
            shown && (
            <ul className={cn('my-object', {
                'my-array': Array.isArray(object)
            })}>
                {
                Object.keys(object).map((key, index) => (
                    <DataSet 
                        data={object[key]}
                        key={`${key}-${index}`}
                        name={key} />
                ))
                }
            </ul>)
            }
        </>
    );
}

export default MyObject;
