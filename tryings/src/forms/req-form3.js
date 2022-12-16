import React from 'react'
import './req-form.scss';
export default function ReqForm2() {
  return (
    <div class='ehe'>
        <div class='form-container'>
            <div class='form-title'><h1>RESERVATION FORM</h1></div>

            <div class='form-fields'>
                <div class='input-field'>
                    <label for="">Ehhhh? </label>
                    <input type="text" placeholder='---'></input>
                </div>

                
                <div class='equipments'>
                    <label for="">Equipments </label>
                    <div>
                        <input type="text" placeholder='---'></input>
                        <div class='add'>+</div>
                    </div>
                </div>


                <div class='buttons' id='form-buttons'>
                    <a href='/req-form2'>Previous</a>
                    <a>Next</a>
                </div>
            </div>
        </div>
    </div>
  )
}
