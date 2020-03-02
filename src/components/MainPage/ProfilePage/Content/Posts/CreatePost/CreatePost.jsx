import React from "react";
import './CreatePost.scss';

const  CreatePost = () => {
    return (
        <div className="create-post-field">
            <p>My posts</p>
            <textarea name="new-post-field"
                      id="newPostField"
                      cols="1"
                      rows="4"
                      placeholder="your news..."></textarea>
            <button>Send</button>
        </div>
    )
};

export default CreatePost;