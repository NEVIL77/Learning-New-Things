const MatrixColor = () => {

    const renderBox = () => {
        const box = [0, 1, 2].map((i) => {
            return [0, 1, 2].map((j) => {

                if (!(i == 1 && j > 0)) {
                    return <div className="box" key={`${i}${j}`}></div>
                }
                return <div></div>

            })
        })
        return box
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
// 3. we have to rember the order of the click and maintaing the click state  


// question 
// 1. how can i render the boxes
// 2. how can i make the box green on click ( How can i dynamiclly changes the color of the boxe)
