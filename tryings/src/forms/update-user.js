export default function updateUser() {
    return (
      <div class='ehe'>
        <div class='form-container'>
            <div class='form-title'><h1>USER UPDATE</h1></div>

            <div class='form-fields'>
                <div class='input-field'>
                    <label for="">Name </label>
                    <input type="text" placeholder='---'></input>
                </div>
                <div class='input-field'>
                    <label for="">Password </label>
                    <input type="text" placeholder='---'></input>
                </div>

                <div class='small-fields'>
                    <div class='input-field'>
                      <label for="">Department </label>
                      <select name="Department" id="dept">
                        <option value="Lorem1">Lorem1</option>
                        <option value="Lorem2">Lorem2</option>
                        <option value="Lorem3">Lorem3</option>
                        <option value="Lorem4">Lorem4</option>
                      </select>
                    </div>

                    <div class='input-field'>
                      <label for="">Organization </label>
                      <select name="Organization" id="org"> 
                        <option value="Lorem1">Lorem1</option>
                        <option value="Lorem2">Lorem2</option>
                        <option value="Lorem3">Lorem3</option>
                        <option value="Lorem4">Lorem4</option>
                      </select>
                    </div>
                </div>

                <div class='buttons' id='form-buttons'>
                  <p></p>
                  <div>Register User</div>
                </div>
            </div>
        </div>
    </div>
    );
  }//app end
  