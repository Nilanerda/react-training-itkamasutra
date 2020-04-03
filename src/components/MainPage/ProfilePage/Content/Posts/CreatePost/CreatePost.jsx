import React from "react";
import './CreatePost.scss';
import {addPostCreator, updatePostValueCreator} from "../../../../../../store/profile-page-reducer";

const CreatePost = (props) => {

    let currentPostValue = props.newPostData;

    let addPost = () => {
        props.dispatch(addPostCreator());
    };

    let updatePostCreatingValue = (e) => {
        let currentPostValue = e.target.value;
        props.dispatch(updatePostValueCreator(currentPostValue));
    };

    return (
        <div className="create-post-field">
            <p>My posts</p>
            <textarea name="new-post-field"
                      onChange={updatePostCreatingValue}
                      cols="1"
                      rows="4"
                      placeholder='your news...'
                      value={currentPostValue}/>
            <button onClick={addPost}>Send</button>
        </div>
    )
};

export default CreatePost;