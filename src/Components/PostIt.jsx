import { FaTrash } from "react-icons/fa";
import { FaRecycle } from "react-icons/fa";

const PostIt = ({ id, text, deletePostIt, isDeleted, restorePostIt }) => {

  return (
    <div className="postit">
      <div className="postit-header">
        <FaTrash className="deleteButton" onClick={ () => deletePostIt(id) }/>
        { isDeleted && <FaRecycle className="restoreButton" onClick={ () => restorePostIt(id) } /> }
      </div>
      <p className="postit-body">{ text }</p>
    </div>
  );
};

export default PostIt;
