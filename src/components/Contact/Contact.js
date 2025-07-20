import React from 'react'
import './Contact.css'
import con from '../../assets/contact.png'

function Contact() {
  return (
    <div id='contact'>
        <div className="leftcontact">
            <img src={con} alt=""/>
        </div>
        <div className="rightcontact">
            <form action="https://formspree.io/f/xgvzowld" method='POST' className='form'>
              <input type="text" name="" placeholder='Name'/>
              <input type="email" name="" placeholder='Email'/>
              <textarea name="textarea" id="" placeholder='Message me'></textarea>
              <input type="submit" value="Submit" className='btn'/>
            </form>
        </div>
    </div>
  )
}

export default Contact