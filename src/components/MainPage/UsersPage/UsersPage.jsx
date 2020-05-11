import React from "react";
import UsersAreaContainer from "./UsersArea/UsersAreaContainer";
import UsersPagePaginationContainer from "./UsersPagePagination/UsersPagePaginationContainer";

let UsersPage = () => {
    return (
        <div>
            <UsersAreaContainer/>
            <UsersPagePaginationContainer/>
        </div>
    )
}

export default UsersPage;