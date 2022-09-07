import UserHead from './tables/user-table';
import UserCell from './tables/eto-talaga-table';
import './user-manage.scss';

function UserManagement() {
    return (
        <div class='container'>
            <div class='title'>
                USER <div class='yellow'>MANAGEMENT</div>
            </div>

            <div class='highlighted'>
                <div class='top'>
                    <div class='search'>
                    
                    </div>
                </div>
                <div class='bottom'>
                    
                </div>
            </div>

            <div class='table-heading'>
                <UserHead />
            </div>
            <div class='table-cell'>
                <UserCell />
                <UserCell />
                <UserCell />
                <UserCell />
            </div>
            <div class='buttons'>
                <div>ARCHIVED USERS</div>
                <div>UPDATE USER</div>
                <div>ADD USER</div>
            </div>
        </div>
    );
}


export default UserManagement;