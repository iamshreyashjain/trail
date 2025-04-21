export default function DataMapper({data, handleDelete}){

    return(
        <>
               {data.map((item)=>(
                <div key={item.key} className=" grid grid-cols-3 justify-between m-3">
                    <div className= {item.gender === "male" ? "bg-blue-400" : "bg-pink-400" } >{item.name}  </div>
                    <div className=" w-full">
                            {item.status === "completed" &&
                                <h1 className="text-green-300 bg-gray-500  text-center">{item.status}</h1>    
                            }
                            {item.status === "incompleted" &&
                                <h1 className="text-red-400 bg-gray-500  text-center">{item.status}</h1>    
                            }
                            <h1 className="text-center">{item.size}</h1>
                    </div>
                    <button onClick={()=>handleDelete(item.key)} className="border bg-gray-100 border-2  w-24 mx-auto">Delete</button>
                </div>
            ))}
        </>
    )
}