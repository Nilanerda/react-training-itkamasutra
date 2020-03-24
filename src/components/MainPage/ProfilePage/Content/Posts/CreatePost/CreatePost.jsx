import React from "react";
import './CreatePost.scss';

const CreatePost = (props) => {
    let createPostField = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let updatePostCreatingValue = () => {
        let currentPostValue = createPostField.current.value;
        props.updateNewPostValue(currentPostValue);
    };

    return (
        <div className="create-post-field">
            <p>My posts</p>
            <textarea name="new-post-field"
                      onChange={updatePostCreatingValue}
                      ref={createPostField}
                      cols="1"
                      rows="4"
                      placeholder='your news...'
                      value={props.newPostValue}/>
            <button onClick={addPost}>Send</button>
        </div>
    )
};

export default CreatePost;