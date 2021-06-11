import { Link } from "react-router-dom";
import { FaTrashRestore } from "react-icons/fa";
import PostItList from "../Components/PostItList";
import { v4 as uuidv4 } from "uuid";
import useLocalStorage from "../customHooks/useLocalStorage";

const Workspace = () => {
  const [postIts, setPostIts] = useLocalStorage("postits", []);

  const [deletedPostIts, setDeletedPostIts] = useLocalStorage(
    "deletedPostits",
    []
  );

  const addPostIt = (text) => {
    const newPostIt = {
      id: uuidv4(),
      text: text,
      isYellow: true,
    };
    const newPostIts = [...postIts, newPostIt];
    setPostIts(newPostIts);
  };

  const deletePostIt = (id) => {
    const newPostIts = postIts.filter((postIt) => postIt.id !== id);
    const deletedPostit = postIts.filter((postIt) => postIt.id === id);
    setPostIts(newPostIts);
    setDeletedPostIts([...deletedPostIts, ...deletedPostit]);
  };

  const editPostIt = (event, id) => {
    const editedPostIts = postIts.map((postIt) => {
      if (postIt.id === id) {
        postIt.text = event.target.value;
      }
      return postIt;
    });
    setPostIts(editedPostIts);
  };

  const changeToGreen = (id) => {
    const greenPostIt = postIts.map((postIt) => {
      if (postIt.id === id) {
        postIt.isYellow = false;
      }
      return postIt;
    });
    setPostIts(greenPostIt);
  };

  const changeToYellow = (id) => {
    const yellowPostIt = postIts.map((postIt) => {
      if (postIt.id === id) {
        postIt.isYellow = true;
      }
      return postIt;
    });
    setPostIts(yellowPostIt);
  };

  return (
    <div>
      <div className="header">
        <h1>My Poost-Its</h1>
      </div>
      <PostItList
        postIt={postIts}
        addPostIt={addPostIt}
        deletePostIt={deletePostIt}
        editPostIt={editPostIt}
        changeToGreen={changeToGreen}
        changeToYellow={changeToYellow}
      />
      <div>
        <div className="trashbinIconContainer">
          <Link to="/trashbin">
            <div className="trashbinIcon">
              <FaTrashRestore size="60px" color="rgb(29, 29, 148)" />
              <div className="trashbinCount">
                <div>{deletedPostIts.length}</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
