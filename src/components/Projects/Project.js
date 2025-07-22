import React from 'react'
import Card from '../Card/Card'
import va from '../../assets/va.png'
import './Project.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Project() {

  useGSAP(()=>{
    gsap.from(".para",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".para",
        scroll:"body",
        scrub:2,
        start: "top 80%",
        end:"top 30%"
      }
    })
    gsap.from(".slider",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".slider",
        scroll:"body",
        scrub:2,
        start: "top 80%",
        end:"top 30%"
      }
    })
  })
  return (
    <div id='projects'>
        <h1 className='para'>2+ Years experienced in projects</h1>
        <div className="slider">
            <Card title={"Ai chatbot"} image={va}/>
            <Card title={"Ai chatbot"} image={va}/>
            <Card title={"Ai chatbot"} image={va}/>
            <Card title={"Ai chatbot"} image={va}/>
            <Card title={"Ai chatbot"} image={va}/>
        </div>
    </div>
  )
}

export default Project