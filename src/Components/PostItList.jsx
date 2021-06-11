import { useState } from "react";
import PostIt from "./PostIt";
import NewPostIt from "./NewPostIt";

const PostItList = ({
  postIt,
  addPostIt,
  deletePostIt,
  editPostIt,
  changeToGreen,
  changeToYellow,
}) => {
  const [isCreating, setIsCreating] = useState(false);

  return (
    <div className="postit-list">
      {postIt.map((postIt) => (
        <PostIt
          key={postIt.id}
          id={postIt.id}
          text={postIt.text}
          isYellow={postIt.isYellow}
          deletePostIt={deletePostIt}
          editPostIt={editPostIt}
          changeToGreen={changeToGreen}
          changeToYellow={changeToYellow}
        />
      ))}
      {isCreating && (
        <NewPostIt addPostIt={addPostIt} setIsCreating={setIsCreating} />
      )}
      {!isCreating && (
        <button className="addButton" onClick={() => setIsCreating(true)}>
          +
        </button>
      )}
    </div>
  );
};

export default PostItList;
