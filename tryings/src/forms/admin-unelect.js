import React from 'react'
import './req-form.scss';

export default function AdminUnelect() {
  return (
    <div class='ehe'>
        <div class='form-container'>
            <div class='form-title'><h1>ADMIN UNELECTION</h1></div>

            <div class='form-fields'>

                <div class='input-field'>
                    <label for="">ID Number </label>
                    <input type="text" placeholder='---'></input>
                </div>

                <div class='input-field'>
                    <label for="">Confirmation Password </label>
                    <input type="text" placeholder='---'></input>
                </div>

                <div class='buttons' id='form-buttons'>
                    <div>Unelect</div>
                    <div>Cancel</div>
                </div>
            </div>
        </div>

    </div>
  )
}
