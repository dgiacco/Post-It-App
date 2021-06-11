import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FaRecycle } from "react-icons/fa";
import classnames from "classnames";

const PostIt = ({ id, text, deletePostIt, isDeleted, restorePostIt, editPostIt }) => {
  const [isYellow, setisYellow] = useState(true)

  const changeToGreen = () => {
    setisYellow(false)
  }

  const changeToYellow = () => {
    setisYellow(true)
  }

  return (
    <div className={classnames({"postit": isYellow, "greenPostIt": !isYellow})}>
      <div className="postit-header">
        <div>
          { !isDeleted && <button className="turnYellowButton" onClick={changeToYellow}></button> }
          { !isDeleted && <button className="turnGreenButton" onClick={changeToGreen}></button> }
        </div>
        <div className="deleteAndRestoreButtonContainer" >
          { isDeleted && <FaRecycle className="restoreButton" onClick={ () => restorePostIt(id) } /> }
          <FaTrash className="deleteButton" onClick={ () => deletePostIt(id) }/>
        </div>
      </div>
      <input className="editInput" value={text} onChange={event => editPostIt(event, id)} name="text"></input>
    </div>
  );
};

export default PostIt;
