import MyObject from "./MyObject";
import MyArray from "./MyArray";


function TypeRenderHelper({
    data,
    keyName
}) {
    if(Array.isArray(data)) {
        return <MyArray data={data} keyName={keyName}/>
    }

    if(typeof data === 'object' && data !== null) {
        return <MyObject object={data} keyName={keyName} />
    }


    return <span>- {keyName} ({typeof data}): {data}</span>   
}

export default TypeRenderHelper;