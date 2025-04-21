import { useRef, useState } from "react"
import DataMapper from "./DataMapper";

export default function App() {
    const data = [
        {
            key: 1,
            status: 'completed',
            name: "Food",
            gender: "male",
            size : "M"
        },
        {
            key: 2,
            status: 'completed',
            name: "Mute",
            gender: "female",
            size : "L"
        },
        {
            key: 4,
            status: 'incompleted',
            name: "Sweet",
            gender: "male",
            size : "L"
        },
        {
            key: 5,
            status: 'incompleted',
            name: "Kins",
            gender: "male",
            size : "S"
        },
        {
            key: 6,
            status: 'completed',
            name: "Food",
            gender: "female",
            size : "S",
        },
        {
            key: 7,
            status: 'completed',
            name: "Mute",
            gender: "male",
            size : "S",
        },
        {
            key: 8,
            status: 'incompleted',
            name: "Cute",
            gender: "female",
            size : "M"
        },
        {
            key: 9,
            status: 'incompleted',
            name: "Sweet",
            gender: "male",
            size : "M",
        },
        {
            key: 10,
            status: 'incompleted',
            name: "Iins",
            gender: "female",
            size : "L",
        },
        {
            key: 11,
            status: 'incompleted',
            name: "Pins",
            gender: "female",
            size : "L",
        },
        {
            key: 12,
            status: 'completed',
            name: "Vins",
            gender: "female",
            size : "S",
        },
        {
            key: 13,
            status: 'incompleted',
            name: "Bins",
            gender: "male",
            size : "M",
        },
        {
            key: 14,
            status: 'completed',
            name: "Dins",
            gender: "female",
            size : "L",
        },
    ]

    const originalData = useRef(data);

    const [dataState, setdataState] = useState(data);
   
    const [filterOptions, setFilterOptions] = useState({
        gender: '',
        status: '',
        size : ''
    });

    const applyFilters = (gender, status, size) => {
        const filtered = originalData.current.filter(item => {
            // !gender means none of the gender has been selected therefore it remain nuteral for all the genders
            const genderMatch = gender === item.gender || !gender; 
            const statusMatch = status === item.status || ! status;
            const sizeMatch = size === item.size || !size
            return genderMatch && statusMatch && sizeMatch;
        });
        setdataState(filtered);
    };
    //customDropDown
    const dropDownData = [
        {
            key: 1,
            status: "completed"
        },
        {
            key: 2,
            status: "incompleted"
        },
    ]
    
    //customDropDownText - Status
    const [defaultText, setdefaultText] = useState("Status Filter ")
    //customDropDownText-EXPAND - Status
    const [expand, setExpand] = useState(false);
    
    //ButtonToExpand - Status
    const handleExpand = () => {
        setExpand(!expand)
    }
    
    //toHandleDropDown-TEXT - Status
    const handleDropDownText = (status) => {
        setExpand(false);
        setdefaultText(status);
        // why we are not using key and then value how directly it will works for status?
        //a//is completely valid JavaScript due to a modern syntax feature called shorthand property names.
        // When the key and variable name are the same, you can omit the key like this:
        
        // EXAMPLE : 1
        // let a = 1;
        // let obj = { a };  // same as { a: 1 }
        
        //q // Here we are using spread operator to fetch previous data and also the data we get, 
        //the value get directly assign to its respective key. 
        const updatedFilters = { ...filterOptions, status };
        
        // Here’s the step-by-step:
        // ...filterOptions copies the previous object.
        // status is shorthand for status: status, so it updates or adds the status key.    
        // If the same key (status) exists in both filterOptions and the object being created, the later one wins (i.e. gets overwritten).
        
        setFilterOptions(updatedFilters);
        applyFilters(updatedFilters.gender, status , updatedFilters.size);
    };


    //customDropDown-Gender
    const dropDownDataGender = [
        {
            key: 1,
            gender: "male"
        },
        {
            key: 2,
            gender: "female"
        },
    ]
    //customDropDownText-Gender
    const [defaultTextGender, setdefaultTextGender] = useState("Gender Filter")
    //customDropDownText-EXPAND
    const [expandGender, setExpandGender] = useState(false);
    //ButtonToExpand
    const handleExpanGender = () => {
        setExpandGender(!expandGender)
    }
    //toHandleDropDown-TEXT

    const handleDropDownTextGender = (gender) => {
        setExpandGender(false);
        setdefaultTextGender(gender);

        const updatedFilters = { ...filterOptions, gender };
        setFilterOptions(updatedFilters);
        applyFilters(gender, updatedFilters.status, updatedFilters.size);
    };


    //customDropDown-SIZE
    const dropDownDataSize = [
        {
            key: 1,
            size: "S"
        },
        {
            key: 2,
            size: "M"
        },
        {
            key: 3,
            size: "L"
        },
    ]
    //customDropDownText-Size
    const [defaultTextSize, setdefaultTextSize] = useState("Size Filter")
    //customDropDownText-EXPAND-Size
    const [expandSize, setExpandSize] = useState(false);
    //ButtonToExpand
    const handleExpandSize = () => {
        setExpandSize(!expandSize)
    }
    //toHandleDropDown-TEXT

    const handleDropDownTextSize = (size) => {
        setExpandSize(false);
        setdefaultTextSize(size);
    
        const updatedFilters = { 
            ...filterOptions, 
            size: size || "", 
            gender: filterOptions.gender || "", 
            status: filterOptions.status || "" 
        };
    
        setFilterOptions(updatedFilters);
        applyFilters(updatedFilters.gender, updatedFilters.status, size);
    };

    const handleResetStatus = () => {
        setdefaultText("Status Filter");

        const updatedFilters = { ...filterOptions, status: '' };
        setFilterOptions(updatedFilters);

        applyFilters(updatedFilters.gender, updatedFilters.status, updatedFilters.size);
    };

    const handleResetGender = () => {
        setdefaultTextGender("Gender Filter");

        const updatedFilters = { ...filterOptions, gender: '' };
        setFilterOptions(updatedFilters);

        applyFilters(updatedFilters.gender, updatedFilters.status, updatedFilters.size);
    };

    const handleResetSize = () => {
        setdefaultTextSize("Size Filter");

        const updatedFilters = { ...filterOptions, size: '' };
        setFilterOptions(updatedFilters);

        applyFilters(updatedFilters.gender, updatedFilters.status, updatedFilters.size);
    };

    //A reset Button
    const resetButton = () => {
        setdataState(originalData.current);
        setdefaultText("Status Filter");
        setdefaultTextGender("Gender Filter");
        setdefaultTextSize("Size Filter");
        setFilterOptions({ gender: '', status: '' , size : ''});
    };


    const handleDelete = (id) => {
        const newData = dataState.filter((item) => item.key !== id)
        setdataState(newData)
    }

    const [inputText, setinputText] = useState("");

    const handleChange = (e) => {
        const name = (e.target.value);
        setinputText(name)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newValue = {
            key: dataState.length + 1,
            status: 'incompleted',
            name: inputText,
            gender: 'male'
        };
        const updatedData = [...dataState, newValue]
        setdataState(updatedData)
        setinputText("")
    }


    return (
        <>
            <div className="flex gap-3 m-1 ">
                <div>
                    <div className="flex gap-3">
                        <div onClick={handleExpand} onMouseLeave={() => setExpand(false)} className="relative border border-2 w-28  text-center">
                            {defaultText}
                            <div className="absolute inset-0 top-6 w-full  ">
                                {expand &&
                                    <div className="  bg-gray-100 border-2 border-gray-800">
                                        <div>{dropDownData.map((item) => (
                                            <div key={item.key} onClick={() => handleDropDownText(item.status)} >
                                                {item.status}
                                            </div>
                                        ))}
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>

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
                    </div>

                </div>
                <div className="border-2 w-24 text-center" onClick={resetButton}>Reset</div>
            </div>

            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" className="border-2 m-1 p-1 rounded-md" value={inputText} placeholder="Add Text" onChange={handleChange} />
                    <button>Add</button>
                </form>
            </div>
            <div className="flex gap-2 ">
            {filterOptions.status && <div className="m-2">
                    <button className="border bg-red-400 border-red-600 text-white border-2  w-32 mx-auto" onClick={handleResetStatus}>Reset Status</button>
                </div>
                }
                {filterOptions.gender && <div className="m-2">
                    <button className="border bg-purple-400 border-purple-600 text-white border-2  w-32 mx-auto" onClick={handleResetGender}>Reset Gender</button>
                </div>
                }
                {filterOptions.size && <div className="m-2">
                    <button className="border bg-blue-400 border-blue-600 text-white border-2  w-32 mx-auto" onClick={handleResetSize}>Reset Size</button>
                </div>
                }
                </div>
            <DataMapper data={dataState} handleDelete={handleDelete} />
        </>
    )
}