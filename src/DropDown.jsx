export default function DropDown({handleExpandStatus,setExpandStatus, expandStatus, defaultTextStatus,dropDownDataStatus, handleDropDownTextStatus}) {
    return (
        <>
        <div onClick={handleExpandStatus} onMouseLeave={() => setExpandStatus(false)} className="relative border border-2 w-28  text-center">
            {defaultTextStatus}
            <div className="absolute inset-0 top-6 w-full  ">
                {expandStatus &&
                    <div className="  bg-gray-100 border-2 border-gray-800">
                        <div>{dropDownDataStatus.map((item) => (
                            <div key={item.key} onClick={() => handleDropDownTextStatus(item.data)} >
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
