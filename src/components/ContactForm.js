import React, {useState} from 'react'
import axios from 'axios'


function ContactForm() {

   const url = 'https://adm.marek.media/wp-json/contact-form-7/v1/contact-forms/66/feedback/'

   const [data, setData] = useState({
      'youremail': 'sfg@marek.media',
      'yourname': 'adf',
      'yourmessage': 'asdf',
      'yoursubject': 'subject'
   })

   function handle(e) {
      const newData = {...data}
      newData[e.target.id] = e.target.value
      setData(newData)
      console.log(newData)
   }

   function submit(e) {
      e.preventDefault()
      /*axios.post(url, {
         'your-name': 'a',
         'your-email': 'marek@marek.media',
         'your-subject': 'b',
         'your-message': 'c'
      }, {
         headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
          }
      }).then(res => {
         console.log(res.data)
      })*/



      axios(url, {
         method: 'POST',
         body: {
            'your-name': 'Ahoj',
            'your-email': 'marek@fghdfg.cz',
            'your-subject': 'subject',
            'your-message': 'zpráva'
         },
         headers: {
             'Content-Type': 'multipart/form-data;',
         }
     } ).then( res => {
       console.log(res.data);
     })
   }

   return (
      <div className="contact-form">
         <form onSubmit={(e) => submit(e)}>
            <input id="your-name" type="text" value={data.yourname} placeholder="Jméno a příjmení" onChange={(e) => handle(e)} ></input>
            <input id="your-email" type="text" value={data.youremail} placeholder="E-mail" onChange={(e) => handle(e)}></input>
            <textarea id="your-message" value={data.yourmessage} placeholder="Zpráva" onChange={(e) => handle(e)}></textarea>
            <button>Odeslat</button>
         </form>
      </div>
   )
}

export default ContactForm