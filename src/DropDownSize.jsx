export default function DropDownSize({handleExpandSize, setExpandSize, defaultTextSize, expandSize, dropDownDataSize, handleDropDownTextSize}) {
    return (
        <>
            <div onClick={handleExpandSize} onMouseLeave={() => setExpandSize(false)} className="relative border border-2 w-28  text-center">
                {defaultTextSize}
                <div className="absolute inset-0 top-6 w-full  ">
                    {expandSize &&
                        <div className="  bg-gray-100 border-2 border-gray-800">
                            <div>{dropDownDataSize.map((item) => (
                                <div key={item.key} onClick={() => handleDropDownTextSize(item.size)} >
                                    {item.size}
                                </div>
                            ))}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}
