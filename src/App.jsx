import { useRef, useState } from "react"
import DataMapper from "./DataMapper";

export default function App() {
    const data = [  
        {
            key: 1,
            status: 'completed',
            name: "Food",
            gender: "male",
        },
        {
            key: 2,
            status: 'completed',
            name: "Mute",
            gender: "female",
        },
        {
            key: 3,
            status: 'incompleted',
            name: "Cute",
            gender: "male",

        },
        {
            key: 4,
            status: 'incompleted',
            name: "Sweet",
            gender: "male",

        },
        {
            key: 5,
            status: 'incompleted',
            name: "Kins",
            gender: "male",
        },
        {
            key: 6,
            status: 'completed',
            name: "Food",
            gender: "female",
        },
        {
            key: 7,
            status: 'completed',
            name: "Mute",
            gender: "male",
        },
        {
            key: 8,
            status: 'incompleted',
            name: "Cute",
            gender: "female",
        },
        {
            key: 9,
            status: 'incompleted',
            name: "Sweet",
            gender: "male",
        },
        {
            key: 10,
            status: 'incompleted',
            name: "Kins",
            gender: "female",
        },
    ]

    const originalData = useRef(data); 

    const [dataState, setdataState] = useState(data);
    
    const [filterOptions, setFilterOptions] = useState({
        gender: '',
        status: ''
    });

    const applyFilters = (gender, status) => {
        const filtered = originalData.current.filter(item => {
            const genderMatch = gender ? item.gender === gender : true;
            const statusMatch = status ? item.status === status : true;
            return genderMatch && statusMatch;
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
    //customDropDownText
    const [defaultText, setdefaultText] = useState("Filter Data")
    //customDropDownText-EXPAND
    const [expand, setExpand] = useState(false);
    //ButtonToExpand
    const handleExpand = () => {
        setExpand(!expand)
    }
    //toHandleDropDown-TEXT
    const handleDropDownText = (status) => {
        setExpand(false);
        setdefaultText(status);
        const updatedFilters = { ...filterOptions, status };
        setFilterOptions(updatedFilters);
        applyFilters(updatedFilters.gender, status);
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
        applyFilters(gender, updatedFilters.status);
    };


    //A reset Button
    const resetButton = () => {
        setdataState(originalData.current);
        setdefaultText("Filter Data");
        setdefaultTextGender("Gender Filter");
        setFilterOptions({ gender: '', status: '' });
    };
    

    const handleDelete = (id) => {
        const newData = dataState.filter((item) => item.key !== id)
        setdataState(newData)
    }

    const [inputText, setinputText] = useState("");

    const handleChange = (e) =>{
       const name = (e.target.value);
       setinputText(name)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newValue = {
            key: dataState.length + 1,
            status: 'incompleted',
            name: inputText,
            gender : 'male'
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
                <div onClick={handleExpand} onMouseLeave={()=>setExpand(false)} className="relative border border-2 w-28  text-center">
                    {defaultText}
                    <div className="absolute inset-0 top-6 w-full  ">
                        {expand &&
                            <div className="  bg-gray-100 border-2 border-gray-800">
                                <div>{dropDownData.map((item) => (
                                    <div key={item.key} onClick={()=>handleDropDownText(item.status)} >
                                        {item.status}
                                    </div>
                                    ))}
                                </div>
                            </div>
                        }
                    </div>
                </div>

                <div onClick={handleExpanGender} onMouseLeave={()=>setExpandGender(false)} className="relative border border-2 w-28  text-center">
                    {defaultTextGender}
                    <div className="absolute inset-0 top-6 w-full  ">
                        {expandGender &&
                            <div className="  bg-gray-100 border-2 border-gray-800">
                                <div>{dropDownDataGender.map((item) => (
                                    <div key={item.key} onClick={()=>handleDropDownTextGender(item.gender)} >
                                        {item.gender}
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
            <DataMapper data={dataState} handleDelete={handleDelete} />
        </>
    )
}