import './App.css';
import { useState } from 'react';
import PostItList from './Components/PostItList';
import { v4 as uuidv4 } from 'uuid';

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

  const addPostIt = (text) => {
    const newPostIt = {
      id: uuidv4(),
      text: text
    };
    const newPostIts = [...postIts, newPostIt];
    setPostIts(newPostIts);
  };

  return (
    <div>
      <div className="header">
        <h1>My Post Its</h1>
      </div>
      <div className="postit-container">
        <PostItList postIt={ postIts } addPostIt={ addPostIt }/>
      </div>
    </div>
  );
}

export default App;
