import React from "react"

const About_Card = (props) => {

  return (
    <>
      <div className="box btn_shadow portfolio">
                <div className="preuve-portfolio">{props.apercu}</div>
                <div className="portfolio-resum">
                    <div className="thème-portfolio">
                        Projet : {props.projetName}
                        <div>{props.techStack}</div>
                    </div>
                    <div className="heure">
                        Équipe
                        <div>{props.equipe}</div>
                    </div>
                </div>
                <div className="desc-portfolio">{props.Description}</div>
            </div>
    </>
  )
}

export default About_Card
