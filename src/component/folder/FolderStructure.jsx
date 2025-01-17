import { useEffect, useState } from "react"
import "./style.css";
import useTraverseTree from "./hooks/useTraverseTree";

const Folder = ({ handleInsertNode , explorer }) => {

    const [expane, setExpane] = useState(false); // state to expand folder Basically Folder Expand and all
    const [showInput,setShowInput] = useState({  // for input field
        visible : false ,
        isFolder : null
    })
    const handleNewFolder = (e , isFolder) => { // this is use to show and hide the input field
        e.stopPropagation()                     // this is use to stop the event from bubbling up ( child button click which invoke the parents click event )
        setExpane(true)
        // if(showInput.visible && showInput.isFolder === isFolder) {
        //     const config = {
        //         visible : false ,                    // this is use to show the input field
        //         isFolder : null                 // this is use to make sure folder is there or not
        //     }
        // }
        // else{
            setShowInput({
                visible : true ,
                isFolder : isFolder
            })
        // }

    }

    const onAddFolder = (e)=>{
        if(e.keyCode == 13 && e.target.value){                   // if enter key is press and input is not empty then 
            // folder/file add algorithem logic here where this is tree algorithem and we traverse the tree algorithem and if we find the node then we will add the algorithem 
            handleInsertNode( explorer.id , e.target.value , showInput.isFolder )
            setShowInput({...showInput,visible:false})           // close the input field which addd the folder or file 
        }
    }
    useEffect(()=>{
        console.log("showInput >>",showInput)
    },[showInput])

    if (explorer.isFolder) {
        return (
            <div className="container">
                <div className="folder" onClick={() => setExpane(!expane)}>
                    <span>{expane ? "📂" : "📁"} {explorer.name}</span>
                    <div className="g-8px d-flex mt-10px">
                        <button className="button" onClick={ (e)=>handleNewFolder(e,true) } > Add 📁 </button>
                        <button className="button" onClick={ (e)=>handleNewFolder(e,false) }> Add 📄 </button>
                    </div>
                </div>

                <div className="items" style={{ display: expane ? "block" : "none" }}>
                    { showInput.visible &&   // this is use to show the input field
                        (
                            <div className="inputContainer">
                                <span> { showInput.isFolder ? "📁" : "📄"} </span>
                                <input                                      // whern user want to add the folder or file name 
                                    type="text" 
                                    placeholder={ showInput.isFolder ? "Folder Name" : "File Name" }
                                    className="inputContainer__input"
                                    autoFocus
                                    onBlur={()=>setShowInput({...showInput,visible:false})}
                                    onKeyDown={onAddFolder}
                                />
                            </div>
                        )
                    }
                    {explorer.items?.map((exp) => (
                        <Folder explorer={exp} key={exp.id} />
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <span className="file">📄 {explorer.name}</span>
        );
    }
};

export default Folder;


// STEPs

// 1 render the first level of the data
// 2 on Click do hide and show 

// if i add the add then how can i stop the event bubbling 
// if folder is close hten how can i expand and show the input to add
// add file folder logic here