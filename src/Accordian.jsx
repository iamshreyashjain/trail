import { useState } from "react"

export default function Accordian(){

    const [activeIndex, setactiveIndex] = useState(null);
    const accordianData = [
        {key: 0, val: "hello", content : "Link_0"},
        {key: 1, val: "hello", content : "Link_1"},
        {key: 2, val: "hello", content : "Link_2"},
        {key: 3, val: "hello", content : "Link_3"},
    ]

    const handleToggle = (id) =>{
        setactiveIndex(prev =>(prev === id ? null : id ))
    }
 
    return(
        <>
        <div>
            {accordianData.map((item)=>(
                <div key={item.key} className="m-3">
                    <div className="flex justify-between p-3">
                        <span className="">{item.val}</span>
                        <button onClick={()=>handleToggle(item.key)}>Click</button>
                    </div>
                    {activeIndex === item.key && <div>{item.content}</div>}
                    </div>
            ))}
        </div>
        </>
    )}