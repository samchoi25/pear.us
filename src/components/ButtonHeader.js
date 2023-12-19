function ButtonHeader({
    handleClick = () => {},
    keyName,
    data,
    shown
}) {
    const type = Array.isArray(data) ? 'array' : typeof data;
    return (
        <div className="button-header">
            {keyName} ({type}): 
            <button
                onClick={handleClick}
            >
                {shown ? '-' : '+'}
            </button>
        </div>
    )
}

export default ButtonHeader;