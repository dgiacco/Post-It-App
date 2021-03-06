import { Link } from "react-router-dom";
import DeletedPostitList from "../Components/DeletedPostitList";
import useLocalStorage from "../customHooks/useLocalStorage";

const TrashBin = () => {
  const [deletedPostIts, setDeletedPostIts] = useLocalStorage("deletedPostits");

  const [postIts, setPostIts] = useLocalStorage("postits", []);

  const deletePostIt = (id) => {
    const newDeletedPostIts = deletedPostIts.filter(
      (deletedPostIts) => deletedPostIts.id !== id
    );
    setDeletedPostIts(newDeletedPostIts);
  };

  const restorePostIt = (id) => {
    const deletedPostiIts = deletedPostIts.filter(
      (deletedpostIt) => deletedpostIt.id !== id
    );
    const restoredPostiIt = deletedPostIts.filter(
      (deletedpostIt) => deletedpostIt.id === id
    );
    setDeletedPostIts(deletedPostiIts);
    setPostIts([...postIts, ...restoredPostiIt]);
  };

  const deleteAllPostIts = () => {
    setDeletedPostIts([]);
  };

  return (
    <div>
      <div className="header">
        <h1>Trash bin</h1>
      </div>
      <div className="postit-list">
        {deletedPostIts.length > 0 ? (
          <DeletedPostitList
            deletePostIt={deletePostIt}
            restorePostIt={restorePostIt}
            deletedPostIts={deletedPostIts}
          />
        ) : (
          <div className="emptyTrashbin">
            <h3>There is nothing here!</h3>
          </div>
        )}
      </div>
      <div className="trashbinFooter">
        <Link to="/">
          <button className="trashbinButtons">Back to workspace</button>
        </Link>
        <button
          className="trashbinButtons"
          onClick={() => {
            if (
              window.confirm(
                "This will permanently delete every item in the trash bin. Are you sure?"
              )
            )
              deleteAllPostIts();
          }}
        >
          Clear trash bin
        </button>
      </div>
    </div>
  );
};

export default TrashBin;
