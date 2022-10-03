import SideNav from './sidenav';
import FormRenderer from './forms/form-renderer';
import UserManage from './user-management/user-manage';
import Archived from './user-management/archived';
import AdminTable from './user-management/admins';
import UserDashboard from './user-dashboard';
import AdminDashboard from './admin-dashboard';
import UserPill from './User-pill';
import UserCell from './user-management/tables/eto-talaga-table';
import TableHead from './user-management/tables/user-table';
import './global.scss';


export default function App() {
  let Component 
  switch (window.location.pathname) {
    
    case '/': 
      Component = AdminDashboard
      break;
      
    case '/form-renderer': 
      Component = FormRenderer;

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
