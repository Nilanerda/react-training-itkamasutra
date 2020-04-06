import React from "react";
import './CreatePost.scss';

const CreatePost = (props) => {

    let currentPostValue = props.newPostData;

    let onAddPost = () => {
        props.addPost();
    };

    let onUpdatePostCreatingValue = (e) => {
        let currentPostValue = e.target.value;
        props.updatePostCreatingValue(currentPostValue);
    };

    return (
        <div className="create-post-field">
            <p>My posts</p>
            <textarea name="new-post-field"
                      onChange={onUpdatePostCreatingValue}
                      cols="1"
                      rows="4"
                      placeholder='your news...'
                      value={currentPostValue}/>
            <button onClick={onAddPost}>Send</button>
        </div>
    )
};

export default CreatePost;