const TOGGLE_FOLLOW_ACTION = 'TOGGLE_FOLLOW_ACTION';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const PRELOADER_TOGGLE = 'PRELOADER_TOGGLE';
const PAGINATION_INIT = 'PAGINATION_INIT';
const SUBSCRIBE_IN_PROCESS_TOGGLE = 'SUBSCRIBE_IN_PROCESS_TOGGLE';

let initialState = {
    usersData: [],
    shownUsers: 8,
    totalIncomeUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    paginationInit: false,
    subscribeInProcess: [],
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
        case PRELOADER_TOGGLE:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case PAGINATION_INIT:
            return {
                ...state,
                paginationInit: action.pagInit
            }
        case SUBSCRIBE_IN_PROCESS_TOGGLE:
            return {
                ...state,
                subscribeInProcess: action.isFetching
                ? [...state.subscribeInProcess, action.userId]
                : state.subscribeInProcess.filter(userId => userId !== action.userId)
            }
        default:
            return state;
    }
};

export const toggleFollowAction = (userId) => ({type: TOGGLE_FOLLOW_ACTION, userId});

export const setUsers = (users) => ({type: SET_USERS, users});

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})

export const preloaderToggle = (isFetching) => ({type: PRELOADER_TOGGLE, isFetching})

export const paginationInit = (pagInit) => ({type: PAGINATION_INIT, pagInit})

export const subscribeInProcessToggle = (isFetching, userId) => ({type: SUBSCRIBE_IN_PROCESS_TOGGLE, isFetching, userId})

export default usersPageReducer;