import "./About.css"
import Card from '../Card/Card'
import mern from '../../assets/mern.png'
import java from '../../assets/java.png'
import dsa from '../../assets/dsa.png'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)
function About() {
  useGSAP(()=>{
     gsap.from(".circle",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".circle",
        scroll:"body",
        scrub:2,
        markers:true,
        start: "top 60%",
        end:"top 30%"
      }
     })
     gsap.from(".line",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".line",
        scroll:"body",
        scrub:2,
        markers:true,
        start: "top 60%",
        end:"top 30%"
      }
     })
     gsap.from(".aboutdetails h1",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".aboutdetails h1",
        scroll:"body",
        scrub:2,
        markers:true,
        start: "top 60%",
        end:"top 30%"
      }
     })
     gsap.from(".aboutdetails ul",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".aboutdetails ul",
        scroll:"body",
        scrub:2,
        markers:true,
        start: "top 60%",
        end:"top 30%"
      }
     })
     gsap.from(".rightabout",{
      x:80,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".rightabout",
        scroll:"body",
        scrub:2,
        markers:true,
        start: "top 60%",
        end:"top 30%"
      }
     })
  })
  return (
    <div id='about'>
        <div className="leftabout">
           <div className="circle-line">
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
           </div>
           <div className="aboutdetails">
            <div className="personalinfo">
              <h1>Personal Info</h1>
              <ul>
                <li>
                  <span>Name</span> : M.Bilal Sikander
                </li>
                <li>
                  <span>AGE</span> : 21 years
                </li>
                <li>
                  <span>Gender</span> : Male
                </li>
              </ul>
            </div>
            <div className="education">
              <h1>Education</h1>
              <ul>
                <li>
                  <span>Degree</span> : Software Engineering
                </li>
                <li>
                  <span>University</span> : Arid agriculture 
                </li>
                <li>
                  <span>CGPA</span> : 3.4
                </li>
              </ul>
            </div>
            <div className="skills">
              <h1>Skills</h1>
              <ul>
                <li>
                   Front-end developer
                </li>
                <li>
                   Html css javascript
                </li>
                <li>
                  React.js with bootstrap
                </li>
              </ul>
            </div>
           </div>
        </div>
        <div className="rightabout">
          <Card title={"MERN STACK"} image={mern}/>
          <Card title={"JAVASCRIPT"} image={java}/>
          <Card title={"REACT JS"} image={dsa}/>
        </div>
    </div>
  )
}

export default About