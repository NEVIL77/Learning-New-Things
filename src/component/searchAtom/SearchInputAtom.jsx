const SearchInputAtom = ({ handleType, searchValue }) => {
    return (
        <>
            <input type="text" className="border border-grey-900 bg-grey-700 rounded-lg px-4 py-2" placeholder="Search here..." onChange={handleType} value={searchValue} />
        </>
    )
}
export default SearchInputAtom