import { FaTrashAlt } from "react-icons/fa";

const PostIt = ({ text }) => {
  return (
    <div className="postit">
      <div className="postit-header">
        <FaTrashAlt />
      </div>
      <p className="postit-body">{ text }</p>
    </div>
  );
};

export default PostIt;
