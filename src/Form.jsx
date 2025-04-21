export default function Form({handleSubmit, inputText, handleChange}){
    return(
        <>
         <form onSubmit={handleSubmit}>
                    <input type="text" className="border-2 m-1 p-1 rounded-md" value={inputText} placeholder="Add Text" onChange={handleChange} />
            <button>Add</button>
        </form>
        </>
    )
}