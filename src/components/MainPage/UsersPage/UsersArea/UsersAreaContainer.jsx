import React from "react";
import {connect} from "react-redux";
import {
    toggleFollowActionCreator,
    setUsersActionCreator,
    setTotalUsersCountCreator,
    preloaderToggleAC, pagInitAC
} from "../../../../store/users-page-reducer";
import * as axios from "axios";
import UsersArea from "./UsersArea";

class UsersAreaContainer extends React.Component {

    componentDidMount() {
        this.props.preloaderToggle(true)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.shownUsers}`)
            .then(response => {
                this.props.preloaderToggle(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
                this.props.paginationInitialization(true)
            })
    }

    render() {
        return (
            <>
                <UsersArea
                    usersData={this.props.usersData}
                    toogleFollowAction={this.props.toogleFollowAction}
                    isFetching={this.props.isFetching}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        shownUsers: state.usersPage.shownUsers,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        toogleFollowAction: (userId) => {
            dispatch(toggleFollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountCreator(totalUsersCount))
        },
        preloaderToggle: (isFetching) => {
            dispatch(preloaderToggleAC(isFetching))
        },
        paginationInitialization: (pagInit) => {
            dispatch(pagInitAC((pagInit)))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAreaContainer);
