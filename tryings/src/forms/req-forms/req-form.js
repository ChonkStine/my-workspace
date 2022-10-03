import React from 'react'
import './req-form.scss';
export default function ReqForm() {
  return (
    <div class='form-container'>
        <div class='form-title'><h1>RESERVATION FORM</h1></div>

        <div class='form-fields'>
            <div>
                <label for="">Date </label>
                <input type="text" placeholder='---'></input>
            </div>

            <div class='small-fields'>
                <div>
                    <label for="">Start Time</label>
                    <input type="text" placeholder='---'></input>
                </div>
                <div>
                    <label for="">End Time</label>
                    <input type="text" placeholder='---'></input>
                </div>
                <div>
                    <label for="">Department</label>
                    <input type="text" placeholder='---'></input>
                </div>
                <div>
                    <label for="">Organization</label>
                    <input type="text" placeholder='---'></input>
                </div>
            </div>

            <div class='buttons' id='form-buttons'>
                <a>Previous</a>
                <a>Next</a>
            </div>
        </div>
    </div>
  )
}
