export default function DropDown({handleExpand, setExpand, expandDropDown, defaultText, dropDownData, handleDropDown}) {
    return (
        <>
        <div onClick={handleExpand} onMouseLeave={() => setExpand(false)} className="relative border border-2 w-28  text-center">
            {defaultText}
            <div className="absolute inset-0 top-6 w-full  ">
                {expandDropDown &&
                    <div className="  bg-gray-100 border-2 border-gray-800">
                        <div>{dropDownData.map((item) => (
                            <div key={item.key} onClick={() => handleDropDown(item.data)} >
                                {item.data}
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
