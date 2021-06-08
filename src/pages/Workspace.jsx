import {  Link } from "react-router-dom";
import { FaTrashRestore } from "react-icons/fa";
import PostItList from "../Components/PostItList";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "../customHooks/useLocalStorage";


const Workspace = () => {
  const [postIts, setPostIts] = useLocalStorage("postits", []);

  const [deletedPostIts, setDeletedPostIts] = useLocalStorage("deletedPostits", []);

  const addPostIt = (text) => {
    const newPostIt = {
      id: uuidv4(),
      text: text,
    };
    const newPostIts = [...postIts, newPostIt];
    setPostIts(newPostIts);
  };

  const deletePostIt = (id) => {
    const newPostIts = postIts.filter(postIt => postIt.id !== id);
    const deletedPostit = postIts.filter(postIt => postIt.id === id);
    deletedPostIts.push(deletedPostit[0]);
    setPostIts(newPostIts);
    setDeletedPostIts(deletedPostIts);
  };

  return(
    <div>
      <div className="header">
        <h1>My Post Its</h1>
      </div>
      <div className="postit-container">
        <PostItList
          postIt={postIts}
          addPostIt={addPostIt}
          deletePostIt={deletePostIt}
        />
      </div>
      <div>
        <Link to="/trashbin">
          <div className="trashbinIcon">
            <FaTrashRestore size="4vw" color="rgb(29, 29, 148)"/>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Workspace;