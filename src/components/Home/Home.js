import React from "react"
import "./Home.css"
import Profil_img from "../../assets/profil-img-1.jpeg"

import { DiGithubAlt}from 'react-icons/di'
import { FaLinkedin } from 'react-icons/fa'
import { AiOutlineMail } from "react-icons/ai";

const Home = () => {
    return(
        <>
            <section className="home" id="home">
                <div className="container f_flex top">
                    <div className="left top">
                        <h3>Bonjour</h3>
                        <h1>Je m'appel Roeland Quentin</h1>
                        <p>
                            Je suis né le 7 avril 1999 à Bruxelles, en Belgique<br/>
                            Actuellement en dernière année d'un bachelier en technologie de l'informatique à l'EPHEC. Et depuis février en stage d'intégration professionnel chez JustLikeU. Être dans un environement professionnel permet d'en apprendre tout les jours en améliorant ses connaissance.
                        </p>
                        <p>
                            J'aime découvrir de nouvelles technologie et je m'efforce d'en apprendre toujours plus sur celle-ci<br/>
                            Cette année en tant qu'étudiant à l'EPHEC est bientôt finie et je serai diplomé avant la fin 2023.
                        </p>
                        <p>
                            Avec le stage que j'ai pu faire cette année 2023 dans l'agance qui m'a accueillit, je pense que travaillé avec une petite équipe dynamique serait une bonne chose pour l'avenir. L'aspect hardware et traitement des données est aussi une filliaire dans laquelle j'aimerais me dévlopper.
                        </p>
                        <div className="link">
                            <h3>Retrouvez-moi</h3>
                            <div className="button">
                                <button className="btn_shadow">
                                    <a href="https://github.com/quentinrld" target="_blank" rel="noreferrer">
                                        <DiGithubAlt/>
                                    </a>
                                </button>
                                <button className="btn_shadow">
                                    <a href="https://www.linkedin.com/in/quentin-roeland-6ba7b3274/" target="_blank" rel="noreferrer">
                                        <FaLinkedin/>
                                    </a>
                                </button>
                                <button className="btn_shadow">
                                    <a href="mailto:quentin.roeland@gmail.com" >
                                        <AiOutlineMail/>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="right_img">
                            <img className="img-profil" alt='' src={Profil_img} width={500}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home