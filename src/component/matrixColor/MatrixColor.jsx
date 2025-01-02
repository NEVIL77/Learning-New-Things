import { useEffect, useState } from "react"

let order = 1
const MatrixColor = () => {

    
    const renderBox = (isState = false) => {
        const boxAofObj = []
        const box = [0, 1, 2].map((i) => {
            return [0, 1, 2].map((j) => {
                
                if (!(i == 1 && j > 0)) {
                    
                    if(isState){
                        return boxAofObj.push( { i : i,j : j , isChecked : false , order : null } )
                    }
                    return <div style={{background : boxState.find((obj)=> obj.i==i && obj.j==j ).isChecked && 'green' }} className="box" onClick={()=>handleClick(i,j)}></div>
                    // return <div style={{background : boxState.find((obj)=> obj.i==i && obj.j==j ).isChecked ? 'green' : 'white' }} className={`box ${boxState.find((obj)=> obj.i==i && obj.j==j ).isChecked ? 'bg-green-500' : 'bg-white'}`} key={`${i}${j}`} onClick={()=>handleClick(i,j)}></div>
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
    const isEveryGreen = boxState.every((obj)=> obj.isChecked == true)

    useEffect(()=>{

        if(isEveryGreen){
            boxState.sort((a,b)=> a.order - b.order)

            // boxState.forEach( (obj,index)=>{
            //     const data = [...boxState]
            //     return setTimeout(()=>{
            //         data[index].isChecked = false
            //         setBoxState(data)
            //     },1000*(index+1))
            // })

            boxState.forEach((obj, index) => {
                setTimeout(() => {
                    setBoxState((prevState) => {
                        const newState = [...prevState];
                        newState[index] = { ...newState[index], isChecked: false };
                        return newState;
                    });
                }, 1000 * (index + 1));
            });
        }
    },[boxState,isEveryGreen])


    const handleClick = (i,j)=>{

        setBoxState( boxState.map((obj) =>(
            obj.i == i && obj.j == j ? 
                {...obj,isChecked : true ,order : order} : 
                obj
        )))
        order++

         
        // const click = boxState.find((obj)=> obj.i == i && obj.j == j)
        // if(click.isChecked == false){
        //     click.isChecked = true
        //     click.order = order
        //     setOrder((order)=> order+1)
        // }
    }

    return (
        <>
            <div className="box-container">
                    {renderBox()}
            </div>
        </>
    )
}
export default MatrixColor

// problem link :- https://www.youtube.com/watch?v=HPnGF2qIwWQ&list=PLOfzxGau1V5XoFTrzwmdb3uhUtn8nJDNE&index=2&ab_channel=xplodivity

// STEP TO SOLVE THE PROBLEM 
// 1. make a square box of 7 ( 7- 29 )
// 2. make a state to maintain the is checked or not and mataintng the order ( 31 )
// 3. on click updating the isCheck key state and order of the box ( 17 60->70 )
// 4. if every box is green then sort the box by order ( useEffect )
// 5. if every box is green then uncheck all the box ( this this is main )

// Approach 
// 1. Create a function that returns an array of arrays and render the boxes
// 2. make box green on click of the box
// 3. making box state 
// 4. we have to rember the order of the click and maintaing the click state  


// question 
// 1. how can i render the boxes
// 2. how can i make the box green on click ( How can i dynamiclly changes the color of the boxe)
// 3. if every checkbox is checked then how can i changes the color of the box 
