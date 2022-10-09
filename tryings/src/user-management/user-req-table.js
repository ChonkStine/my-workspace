import UserHead from './tables/user-table';
import UserCell from './tables/eto-talaga-table';

function reqtable() {
  return (        
  <div class='container'>
  <div class='title'>
      USER <div class='yellow'>REQUESTS</div>
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
      <UserCell />
  </div>
  <div class='buttons'>
      <a>Dummy</a>
      <a>Dummy</a>
      <a>Dummy</a>
  </div>
</div>
  )
}   

export default reqtable