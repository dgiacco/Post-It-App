import PostIt from "./PostIt";
import NewPostIt from "./NewPostIt";

const PostItList = ({ postIt }) => {
  return (
    <div className="postit-list">
      { postIt.map((postIt) => (
        <PostIt text={ postIt.text }/>
      )) }
      <NewPostIt />
      <button className="addButton">+</button>
    </div>
  );
};

export default PostItList;
