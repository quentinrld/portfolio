import React from "react"
const About_Card = (props) => {

  return (
    <>
      <div className='box btn_shadow'>
        <div className="tech-logo">{props.image}</div>
        <div className="title-card">{props.title}</div>
      </div>
    </>
  )
}

export default About_Card
