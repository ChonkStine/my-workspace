import './req-form.scss';
import './check.scss';
export default function ReqForm() {
  return (
    <div class='ehe'>
        <div class='form-container'>
            <div class='form-title'><h1>RESERVATION FORM</h1></div>

            <div class='form-fields'>
                <div class='input-field'>
                    <label for="">Date </label>
                    <input type="text" placeholder='---'></input>
                </div>

                <div class='small-fields'>
                    <div class='input-field'>
                        <label for="">Building</label>
                        <input type="text" placeholder='---'></input>
                    </div>
                    <div>
                        <label for="">Room</label>
                        <input type="text" placeholder='---'></input>
                    </div>
                </div>

                <div class='check-pill'>
                    Check availability
                </div>

                <div class='checked-table'>
                    <p>*There seems to  be reservations this day and time</p>
                    <div class='check-table-head'>
                        <p id='id'>
                            Jakulan
                        </p>
                        <p id='name'>
                            Today
                        </p>
                        <p id='dept'>
                            Now na    
                        </p>
                    </div>
                </div>
            
                <div class='check-pill'>
                    Continue anyways
                </div>

            </div>
        </div>

    </div>
  )
}
