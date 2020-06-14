import React from "react";
import {connect} from "react-redux";
import {
    setUsers,
    setCurrentPage,
    preloaderToggle,
} from "../../../../store/users-page-reducer";
import UsersPagePagination from "./UsersPagePagination";
import {usersAPI} from "../../../../api/api";

class UsersPagePaginationContainer extends React.Component {

    onPageNumberChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.preloaderToggle(true)
        usersAPI.getUsers(pageNumber, this.props.shownUsers)
            .then(data => {
                this.props.preloaderToggle(false)
                this.props.setUsers(data.items)
            })
    }

    render() {
        return <UsersPagePagination
            totalIncomeUsersCount={this.props.totalIncomeUsersCount}
            shownUsers={this.props.shownUsers}
            currentPage={this.props.currentPage}
            onPageNumberChange={this.onPageNumberChange}
            paginationInit={this.props.paginationInit}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        shownUsers: state.usersPage.shownUsers,
        totalIncomeUsersCount: state.usersPage.totalIncomeUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        paginationInit: state.usersPage.paginationInit
    }
}

export default connect(mapStateToProps, {setUsers, setCurrentPage, preloaderToggle})(UsersPagePaginationContainer);
