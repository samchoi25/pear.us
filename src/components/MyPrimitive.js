function MyPrimitive({
    name,
    value
}){
    return (
        <span>
            {name} ({typeof value}): {value}
        </span>
    )
}

export default MyPrimitive;
