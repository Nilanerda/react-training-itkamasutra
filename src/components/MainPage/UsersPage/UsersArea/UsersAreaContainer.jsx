import React from "react";
import {connect} from "react-redux";
import {
    toggleFollowAction,
    setUsers,
    setTotalUsersCount,
    preloaderToggle,
    paginationInit
} from "../../../../store/users-page-reducer";
import * as axios from "axios";
import UsersArea from "./UsersArea";

class UsersAreaContainer extends React.Component {

    componentDidMount() {
        (this.props.usersData === null ? this.props.preloaderToggle(true) : this.props.preloaderToggle(false))
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.shownUsers}`)
            .then(response => {
                this.props.preloaderToggle(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
                this.props.paginationInit(true)
            })
    }

    render() {
        return (
            <>
                <UsersArea
                    usersData={this.props.usersData}
                    toogleFollowAction={this.props.toggleFollowAction}
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

export default connect(mapStateToProps, {
    toggleFollowAction,
    setUsers,
    setTotalUsersCount,
    preloaderToggle,
    paginationInit
})(UsersAreaContainer);
