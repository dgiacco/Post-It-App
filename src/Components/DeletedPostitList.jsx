import useLocalStorage from "../customHooks/useLocalStorage";
import PostIt from "../Components/PostIt";

const DeletedPostiItList = () => {
  const [deletedPostIts, setDeletedPostIts] = useLocalStorage("deletedPostits");

  const [postIts, setPostIts] = useLocalStorage("postits", []);

  const deletePostIt = (id) => {
    const newDeletedPostIts = deletedPostIts.filter(
      (deletedPostIts) => deletedPostIts.id !== id
    );
    setDeletedPostIts(newDeletedPostIts);
  };

  const restorePostIt = (id) => {
    const deletedPostiIts = deletedPostIts.filter(deletedpostIt => deletedpostIt.id !== id)
    const restoredPostiIt = deletedPostIts.filter(deletedpostIt => deletedpostIt.id === id)
    setDeletedPostIts(deletedPostiIts)
    setPostIts([...postIts, ...restoredPostiIt])
  }

  return (
    <div className="postit-list">
      {deletedPostIts.map((deletedPostIt) => (
        <PostIt
          key={deletedPostIt.id}
          id={deletedPostIt.id}
          text={deletedPostIt.text}
          deletePostIt={deletePostIt}
          isDeleted
          restorePostIt={restorePostIt}
        />
      ))}
    </div>
  );
};

export default DeletedPostiItList;
