import React, { useState } from 'react'
import axios from 'axios'
import validator from 'validator'



function ContactForm() {

   const url = 'https://adm.marek.media/wp-json/contact-form-7/v1/contact-forms/66/feedback/'

   const [data, setData] = useState()
   const [emailError, setEmailError] = useState('')
   const [postedForm, setPostedForm] = useState(false)
   const [responseMessage, setResponseMessage] = useState()
   const [errorMessages, setErrorMessages] = useState()


   const validateEmail = (e) => {
      var email = e.target.value

      if (validator.isEmail(email)) {
         setEmailError('')
      } else {
         setEmailError('Neplatný e-mail.')
      }
   }

   function handle(e) {
      const newData = { ...data }
      newData[e.target.id] = e.target.value
      setData(newData)
      console.log(data)
   }

   function submit(e) {
      e.preventDefault()

      const form = document.querySelector('form')
      let formData = new FormData(form);
      /*formData.append('your-name', data.yourname);
      formData.append('your-subject', data.yoursubject);
      formData.append('your-email', data.youremail);
      formData.append('your-message', data.yourmessage);*/

      axios({
         method: 'post',
         url: url,
         data: formData,
         headers: { 'Content-Type': 'multipart/form-data' },
      })
         .then(function(response) {
            //handle success
            //console.log(response.data);
            setResponseMessage(response.data.message)
            const newErrorMessages = { ...errorMessages }
            console.log(response.data)

            response.data.invalid_fields.forEach(input => {
               newErrorMessages[input.error_id.replace(/-/g, '')] = input.message
               document.querySelector(input.into).innerHTML = input.message;


               setErrorMessages(newErrorMessages)
               console.log(newErrorMessages)
            }
            )


            /*for(let i=0; i<response.data.invalid_fields.length; i++) {
               newErrorMessages[response.data.invalid_fields[i].error_id.replace(/-/g, '')] = response.data.invalid_fields[i].message
               setErrorMessages(newErrorMessages)
               console.log(newErrorMessages)
            }*/

            if (response.data.status === 'mail_sent') {
               setPostedForm(true)
            }
         })
         .catch(function(response) {
            //handle error
            console.log('error: ' + response);
         });
   }

   if (postedForm === false) {
      return (
         <div className="contact-form">
            <form onSubmit={(e) => submit(e)}>
               <div>
                  <input id="your-name" name="your-name" type="text" placeholder="Jméno *" onChange={(e) => handle(e)} ></input>
                  <span className='validation wpcf7-form-control-wrap your-name'></span>
               </div>
               <div>
                  <input id="your-subject" name="your-subject" type="text" placeholder="Předmět *" onChange={(e) => handle(e)}></input>
                  <span className='validation wpcf7-form-control-wrap your-subject'></span>
               </div>
               <div>
                  <input id="your-email" name="your-email" type="text" placeholder="E-mail *" onChange={(e) => { handle(e); validateEmail(e) }}></input>
                  <span className='validation wpcf7-form-control-wrap your-email'>{emailError}</span>
               </div>
               <div>
                  <textarea id="your-message" name="your-message" placeholder="Zpráva *" onChange={(e) => handle(e)}></textarea>
                  <span className='validation wpcf7-form-control-wrap your-message'></span>
               </div>
               <button>Odeslat</button>
            </form>
         </div>
      )
   } else {
      return (
         <div className="contact-form">
            <form>
               <h2>{responseMessage}</h2>
            </form>

         </div>
      )
   }





}

export default ContactForm