import { Link } from "react-router-dom";

const TrashBin = () => {
  return(
    <div>
      <div>Trash bin</div>
      <div className="postit-container">
        
      </div>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  )
};

export default TrashBin;