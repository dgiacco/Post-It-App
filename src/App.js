import './App.css';
import PostItList from './Components/PostItList';

const App = () => {
  return (
    <div>
      <div className="header">
        <h1>My Post Its</h1>
        <button className="newPostItButton">Create new Post It</button>
      </div>
      <div className="postit-container">
        <PostItList />
      </div>
    </div>
  );
}

export default App;
