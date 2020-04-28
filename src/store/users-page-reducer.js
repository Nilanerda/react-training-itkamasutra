const TOGGLE_FOLLOW_ACTION = 'TOGGLE_FOLLOW_ACTION';
const SET_USERS = 'SET_USERS';

let initialState = {
    usersData: [
        {
            id: 1,
            fullName: 'Vasya',
            followStatus: false,
            profileStatus: 'lorem1',
            location: {country: 'Ukraine', city: 'Kyiv'}
        },
        {
            id: 2,
            fullName: 'Petro',
            followStatus: false,
            profileStatus: 'lorem2',
            location: {country: 'Belarus', city: 'Minsk'}
        },
        {
            id: 3,
            fullName: 'Svetlana',
            followStatus: true,
            profileStatus: 'lorem3',
            location: {country: 'Hungary', city: 'Budapest'}
        },
        {
            id: 4,
            fullName: 'Dmytro',
            followStatus: false,
            profileStatus: 'lorem4',
            location: {country: 'Japan', city: 'Tokyo'}
        },
        {
            id: 5,
            fullName: 'Pavel',
            followStatus: true,
            profileStatus: 'lorem5',
            location: {country: 'China', city: 'Shanghai'}
        },
        {
            id: 6,
            fullName: 'Anna',
            followStatus: true,
            profileStatus: 'lorem6',
            location: {country: 'USA', city: 'Chicago'}
        },
    ],
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