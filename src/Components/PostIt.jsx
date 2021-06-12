import { FaTrash } from "react-icons/fa";
import { FaRecycle } from "react-icons/fa";
import classnames from "classnames";

const PostIt = ({
  id,
  text,
  isYellow,
  deletePostIt,
  isDeleted,
  restorePostIt,
  editPostIt,
  changeToGreen,
  changeToYellow,
}) => {
  return (
    <div className={classnames({ postit: isYellow, greenPostIt: !isYellow })}>
      <div className="postit-header">
        <div>
          {!isDeleted && (
            <button
              className="turnYellowButton"
              onClick={() => changeToYellow(id)}
            ></button>
          )}
          {!isDeleted && (
            <button
              className="turnGreenButton"
              onClick={() => changeToGreen(id)}
            ></button>
          )}
        </div>
        <div className="deleteAndRestoreButtonContainer">
          {isDeleted && (
            <FaRecycle
              className="restoreButton"
              onClick={() => restorePostIt(id)}
            />
          )}
          <FaTrash
            className="deleteButton"
            onClick={() => {
              if (isDeleted) {
                if (
                  window.confirm(
                    "Are you sure you wish to permanently delete this item?"
                  )
                )
                  deletePostIt(id);
              } else deletePostIt(id);
            }}
          />
        </div>
      </div>
      <input
        className="editInput"
        value={text}
        onChange={(event) => editPostIt(event, id)}
        name="text"
      ></input>
    </div>
  );
};

export default PostIt;
