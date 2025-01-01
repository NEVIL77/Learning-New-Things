import { useEffect, useState } from "react"

const Search = () =>{

    const data = [
        {
            name :"Apple",
            email : "apple@gmail.com"
        },
        {
            name :"banana",
            email : "banana@gmail.com"
        },
    ]
    const [result,setResult] = useState([])
    const [search,setSearch] = useState('')

    useEffect(()=>{
        console.log(">>>",search)
    },[search])

    const handleKeyDown = (event)=>{
        const searchValue = event.target.value.toLowerCase()
        setSearch(event.target.value);
        if(searchValue ===''){
            setResult([])
        }
        else{
            const searchResult = data?.filter((obj)=> obj.name.toLowerCase().includes(searchValue))
            setResult(searchResult)
        }
    }
    return (
        <>
            <h1>Hello world</h1>
            <input className="border b" type="text" onChange={(event)=>handleKeyDown(event)} value={search}/>
            
            {result.length > 0 ? 
            <>
                {result.map((obj,index)=>(
                    <ul key={index}>
                        <li> name : {obj.name }</li>
                        <li> email : { obj.email}</li>
                    </ul>
                ))}
            </> : 
            <>
                {search !== '' ? 
                    <>
                        <div>data not found</div>                    
                    </> :
                    <>
                        <div>Search for Result</div>
                    </>
                }
            </>}
        </>

    )
}
export default Search