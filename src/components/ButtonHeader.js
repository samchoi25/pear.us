function ButtonHeader({
    handleClick = () => {},
    headerText,
    shown,
}) {
    const buttonTitle = shown ? "Collapse": "Expand";
    const buttonText = shown ? "-": "+";
    const buttonAriaLabel = `${buttonTitle} ${headerText}`;

    return (
        <div className="button-header">
            {headerText}: 
            <button
                aria-label={buttonAriaLabel}
                onClick={handleClick}
                title={buttonTitle}
            >
                {buttonText}
            </button>
        </div>
    );
}

export default ButtonHeader;
