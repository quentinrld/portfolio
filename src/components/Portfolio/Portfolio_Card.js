import React from "react"

const About_Card = (props) => {

  return (
    <>
      <div className='box btn_shadow'>
        <div className="preuve-portfolio">{props.preuve}</div>
        <div className="portfolio-resum">
            <div className="thème-portfolio ">{props.thème} <div>{props.activité}</div></div>
            <div className="heure">Valoriser / Prester<div>{props.HV} / {props.HP}</div></div>
        </div>
        <div className="avtiv-portfolio"></div>
        <div className="desc-portfolio">{props.desc}</div>
      </div>
    </>
  )
}

export default About_Card
