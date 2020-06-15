import React from "react";
import {connect} from "react-redux";
import {
    toggleFollowAction,
    setUsers,
    setTotalUsersCount,
    preloaderToggle,
    paginationInit,
    subscribeInProcessToggle
} from "../../../../store/users-page-reducer";
import UsersArea from "./UsersArea";
import {usersAPI} from "../../../../api/api";

class UsersAreaContainer extends React.Component {

    componentDidMount() {
        (this.props.usersData === null
            ? this.props.preloaderToggle(true)
            : this.props.preloaderToggle(false))
        usersAPI.getUsers(this.props.currentPage, this.props.shownUsers)
            .then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
                this.props.paginationInit(true)
                this.props.preloaderToggle(false)
            })
    }

    render() {
        return (
            <UsersArea
                usersData={this.props.usersData}
                toogleFollowAction={this.props.toggleFollowAction}
                isFetching={this.props.isFetching}
                subscribeInProcessToggle={this.props.subscribeInProcessToggle}
                subscribeInProcess={this.props.subscribeInProcess}
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
        subscribeInProcess: state.usersPage.subscribeInProcess
    }
}

export default connect(mapStateToProps, {
    setUsers,
    setTotalUsersCount,
    preloaderToggle,
    paginationInit,
    toggleFollowAction,
    subscribeInProcessToggle
})(UsersAreaContainer);
