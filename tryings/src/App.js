import SideNav from './sidenav';
import Home from './home';
import UserManage from './user-management/user-manage';
import './global.scss';


function App() {
  return (
    <div class='app'>
      <div class='sidenav'>
        <SideNav />
      </div>
      <div class='user-manage'>
        <UserManage />
      </div>
    </div>
  );
}//app end

export default App;
