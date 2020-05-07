import React from "react";
import {connect} from "react-redux";
import {
    setUsersActionCreator,
    setCurrentPageCreator,
} from "../../../../store/users-page-reducer";
import * as axios from "axios";
import UsersPagePagination from "./UsersPagePagination";

class UsersPagePaginationContainer extends React.Component {

    onPageNumberChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.shownUsers}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <UsersPagePagination
            totalIncomeUsersCount={this.props.totalIncomeUsersCount}
            shownUsers={this.props.shownUsers}
            currentPage={this.props.currentPage}
            onPageNumberChange={this.onPageNumberChange}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        shownUsers: state.usersPage.shownUsers,
        totalIncomeUsersCount: state.usersPage.totalIncomeUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageCreator(page))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPagePaginationContainer);
