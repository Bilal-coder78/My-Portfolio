import React from 'react'
import "./Home.css"
import man from "../../assets/man.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
// import {TypingEffect} from 'react-typing-effect'
function Home() {

  useGSAP(()=>{
    let ls1 = gsap.timeline()
    ls1.from(".line1",{
      y:80,
      duration:1,
      opacity:0
    })
    ls1.from(".line2",{
      y:80,
      duration:1,
      opacity:0
    })
    ls1.from(".line3",{
      y:80,
      duration:1,
      opacity:0
    })
    gsap.from(".righthome img",{
      x:200,
      duration:1,
      opacity:0
    })
  })

  return (
    <div id='home'>
        <div className="lefthome">
          <div className="homedetails">
            <div className="line1">I'M</div>
            <div className="line2">M.Bilal Sikander</div>
            <div className="line3">WEB DEVELOPER
              {/* <TypingEffect
              text={["WEB DEVELOPER","SOFTWARE DEVELOPER","REACT DEVELOPER"]}
              speed={100}
              eraseSpeed={500}
              eraseDelay={1000}
              typingDelay={50}
              cursor='_'
              /> */}

            </div>
            <button className="btn">Hire Me</button>
          </div>
        </div>
        <div className="righthome">
          <img src={man} alt=""/>
        </div>
    </div>
  )
}

export default Home