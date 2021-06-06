import { FaTrash } from "react-icons/fa";

const PostIt = ({ id, text, deletePostIt }) => {

  return (
    <div className="postit">
      <div className="postit-header">
        <FaTrash className="deleteButton" onClick={ () => deletePostIt(id) }/>
      </div>
      <p className="postit-body">{ text }</p>
    </div>
  );
};

export default PostIt;
