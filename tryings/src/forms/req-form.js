import React from 'react'
import './req-form.scss';
import './progress-bar.scss';
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
                        <label for="">Start Time</label>
                        <input type="text" placeholder='---'></input>
                    </div>
                    <div class='input-field'>
                        <label for="">End Time</label>
                        <input type="text" placeholder='---'></input>
                    </div>
                    <div class='input-field'>
                        <label for="">Department</label>
                        <input type="text" placeholder='---'></input>
                    </div>
                    <div class='input-field'>
                        <label for="">Organization</label>
                        <input type="text" placeholder='---'></input>
                    </div>
                </div>

                <div class='buttons' id='form-buttons'>
                    <a>Previous</a>
                    <a href='/req-form2'>Next</a>
                </div>
            </div>
        </div>

    </div>
  )
}
