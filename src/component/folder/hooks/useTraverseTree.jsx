const useTraverseTree = ()=>{

    // Todo here
    // tree     -> folderJSON which is an Object
    // folderID -> parent Folder id where thing add
    // item     -> Content
    // folder ? -> folder chhe k file 
    function insertNode( tree , folderID , item , isFolder ){  // thing function take
        if(tree.id === folderID && tree.isFolder ){            // top postion checking and folder  
            tree.items.unshiwft({
                id : new Date().getTime(),
                name : item ,
                ifFolder : isFolder , 
                items : []
            })
        }
        return tree
    }
    return ( insertNode )
}
export default useTraverseTree;