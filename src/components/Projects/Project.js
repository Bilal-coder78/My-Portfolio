import React from 'react'
import Card from '../Card/Card'
import va from '../../assets/va.png'
import './Project.css'

function Project() {
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