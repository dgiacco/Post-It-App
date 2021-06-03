import './App.css';
import { useState } from 'react';
import PostItList from './Components/PostItList';

const App = () => {
  const [ postIt, setPostIt ] = useState([
    {
      text: "This is an example!"
    },
    {
      text: "This is ANOTHER example!"
    }
  ]);

  return (
    <div>
      <div className="header">
        <h1>My Post Its</h1>
      </div>
      <div className="postit-container">
        <PostItList postIt={ postIt }/>
      </div>
    </div>
  );
}

export default App;
