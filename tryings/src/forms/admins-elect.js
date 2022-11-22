import React from 'react'
import './req-form.scss';

export default function AdminElect() {
  return (
    <div class='ehe'>
        <div class='form-container'>
            <div class='form-title'><h1>ADMIN ELECTION</h1></div>

            <div class='form-fields'>

                <div>
                    <label for="">ID Number </label>
                    <input type="text" placeholder='---'></input>
                </div>

                <div>
                    <label for="">Confirmation Password </label>
                    <input type="text" placeholder='---'></input>
                </div>

                <div class='buttons' id='form-buttons'>
                    <div>Elect</div>
                    <div>Cancel</div>
                </div>
            </div>
        </div>

    </div>
  )
}
