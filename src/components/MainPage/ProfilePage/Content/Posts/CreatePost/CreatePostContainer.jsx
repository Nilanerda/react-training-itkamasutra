import React from "react";
import {addPostCreator, updatePostValueCreator} from "../../../../../../store/profile-page-reducer";
import CreatePost from "./CreatePost";
import StoreContext from "../../../../../../store/store-context";

const CreatePostContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {

                let addPost = () => {
                    store.dispatch(addPostCreator());
                };

                let updatePostCreatingValue = (currentPostValue) => {
                    store.dispatch(updatePostValueCreator(currentPostValue));
                };

                return (
                    <CreatePost
                        updatePostCreatingValue={updatePostCreatingValue}
                        addPost={addPost}
                        newPostData={store.getState().profilePage.newPostData}/>
                )
            }
            }
        </StoreContext.Consumer>
    )
};

export default CreatePostContainer;