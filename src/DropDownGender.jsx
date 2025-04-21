export default function DropDownGender({handleExpanGender, setExpandGender, defaultTextGender, expandGender, dropDownDataGender, handleDropDownTextGender}) {
    return (
        <>
            <div onClick={handleExpanGender} onMouseLeave={() => setExpandGender(false)} className="relative border border-2 w-28  text-center">
                {defaultTextGender}
                <div className="absolute inset-0 top-6 w-full  ">
                    {expandGender &&
                        <div className="  bg-gray-100 border-2 border-gray-800">
                            <div>{dropDownDataGender.map((item) => (
                                <div key={item.key} onClick={() => handleDropDownTextGender(item.gender)} >
                                    {item.gender}
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