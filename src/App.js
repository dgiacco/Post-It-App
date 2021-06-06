import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import PostItList from './Components/PostItList';
import { v4 as uuidv4 } from 'uuid';
import TrashBin from './Components/TrashBin';

const App = () => {
  const [ postIts, setPostIts ] = useState([
    {
      id: uuidv4(),
      text: "This is an example!"
    },
    {
      id: uuidv4(),
      text: "This is ANOTHER example!"
    }
  ]);

  useEffect(() => {
    let data = localStorage.getItem('postits');
    if( data != null ) {
      setPostIts(JSON.parse(data))
    } else {
      setPostIts([
        {
          id: uuidv4(),
          text: "This is an example (storage)!"
        }
      ])
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('postits', JSON.stringify(postIts))
  }, [postIts]);

  const addPostIt = (text) => {
    const newPostIt = {
      id: uuidv4(),
      text: text
    };
    const newPostIts = [...postIts, newPostIt];
    setPostIts(newPostIts);
  };

  const deletePostIt = (id) => {
    const newPostIts = postIts.filter(postIt => postIt.id !== id);
    setPostIts(newPostIts);
  }

  return (
    <Router>
      <Switch>
        <Route path="/trashbin">
          <TrashBin />
          <Link to="/">
            <button>Back</button>
          </Link>
        </Route>
        <Route path="/">
          <div>
            <div className="header">
              <h1>My Post Its</h1>
            </div>
            <div className="postit-container">
              <PostItList postIt={ postIts } addPostIt={ addPostIt } deletePostIt={ deletePostIt }/>
            </div>
            <div>
              <Link to="/trashbin">
                <button>Trash bin</button>
              </Link>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
