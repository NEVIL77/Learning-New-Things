import { useEffect } from "react"

const SearchResultAtom = ({ result, searchValue }) => {
    useEffect(() => {
        console.log(">>>searchValue", searchValue)
    }, [searchValue])
    return (
        <>
            {searchValue ? (
                result.length > 0 ? (
                    result.map((data, index) => (
                        <div
                            key={index}
                            className="p-4 mb-2 bg-white border border-grey-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                        >
                            <div className="text-lg font-semibold text-grey-900">Name: {data.name}</div>
                            <div className="text-sm text-grey-600">Email: {data.email}</div>
                        </div>
                    ))
                ) : (
                    <div className="p-4 text-center text-grey-700 bg-grey-100 border border-grey-200 rounded-lg">
                        No Result Found
                    </div>
                )
            ) : (
                <div className="p-4 text-center text-grey-700 bg-grey-100 border border-grey-200 rounded-lg">
                    Search Bar is Empty
                </div>
            )}
        </>
    )
}
export default SearchResultAtom