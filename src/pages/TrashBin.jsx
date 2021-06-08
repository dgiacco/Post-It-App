import { Link } from "react-router-dom";
import DeletedPostitList from "../Components/DeletedPostitList"

const TrashBin = () => {
  return(
    <div>
      <div className="header">
        <h1>Trash bin</h1>
      </div>
      <div className="postit-container">
        <DeletedPostitList />
      </div>
      <Link to="/">
        <button>Back to workspace</button>
      </Link>
    </div>
  )
};

export default TrashBin;