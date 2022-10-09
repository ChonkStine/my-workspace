import UserHead from './tables/user-table';
import UserCell from './tables/eto-talaga-table';

function Archived() {
    return (
        <div class='container'>
            <div class='title'>
                ARCHIVED <div class='yellow'>MANAGEMENT</div>
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
                <a>RESTORE USER</a>
                <a>DELETE</a>
            </div>
        </div>
    );
}

export default Archived;