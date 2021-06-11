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
    setPostIts(newPostIts);
    setDeletedPostIts([...deletedPostIts, ...deletedPostit]);
  };

  const editPostIt = (event, id) => {
    
    const editedPostIts = postIts.map((postIt) => {
      console.log(postIt.id === id);
      if (postIt.id === id) {
        console.log(postIt.text);
        postIt.text = event.target.value
        
      }
      return postIt
    })
    setPostIts(editedPostIts)
  };

  return(
    <div>
      <div className="header">
        <h1>My Post Its</h1>
      </div>
      <PostItList
        postIt={postIts}
        addPostIt={addPostIt}
        deletePostIt={deletePostIt}
        editPostIt={editPostIt}
      />
      <div>
        <Link to="/trashbin">
          <div className="trashbinIconContainer">
            <div className="trashbinIcon">
              <FaTrashRestore size="60px" color="rgb(29, 29, 148)" />
              <div className='trashbinCount'><div>{ deletedPostIts.length }</div></div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Workspace;