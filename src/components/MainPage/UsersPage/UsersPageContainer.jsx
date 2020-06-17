import React from "react";
import {connect} from "react-redux";
import {
    toggleFollowAction,
    setUsers,
    setTotalUsersCount,
    preloaderToggle,
    paginationInit,
    subscribeInProcessToggle,
    preloadInit
} from "../../../store/users-page-reducer";
import {usersAPI} from "../../../api/api";
import UsersPage from "./UsersPage";

class UsersPageContainer extends React.Component {

    componentDidMount() {
        usersAPI.getUsers(this.props.currentPage, this.props.shownUsers)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
                this.props.paginationInit(true)
                this.props.preloaderToggle(false)
                this.props.preloadInit(false)
            })
    }

    render() {
        return (
            <UsersPage
                toogleFollowAction={this.props.toggleFollowAction}
                usersData={this.props.usersData}
                isFetching={this.props.isFetching}
                subscribeInProcessToggle={this.props.subscribeInProcessToggle}
                subscribeInProcess={this.props.subscribeInProcess}
                preloaderInit={this.props.preloaderInit}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        shownUsers: state.usersPage.shownUsers,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        subscribeInProcess: state.usersPage.subscribeInProcess,
        preloaderInit: state.usersPage.preloaderInit,
    }
}

export default connect(mapStateToProps, {
    toggleFollowAction,
    setUsers,
    setTotalUsersCount,
    preloaderToggle,
    paginationInit,
    subscribeInProcessToggle,
    preloadInit
})(UsersPageContainer);
