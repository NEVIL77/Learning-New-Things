import { useEffect, useState } from "react"

const MatrixColor = () => {

    
    const renderBox = (isState = false) => {
        const boxAofObj = []
        const box = [0, 1, 2].map((i) => {
            return [0, 1, 2].map((j) => {
                
                if (!(i == 1 && j > 0)) {
                    
                    if(isState){
                        return boxAofObj.push( { i : i,j : j , isChecked : false , order : null } )
                    }
                    return <div className={`box ${boxState.find((obj)=> obj.i==i && obj.j==j ).isChecked ? 'bg-green-500' : ''}`} key={`${i}${j}`} onClick={()=>handleClick(i,j)}></div>
                }
                return <div></div>
                
            })
        })

        if(isState){
            return boxAofObj
        }
        return box
    }
    
    const [boxState,setBoxState] = useState(renderBox(true))
    const [order,setOrder] = useState(1)
    useEffect(()=>{
        console.log(">>boxState",boxState)
    },[boxState])

    const isEveryGreen = boxState.every((obj)=> obj.isChecked == true)

    const handleClick = (i,j)=>{
        console.log(" >>" , i , j )
        const click = boxState.find((obj)=> obj.i == i && obj.j == j)
        if(click.isChecked == false){
            click.isChecked = true
            click.order = order
            setOrder((order)=> order+1)
        }
    }

    return (
        <>
            <h1>Working</h1>
            <div className="box-container">
                    {renderBox()}
            </div>
        </>
    )
}
export default MatrixColor

// Approach 
// 1. Create a function that returns an array of arrays and render the boxes
// 2. make box green on click of the box
// 3. making box state 
// 4. we have to rember the order of the click and maintaing the click state  


// question 
// 1. how can i render the boxes
// 2. how can i make the box green on click ( How can i dynamiclly changes the color of the boxe)
