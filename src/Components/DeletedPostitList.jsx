import useLocalStorage from "../customHooks/useLocalStorage";
import PostIt from "../Components/PostIt";

const DeletedPostiItList = () => {
  const [deletedPostIts, setDeletedPostIts] = useLocalStorage("deletedPostits");

  const deletePostIt = (id) => {
    const newDeletedPostIts = deletedPostIts.filter(
      (deletedPostIts) => deletedPostIts.id !== id
    );
    setDeletedPostIts(newDeletedPostIts);
  };

  return (
    <div className="postit-list">
      {deletedPostIts.map((deletedPostIt) => (
        <PostIt
          key={deletedPostIt.id}
          id={deletedPostIt.id}
          text={deletedPostIt.text}
          deletePostIt={deletePostIt}
        />
      ))}
    </div>
  );
};

export default DeletedPostiItList;
