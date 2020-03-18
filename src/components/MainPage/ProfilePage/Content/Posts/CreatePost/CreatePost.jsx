import React from "react";
import './CreatePost.scss';

const CreatePost = () => {

    let createPostField = React.createRef();

    let addPost = () => {
        let createNewPost = createPostField.current.value;
        alert(createNewPost);
    };

    return (
        <div className="create-post-field">
            <p>My posts</p>
            <textarea name="new-post-field"
                      ref={createPostField}
                      cols="1"
                      rows="4"
                      placeholder="your news..."></textarea>
            <button onClick={addPost}>Send</button>
        </div>
    )
};

export default CreatePost;