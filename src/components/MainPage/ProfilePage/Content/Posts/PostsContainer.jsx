import React from "react";
import Posts from "./Posts";
import StoreContext from "../../../../../store/store-context";

const PostsContainer = () => {

    return <StoreContext.Consumer>
        {(store) => {
            return (
                <Posts postsData={store.getState().profilePage.postsData}/>
            )
        }
        }
    </StoreContext.Consumer>
};

export default PostsContainer;