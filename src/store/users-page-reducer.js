const TOGGLE_FOLLOW_ACTION = 'TOGGLE_FOLLOW_ACTION';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    usersData: [],
    shownUsers: 10,
    totalIncomeUsersCount: 0,
    currentPage: 1,
};

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state, usersData: action.users
            }
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
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalIncomeUsersCount: action.totalUsersCount
            }
        default:
            return state;
    }
};

export const toggleFollowActionCreator = (userId) => ({type: TOGGLE_FOLLOW_ACTION, userId});

export const setUsersActionCreator = (users) => ({type: SET_USERS, users});

export const setCurrentPageCreator = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

export const setTotalUsersCountCreator = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})

export default usersPageReducer;