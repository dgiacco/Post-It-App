import { FaTrash } from "react-icons/fa";
import { FaRecycle } from "react-icons/fa";

const PostIt = ({ id, text, deletePostIt, isDeleted, restorePostIt, editPostIt }) => {

  return (
    <div className="postit">
      <div className="postit-header">
        <FaTrash className="deleteButton" onClick={ () => deletePostIt(id) }/>
        { isDeleted && <FaRecycle className="restoreButton" onClick={ () => restorePostIt(id) } /> }
      </div>
      <input className="editInput" value={text} onChange={event => editPostIt(event, id)} name="text"></input>
    </div>
  );
};

export default PostIt;
