import SideNav from './sidenav';
import UserManage from './user-management/user-manage';
import Archived from './user-management/archived';
import AdminTable from './user-management/admins';
import UserDashboard from './user-dashboard';
import AdminDashboard from './admin-dashboard';
import UserPill from './User-pill';
import UserCell from './user-management/tables/eto-talaga-table';
import TableHead from './user-management/tables/user-table';
import ReqForm1 from './forms/req-form';
import ReqForm2 from './forms/req-form2';
import ReqForm3 from './forms/req-form3';
import ReqTable from './user-management/req-table';
import UserReqTable from './user-management/user-req-table';
import Approval from './approval/approval';
import Register from './forms/register';
import AdminElect from './forms/admins-elect';
import AdminUnelect from './forms/admin-unelect';
import UserUpdate from './forms/update-user';
import Check from './forms/check';
import './global.scss';


export default function App() {
  let Component 
  switch (window.location.pathname) {
    
    case '/': 
      Component = AdminDashboard
      break;  

    case '/admins-table': 
      Component = AdminTable
      break;  

    case '/archive': 
      Component = Archived
      break;  

    case '/user-req-table': 
      Component = UserReqTable
      break;  
      
    case '/req-table': 
      Component = ReqTable
      break;
     
    case '/req-form1': 
      Component = ReqForm1
      break;
      
    case '/req-form2': 
      Component = ReqForm2
      break;

    case '/req-form3': 
      Component = ReqForm3
      break;
      
    case '/admin-table': 
      Component = AdminTable
      break;
    
    case '/archive-table': 
      Component = Archived
      break;

    case '/user-manage': 
      Component = UserManage
      break;

    case '/approval': 
      Component = Approval
      break;
    
    case '/register': 
      Component = Register
      break;

    case '/elect': 
      Component = AdminElect
      break;

    case '/unelect': 
        Component = AdminUnelect
        break;

    case '/user-update': 
      Component = UserUpdate
      break;

      
    case '/check': 
      Component = Check
      break;
  
    default:
      break;

  }

  return (
    <div class='app'>

      <div class='sidenav'>
        <SideNav />
      </div>

      <div class='renderer'>
        <UserPill />
        <Component />
      </div>
    </div>
  );
}//app end

function Dashboard(){
  return{
    
  }
}
