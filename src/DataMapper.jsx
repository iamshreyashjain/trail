export default function DataMapper({data, handleDelete}){

    return(
        <>
               {data.map((item)=>(
                <div key={item.key} className="text-xl grid grid-cols-3 justify-between px-3">
                    <span className= {item.gender === "male" ? "bg-blue-400" : "bg-pink-400" } >{item.name}  </span>
                    <div>
                            {item.status === "completed" &&
                                <h1 className="text-green-300 bg-gray-500 px-3 text-center">{item.status}</h1>    
                            }
                            {item.status === "incompleted" &&
                                <h1 className="text-red-400 bg-gray-500 px-3 text-center">{item.status}</h1>    
                            }
                    </div>
                    <button onClick={()=>handleDelete(item.key)} className="border border-2 p-1 m-1 w-24 mx-auto">Delete</button>
                </div>
            ))}
        </>
    )
}