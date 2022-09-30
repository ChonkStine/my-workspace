import './user-dash.scss';
import UserCell from './user-management/tables/eto-talaga-table';
import TableHead from './user-management/tables/user-table';

export default function userDashboard() {
  return (
    <div class='container'>
        <div class='header'>
            <div>WELCOME</div>
            <div>LOUISIAN</div>
        </div>

        <div class='buttons'>
            <a>SCHEDULE ACTIVITY</a>
        </div>

        <div class='user-req'>
          <h1>YOUR REQUESTS</h1>
            <TableHead />
            <UserCell />
            <UserCell />
            <UserCell />
        </div>
        <div class='more'>See more ...</div>

    </div>
  );
}//app end
