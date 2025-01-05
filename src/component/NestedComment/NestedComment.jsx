import { useEffect, useState } from "react";

const NestedComment = ({ commentData }) => {
  const [value, setValue] = useState("");
  const [comments, setComments] = useState(commentData?.iteams || []);

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
                    <span className="comment-box" >{commentData?.name}</span>
                )
            }
        </div>

      {/* RENDERING COMMENTS HERE */}
      <div style={{paddingLeft:25 , padding : 10 }}>
        {comments?.map((comment) => (
            <NestedComment key={comment?.id} commentData={comment} />
        ))}
      </div>

    </div>
  );
};

export default NestedComment;