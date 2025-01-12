import { useEffect, useState } from "react";
import Action from "./Action";

const NestedComment = ({ commentData }) => {
  const [value, setValue] = useState("");
  const [comments, setComments] = useState(commentData?.iteams || []);
  const [editMode, setEditMode] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [input, setnput] = useState('');

  useEffect(() => {
    if (commentData?.iteams) {
      setComments(commentData.iteams);
    }
  }, [commentData]);

  const onAddComment = (e) => {
    e.preventDefault();
    if (value.trim() !== "") {
      const newComment = { id: comments.length + 1, name: value };
      setComments([...comments, newComment]);
      setValue("");
    }
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="block">

      {/* ADD COMMENT INPUT ND BTN */}
        <div className="flex">
            {commentData?.id === 1 ? 
                (
                    <>
                        <input
                            type="text"
                            placeholder="Comment here..."
                            autoFocus
                            onChange={handleInputChange}
                            value={value}
                            className="input"
                        />
                        <button onClick={onAddComment} className="button">Comment</button>
                    </>
                ) : 
                (
                      <>
                          <div className="comment-container">
                              <span className="comment-box">{commentData?.name}</span>
                              <div className="button-container">
                                  {editMode ? (
                                      <>
                                          <Action className="button" type="SAVE" />
                                          <Action className="button" type="CANCEL" handleClick={()=>setEditMode(false)}/>
                                      </>
                                  ) : (
                                      <>
                                          <Action className="button" type="REPLY" />
                                          <Action className="button" type="EDIT" handleClick={()=>setEditMode(true)}/>
                                          <Action className="button" type="DELETE" />
                                      </>
                                  )}
                              </div>
                          </div>
                      </>
                )
            }
        </div>
      {/* RENDERING COMMENTS HERE */}
      <div style={{paddingLeft:25 , padding : 10 }}>
        { showInput && (
            <div>
                <input 
                    type="text"
                    placeholder="Comment here..."
                    autoFocus
                    onChange={(e)=>setInput(e.target.value)}
                />
                <Action className="button" type="SUBMIT" />
                <Action className="button" type="CANCEL" handleClick={()=> setShowInput(false)} />
            </div>
        )}
        {comments?.map((comment) => (
            <NestedComment key={comment?.id} commentData={comment} />
        ))}
      </div>

    </div>
  );
};

export default NestedComment;