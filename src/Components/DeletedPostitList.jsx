import PostIt from "../Components/PostIt";

const DeletedPostiItList = ({
  deletedPostIts,
  deletePostIt,
  restorePostIt,
}) => {
  return (
    <>
      {deletedPostIts.map((deletedPostIt) => (
        <PostIt
          key={deletedPostIt.id}
          id={deletedPostIt.id}
          text={deletedPostIt.text}
          isYellow={deletedPostIt.isYellow}
          deletePostIt={deletePostIt}
          isDeleted
          restorePostIt={restorePostIt}
        />
      ))}
    </>
  );
};

export default DeletedPostiItList;
