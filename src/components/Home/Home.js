import React from "react"
import "./Home.css"
import Profil_img from "../../assets/profil-img-1.jpeg"

import { DiGithubAlt}from 'react-icons/di'
import { FaLinkedin } from 'react-icons/fa'
import { AiOutlineMail } from "react-icons/ai";

const Home = () => {
    return(
            <section className="home" id="home">
                <div className="container f_flex top">
                    <div className="left top">
                    <h3>Bonjour et bienvenue sur mon portfolio !</h3>
                        <section>
                            <h4>À propos de moi</h4>
                            <p>
                                Je m'appelle <strong>Roeland Quentin</strong>, développeur Full Stack spécialisé en Java, passionné par les technologies 
                                de l'information et toujours curieux d'en apprendre davantage.
                            </p>
                        </section>
                        <section>
                            <h4>Mon parcours</h4>
                            <p>
                                Diplômé d'un bachelier en technologie de l'informatique à l'EPHEC en 2023, j'ai également terminé une formation intensive 
                                en développement Full Stack Java chez Technofutur TIC. Cette formation m'a permis de renforcer mes compétences dans la 
                                création d'applications web et d'approfondir mes connaissances techniques.
                            </p>
                        </section>
                        <section>
                            <h4>Pourquoi moi ?</h4>
                            <p>
                                Mon expérience s'étend du développement frontend et backend à la gestion de bases de données et aux méthodologies 
                                agiles. J'ai eu l'opportunité de travailler sur des projets concrets en entreprise et dans des cadres académiques, 
                                qui m'ont permis de relever des défis variés. Vous pourrez découvrir plus en détail mes compétences techniques et mes 
                                réalisations dans les sections dédiées.
                            </p>
                        </section>
                        <section className="spacer"></section>
                        <div className="link">
                            <h3>Retrouvez-moi</h3>
                            <div className="button">
                                <button className="btn_shadow box">
                                    <a href="https://github.com/quentinrld" target="_blank" rel="noreferrer">
                                        <DiGithubAlt/>
                                    </a>
                                </button>
                                <button className="btn_shadow box">
                                    <a href="https://www.linkedin.com/in/quentin-roeland-6ba7b3274/" target="_blank" rel="noreferrer">
                                        <FaLinkedin/>
                                    </a>
                                </button>
                                <button className="btn_shadow box">
                                    <a href="mailto:quentin.roelandpro@outlook.com" >
                                        <AiOutlineMail/>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="right_img">
                            <img className="img-profil" alt='' src={Profil_img}/>
                        </div>
                    </div>
                </div>
            </section>
  
    )
}

export default Home