import { useState } from "react";

const NewPostIt = ({ addPostIt, setIsCreating }) => {
  const [newText, setNewText] = useState("");

  const handleTextChange = (e) => {
    setNewText(e.target.value);
  };

  const saveText = () => {
    if (newText.length !== 0) {
      addPostIt(newText);
      setIsCreating(false);
    }
  };

  const cancelCreate = () => {
    setIsCreating(false);
  };

  return (
    <div className="postit new">
      <textarea
        rows="5"
        cols="8"
        autoFocus
        required
        value={newText}
        onChange={handleTextChange}
      ></textarea>
      <div className="newPostIt-footer">
        <button className="newPostItButtons" onClick={cancelCreate}>
          Cancel
        </button>
        <button className="newPostItButtons" onClick={saveText}>
          Save
        </button>
      </div>
    </div>
  );
};

export default NewPostIt;
