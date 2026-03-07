import './App.css'
import { useEffect ,useState} from 'react'

// ---- React Form Hook ----
// import ReactFormHook from './component/react-form-hook/ReactFormHook'
// import ReactYulpForm from './component/reactYulpForm/ReactYulpForm'
import ProductCart from './component/product-cart/ProductCart'
// -----------------------------

// import NestedComment from './component/NestedComment/NestedComment'
// import Search from './component/Search'
// import SearchAtom from './component/SearchAtom'
// import MatrixColor from './component/matrixColor/matrixColor'

// ---- Folder and File Part ----
// import explorer from './data/folderJSON'
// import Folder from './component/folder/FolderStructure'
// -----------------------------

// import comments from "./utils/commentsData"

function App() {

  // ---- Nested Comment Part ----
  // const [commentData,setCommentData] = useState(comments)
  // -----------------------------
  
  // ---- Folder and File Part ----
  // const [explorerData, setExplorerData] = useState(explorer)
  // -----------------------------
  
  
  useEffect(()=>{
    
  },[])
  
  return (
    <>
      {/* <SearchAtom/> */}
      {/* <MatrixColor /> */}
      {/* <FilterLetterbyLetter/> */}
      {/* <NestedComment commentData={commentData} /> */}

      {/* // ---- Folder and File Part ---- */}
      {/* <Folder explorer={explorerData}/> */}
      {/* // ----------------------------- */}

      {/* // ---- React Form Hook---- */}
      {/* <ReactFormHook/> */}
      {/* // ----------------------------- */}

      {/* // ---- React Form with YULP---- */}
      {/* <ReactYulpForm/> */}
      {/* // ----------------------------- */}

      {/* // ---- PRODUCT CART ---- */}
      <ProductCart/>
      {/* // ----------------------------- */}
    </>
  )
}

export default App