import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PostItList from "./Components/PostItList";
import { v4 as uuidv4 } from "uuid";
import TrashBin from "./Components/TrashBin";
import { FaTrashRestore } from "react-icons/fa";
import useLocalStorage from "./customHooks/useLocalStorage";

const App = () => {
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
    deletedPostIts.push(deletedPostit);
    setPostIts(newPostIts);
    setDeletedPostIts(deletedPostIts);
  };

  return (
    <Router>
      <Switch>
        <Route path="/trashbin">
          <TrashBin />
        </Route>
        <Route path="/">
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
                <FaTrashRestore />
              </Link>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
