import { useState } from 'react';
import PostIt from "./PostIt";
import NewPostIt from "./NewPostIt";

const PostItList = ({ postIt, addPostIt, deletePostIt }) => {
  const [isCreating, setIsCreating] = useState(false);

  return (
    <div className="postit-list">
      { postIt.map((postIt) => (
        <PostIt key={ postIt.id } id={ postIt.id } text={ postIt.text } deletePostIt={ deletePostIt } />
      )) }
      { isCreating && <NewPostIt addPostIt={ addPostIt } setIsCreating={ setIsCreating } /> }
      { !isCreating && <button className="addButton" onClick={() => setIsCreating(true)}>+</button>}
    </div>
  );
};

export default PostItList;
