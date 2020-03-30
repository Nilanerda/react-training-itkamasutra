const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_DATA = 'UPDATE_NEW_POST_DATA';

const profilePageReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPostData = {
                id: 4,
                post: state.newPostData,
            };
            state.postsData.push(newPostData);
            state.newPostData = '';
            return state;
        case UPDATE_NEW_POST_DATA:
            state.newPostData = action.updatedValue;
            return state;
        default:
            return state;
    }
};

export const addPostCreator = () => ({type: ADD_POST});

export const updatePostValueCreator = (currentPostValue) => ({
    type: UPDATE_NEW_POST_DATA,
    updatedValue: currentPostValue
});

export default profilePageReducer;