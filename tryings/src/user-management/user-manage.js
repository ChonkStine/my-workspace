import UserHead from './tables/user-table';
import UserCell from './tables/eto-talaga-table';
import './user-manage.scss';

function UserManagement() {
    return (
        <div class='container'>
            <div class='title'>
                USER <div class='yellow'>MANAGEMENT</div>
            </div>

            

            <div class='search'>
                <input placeholder='Search By ID'></input>
                <div class='search-icon'></div>
            </div>

            <div class='switches'>
                <a href=''>Requestors</a>
                <a href=''>Admins</a>
                <a href=''>Archived</a>
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
                <div>ARCHIVE</div>
                <a>UPDATE USER</a>
                <a>ADD USER</a>
            </div>
        </div>
    );
}


export default UserManagement;