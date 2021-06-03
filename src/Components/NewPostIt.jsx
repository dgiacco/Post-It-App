const NewPostIt = () => {
    return (
        <div className="postit new">
            <textarea rows="5" cols="8" autoFocus></textarea>
            <div className="newPostIt-footer">
                <button className="saveButton">Save</button>
            </div>
        </div>
    )
}

export default NewPostIt