import './App.css'
import { useEffect ,useState} from 'react'
// import NestedComment from './component/NestedComment/NestedComment'
// import Search from './component/Search'
// import SearchAtom from './component/SearchAtom'
// import MatrixColor from './component/matrixColor/matrixColor'
import explorer from './data/folderJSON'
import Folder from './component/folder/FolderStructure'
import useTraverseTree from './component/folder/hooks/useTraverseTree'
// const comments = {
//   id: 1,
//   iteams: [
//     {
//       id: 11,
//       name: 'hello',
//       iteams: [
//         {
//           id: 12,
//           name: 'hello2',
//           iteams: [
//             {
//               id: 123,
//               name: 'hello3',
//               iteams: []
//             }
//           ]
//         }
//       ]
//     }, {
//       id: 2,
//       name: 'hello',
//       iteams: []
//     },
//     {
//       id: 3,
//       name: 'hello',
//       iteams: [
//         {
//           id: 31,
//           name: 'hello2',
//           iteams: []
//         }
//       ]
//     }
//   ]
// }

function App() {

  // ! 5 ---- Nested Comment Part ----
  // const [commentData,setCommentData] = useState(comments)
  // -----------------------------

  const [explorerData, setExplorerData] = useState(explorer)

  const { insertNode } = useTraverseTree()

  const handleInsertNode = (folderId,item,isFolder)=>{
    const finalTree = insertNode( explorer,folderId,item,isFolder)
    setExplorerData(finalTree)
  }

  //! 5 ------------------------------------

  useEffect(()=>{

  },[])

  return (
    <>
      {/* <SearchAtom/> */}
      {/* <MatrixColor /> */}
      {/* <FilterLetterbyLetter/> */}
      {/* <NestedComment commentData={commentData} /> */}
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData}/> 
    </>
  )
}

export default App