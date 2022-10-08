import React from 'react'
import './req-form.scss';
export default function ReqForm2() {
  return (
    <div class='ehe'>
        <div class='form-container'>
            <div class='form-title'><h1>RESERVATION FORM</h1></div>

            <div class='form-fields'>
                <div>
                    <label for="">Purpose </label>
                    <input type="text" placeholder='---'></input>
                </div>

                <div class='small-fields'>
                    <div>
                        <label for="">Buildings</label>
                        <input type="text" placeholder='---'></input>
                    </div>
                    <div>
                        <label for="">Rooms</label>
                        <input type="text" placeholder='---'></input>
                    </div>
                </div>
                
                <div class='form-attach'>
                    Attach FIles
                </div>

                <div class='buttons' id='form-buttons'>
                    <a href='/req-form1'>Previous</a>
                    <a href='/req-form3'>Next</a>
                </div>
            </div>
        </div>
    </div>
  )
}
