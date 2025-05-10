import { useRef, useState } from "react"

import DataMapper from "./DataMapper";
import data from './assets/data'

import dropDownDataSize from "./assets/DropDowns/DropDownSize";
import dropDownDataGender from "./assets/DropDowns/DropDownGender";
import dropDownDataStatus from "./assets/DropDowns/DropDownStatus";

import ResetButton from "./ResetButton";

import Form from "./Form";
import DropDown from "./DropDown";



export default function App() {

    const originalData = useRef(data);

    const [dataState, setdataState] = useState(data);

    const [filterOptions, setFilterOptions] = useState({
        gender: '',
        status: '',
        size: ''
    });

    const applyFilters = (gender, status, size) => {
        const filtered = originalData.current.filter(item => {
            // !gender means none of the gender has been selected therefore it remain nuteral for all the genders
            const genderMatch = gender === item.gender || !gender;
            const statusMatch = status === item.status || !status;
            const sizeMatch = size === item.size || !size
            return genderMatch && statusMatch && sizeMatch;
        });
        setdataState(filtered);
    };

    //customDropDownText - Status
    const [defaultTextStatus, setdefaultTextStatus] = useState("Status Filter ")
    //customDropDownText-EXPAND - Status
    const [expandStatus, setExpandStatus] = useState(false);

    //ButtonToExpand - Status
    const handleExpandStatus = () => {
        setExpandStatus(!expandStatus)
    }

    //toHandleDropDown-TEXT - Status
    const handleDropDownTextStatus = (status) => {
        setExpandStatus(false);
        setdefaultTextStatus(status);
        const updatedFilters = { ...filterOptions, status };
        setFilterOptions(updatedFilters);
        applyFilters(updatedFilters.gender, status, updatedFilters.size);
    };


    //customDropDown-Gender

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
        setdefaultTextStatus("Status Filter");

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
        setdefaultTextStatus("Status Filter");
        setdefaultTextGender("Gender Filter");
        setdefaultTextSize("Size Filter");
        setFilterOptions({ gender: '', status: '', size: '' });
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
                    <div className="flex gap-3">
                        <DropDown
                            handleExpand={handleExpandStatus}
                            setExpand={setExpandStatus}
                            expandDropDown={expandStatus}
                            defaultText={defaultTextStatus}
                            dropDownData={dropDownDataStatus}
                            handleDropDown={handleDropDownTextStatus}
                        /> 
                        <DropDown
                            handleExpand={handleExpandSize}
                            setExpand={setExpandSize}
                            expandDropDown={expandSize}
                            defaultText={defaultTextSize}
                            dropDownData={dropDownDataSize}
                            handleDropDown={handleDropDownTextSize}
                        /> <DropDown
                           
                        handleExpand={handleExpanGender}
                            setExpand={setExpandGender}
                            expandDropDown={expandGender}
                            defaultText={defaultTextGender}
                            dropDownData={dropDownDataGender}
                            handleDropDown={handleDropDownTextGender}
                        />

                     
                    </div>
                <ResetButton resetButton={resetButton} />
            </div>
            <div>
                <Form handleSubmit={handleSubmit} inputText={inputText} handleChange={handleChange} />
            </div>
            <div className="flex gap-2 ">
                {filterOptions.status && <div className="m-2">
                    <button className="border bg-red-400 border-red-600 text-white border-2  w-56  mx-auto" onClick={handleResetStatus}>Reset Status : {defaultTextStatus} </button>
                </div>
                }
                {filterOptions.gender && <div className="m-2">
                    <button className="border bg-purple-400 border-purple-600 text-white border-2  w-44  mx-auto" onClick={handleResetGender} >Reset Gender :  {defaultTextGender}</button>
                </div>
                }
                {filterOptions.size && <div className="m-2">
                    <button className="border bg-blue-400 border-blue-600 text-white border-2  w-32 mx-auto" onClick={handleResetSize}>Reset Size:  {defaultTextSize}</button>
                </div>
                }
            </div>
            <DataMapper data={dataState} handleDelete={handleDelete} />
        </>
    )
}