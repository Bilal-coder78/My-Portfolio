import React from 'react'
import './Contact.css'
import con from '../../assets/contact.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Contact() {

  useGSAP(()=>{
    gsap.from(".leftcontact",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".leftcontact",
        scroll:"body",
        scrub:2,
        markers:true,
        start: "top 60%",
        end:"top 30%"
      }
    })
    gsap.from(".rightcontact",{
      x:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".rightcontact",
        scroll:"body",
        scrub:2,
        markers:true,
        start: "top 60%",
        end:"top 30%"
      }
    })
    
  })
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