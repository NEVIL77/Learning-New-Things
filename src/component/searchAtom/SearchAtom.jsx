import { useState } from "react"
import SearchInputAtom from "./SearchInputAtom"
import SearchResultAtom from "./SearchResultAtom"

const SearchAtom = ()=>{

    const [result,setResult] = useState([])
    const [searchValue, setSearchValue] = useState('')

    const data = [
        {
            name : 'Apple',
            email : "apple@gmail.com"
        },
        {
            name : 'Banana',
            email : "Banana@gmail.com"
        },
        {
            name : 'Cucumber',
            email : "Cucumber@gmail.com"
        },
    ]

    const handleType = (event)=>{
        const search = event.target.value.toLowerCase()
        if(search == ''){
            setResult([])
            setSearchValue('')
        }
        else{
            const result= data.filter((data)=>data.name.toLowerCase().includes(search))
            setResult(result)
            setSearchValue(search)
        }
    }
    return (
        <>
            <SearchInputAtom handleType={handleType} searchValue={searchValue} />
            <SearchResultAtom result={result} searchValue={searchValue}/> 
        </>
    )
}
export default SearchAtom

// data in this component 
// searching in searching Component 