import UserHead from './tables/user-table';
import UserCell from './tables/eto-talaga-table';
import './user-manage.scss';

function UserManagement() {
    return (
        <div class='container'>
            <div class='title'>
                APPROVING <div class='yellow'>ADMINS</div>
            </div>

            

            <div class='search'>
                <input placeholder='Search By ID'></input>
                <div class='search-icon'></div>
            </div>

            
            <div class='switches'>
                <a href='/user-manage'>Requestors</a>
                <a href='/admins-table'>Admins</a>
                <a href='/archive'>Archived</a>
            </div>

            <div class='table-heading'>
                <UserHead />
            </div>
            <div class='table-cell'>
                <UserCell />
                <UserCell />
                <UserCell />
                <UserCell />
                <UserCell />
            </div>
            <div class='buttons'>
                <a href='elect'>ELECT ADMIN</a>
                <a href='unelect'>UNELECT ADMIN</a>
            </div>
        </div>
    );
}


export default UserManagement;