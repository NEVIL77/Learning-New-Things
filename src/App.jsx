import './App.css'
import { useEffect ,useState} from 'react'
// import NestedComment from './component/NestedComment/NestedComment'
// import Search from './component/Search'
// import SearchAtom from './component/SearchAtom'
// import MatrixColor from './component/matrixColor/matrixColor'
import explorer from './data/folderJSON'
import Folder from './component/folder/FolderStructure'
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

  // ---- Nested Comment Part ----
  // const [commentData,setCommentData] = useState(comments)
  // -----------------------------

  const [explorerData, setExplorerData] = useState(explorer)


  useEffect(()=>{

  },[])

  return (
    <>
      {/* <SearchAtom/> */}
      {/* <MatrixColor /> */}
      {/* <FilterLetterbyLetter/> */}
      {/* <NestedComment commentData={commentData} /> */}
      <Folder explorer={explorerData}/>
    </>
  )
}

export default App