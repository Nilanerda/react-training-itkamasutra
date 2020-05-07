import React from "react";
import {connect} from "react-redux";
import {
    toggleFollowActionCreator,
    setUsersActionCreator,
    setTotalUsersCountCreator
} from "../../../../store/users-page-reducer";
import * as axios from "axios";
import UsersArea from "./UsersArea";

class UsersAreaContainer extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.shownUsers}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    render() {
        return <UsersArea
            usersData={this.props.usersData}
            toogleFollowAction={this.props.toogleFollowAction}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.usersData,
        shownUsers: state.usersPage.shownUsers,
        currentPage: state.usersPage.currentPage,
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersAreaContainer);
