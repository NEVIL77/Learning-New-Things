import './App.css'
import NestedComment from './component/NestedComment/NestedComment'
import { useEffect ,useState} from 'react'
// import Search from './component/Search'
// import SearchAtom from './component/SearchAtom'
// import MatrixColor from './component/matrixColor/matrixColor'

const comments = {
  id: 1,
  iteams: [
    {
      id: 11,
      name: 'hello',
      iteams: [
        {
          id: 12,
          name: 'hello2',
          iteams: [
            {
              id: 123,
              name: 'hello3',
              iteams: []
            }
          ]
        }
      ]
    }, {
      id: 2,
      name: 'hello',
      iteams: []
    },
    {
      id: 3,
      name: 'hello',
      iteams: [
        {
          id: 31,
          name: 'hello2',
          iteams: []
        }
      ]
    }
  ]
}

function App() {
  const [commentData,setCommentData] = useState(comments)
  useEffect(()=>{

  },[])

  return (
    <>
      {/* <SearchAtom/> */}
      {/* <MatrixColor /> */}
      {/* <FilterLetterbyLetter/> */}
      <NestedComment commentData={commentData} />
    </>
  )
}

export default App
