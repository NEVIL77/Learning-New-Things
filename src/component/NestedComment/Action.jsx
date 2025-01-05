import { useEffect } from "react"

const Action = ( { handleClick , type, className } ) => {
    useEffect(()=>{
        console.log(">>",type)
    },[])
    return (
        <>
            <div 
                className={className}
                onClick={handleClick} 
            > {type} </div>
        </>
    )
}

export default Action