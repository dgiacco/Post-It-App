import { FaTrashAlt } from "react-icons/fa";

const PostIt = () => {
  return (
    <div className="postit">
      <div className="postit-header">
        <FaTrashAlt />
      </div>
      <p>post it paragraph</p>
    </div>
  );
};

export default PostIt;
