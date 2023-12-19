import cn from 'classnames';
import MyObject from "./MyObject";
import MyPrimitive from "./MyPrimitive";

function DataSet({
    data,
    name,
    isRoot=false
}) {
    const isObject = typeof data === 'object' && data !== null;
    const content = isObject
        ? <MyObject object={data} name={name} />
        : <MyPrimitive name={name} value={data} />

    if(isRoot) return content;

    return (
        <li className={cn({
                'object-item': isObject
            })}
        >
            {content}
        </li>
    );
}

export default DataSet;
