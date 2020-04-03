const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_DATA = 'UPDATE_NEW_POST_DATA';

let initialState = {
    postsData: [
        {
            id: 1,
            post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque dicta dolore dolorum ex id in necessitatibus numquam pariatur perspiciatis praesentium quae quam rem soluta tempora temporibus vel vero, voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
        },
        {
            id: 2,
            post: 'Accusantium ad adipisci aliquam assumenda consectetur dolorum ipsam omnis, ratione saepe veniam! Assumenda corporis inventore iusto labore magni quam quisquam repellat sint! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet at explicabo harum iste nemo quam quisquam sequi sunt vero! Blanditiis dolorem, est exercitationem magnam minus molestiae nemo temporibus voluptatem?'
        },
        {
            id: 3,
            post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque dicta dolore dolorum ex id in necessitatibus numquam pariatur perspiciatis praesentium quae quam rem soluta tempora temporibus vel vero, voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci aliquam assumenda consectetur dolorum ipsam omnis, ratione saepe veniam! Assumenda corporis inventore iusto labore magni quam quisquam repellat sint! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet at explicabo harum iste nemo quam quisquam sequi sunt vero! Blanditiis dolorem, est exercitationem magnam minus molestiae nemo temporibus voluptatem?'
        }
    ],
    newPostData: ''
};

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPostData = state.newPostData;
            state.postsData.push({id: 4, post: newPostData});
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