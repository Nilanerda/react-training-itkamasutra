const TOGGLE_FOLLOW_ACTION = 'TOGGLE_FOLLOW_ACTION';
const SET_USERS = 'SET_USERS';

let initialState = {
    usersData: [],
};

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {...state, usersData: [...state.usersData, ...action.users]}
        }
        case TOGGLE_FOLLOW_ACTION:
            return {
                ...state,
                usersData: state.usersData.map(users => {
                    if (users.id === action.userId) {
                        return {...users, followStatus: !users.followStatus}
                    }
                    return users;
                })
            }
        default:
            return state;
    }
};

export const toggleFollowActionCreator = (userId) => ({type: TOGGLE_FOLLOW_ACTION, userId});

export const setUsersActionCreator = (users) => ({type: SET_USERS, users});

export default usersPageReducer;