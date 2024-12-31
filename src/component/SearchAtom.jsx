import SearchInputAtom from "./searchAtom/SearchInputAtom"

const SearchAtom = ()=>{

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
    return (
        <>
            <SearchInputAtom/>
        </>
    )
}
export default SearchAtom

// data in this component 
// searching in searching Component 