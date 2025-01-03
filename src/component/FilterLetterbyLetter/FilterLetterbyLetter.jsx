import { data } from "autoprefixer";
import React, { useEffect, useState } from "react"

const users = [
    { id: 1, name: 'Al' },
    { id: 2, name: 'Ali' },
    { id: 3, name: 'rla' },
    { id: 4, name: 'ble' },
    { id: 5, name: 'clf' },
    { id: 6, name: 'Alg' },
    { id: 7, name: 'Allh' },
    { id: 8, name: 'Alrk' },
    { id: 9, name: 'Alal' },
    { id: 10, name: 'Alsm' }
];
let resLength = 0
const FilterLetterbyLetter = ()=>{

    const [result,setResult] = useState([])
    useEffect(()=>{
    },[result])

    const handleSearch = (e) => {
        const search = e.target.value.trim().toLowerCase();

        console.log(">>",search)
        if (search != '') {

            const response = users.filter((obj) => {
                if(obj.name.toLowerCase().startsWith(search)){
                    resLength = search.length
                    return obj.name.toLowerCase().startsWith(search)
                }
                else{
                    return obj.name.toLowerCase().startsWith(search.substring(0,resLength))
                }
            });
            setResult(response);
        } else {
            setResult(users);
        }
    };

    return (
    <>
        <div>Hello Search Input Things</div>
        <input 
            type="text" 
            placeholder="Search here..." 
            onChange={handleSearch} 
            className="border"
        />

        {result.length > 0 ? (
            result.map((res, index) => (
                <div key={index}>{res.name}</div>
            ))
        ) : (
            <div>No Results Found</div>
        )}
    </>
)
}

export default FilterLetterbyLetter

// two way to find the result 
// 1.search thing presenent inside the long word
// 2. search thing starting with the word 
//    ->  match with the name and if dont match then return the thing which is match 