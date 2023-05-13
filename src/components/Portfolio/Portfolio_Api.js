import elecrtonique from '../../assets/Dévlopper un robot connecter en bluetooth.jpg'
import secu from '../../assets/donnée personnelle .jpg'
import ctf from '../../assets/CTF-ephec.png'
import hackaton from '../../assets/hackaton1.jpg'
import patro from '../../assets/patro.jpg'
import natation from '../../assets/natation.jpg'
import soudure from '../../assets/soudure.png'
import patterson from '../../assets/patterson2.jpg'

const data = [
    {
        Activié: "Hackathon",
        HPresté: "48h",
        HValidé: "10h",
        Thème: "Développemnt",
        Description: "En 2021, j'ai participé au hackathon organisé par l'EPHEC durant un week-end. On était par équipe de 4 étudiants pour créer un site web avec comme thème de base le développement durable.                                                                                               ",
        Preuve: <img src={hackaton}/>,
    },
    {
        Activié: "Electronique connecter en bluetooth",
        HPresté: "15h",
        HValidé: "10h",
        Thème: "Electronique",
        Description: "Dans le cadre de mon tfe, j'ai comme projet d'intégrer de l'électronique dans mon projet. J'ai donc pris l'initiative de suivre une formation en ligne pour être sûr de mes bases d'électronique avec des cartes dans le style des arduino pour pouvoir commencer correctement mon projet.",
        Preuve: <img src={elecrtonique}/>,
    },
    {
        Activié: "Professeur de Natation",
        HPresté: "+100h",
        HValidé: "10h",
        Thème: "Soft Skill",
        Description: "J'ai fait mes études secondaires dans des études sportives et donc à ce moment-là ça me paraissais logique d'avoir un job dans le sport. J'ai donc commencé à travailler comme profs de natation et depuis, je n'ai pas arrêté.",
        Preuve: <img src={natation}/>,
    },
    {
        Activié: "Soudure électronique",
        HPresté: "5h",
        HValidé: "5h",
        Thème: "Soudure",
        Description: "Avec mon tfe j'ai soudé beaucoup de composant différent et surtout de très petit composant avec lesquels je n'étais pas alaise au début.",
        Preuve: <img src={soudure}/>,
    },
    {
        Activié: "CTF",
        HPresté: "1h",
        HValidé: "10h",
        Thème: "Cyber Sécurité",
        Description: "J'ai eu l'occasion de participer à un capture the flag organiser par des étudiants dans le cadre de leurs tfe en 2022.                                                                                                                                                                    ",
        Preuve: <img src={ctf}/>,
    },
    {
        Activié: "Protéger les données personnelles",
        HPresté: "15h",
        HValidé: "10h",
        Thème: "Cyber Sécurité",
        Description: "Dans le cadre de mon tfe, j'ai besoin de gérer des données à caractère très personnel. J'ai donc renforcé mes connaissances sur la sécurité des données personnelles.",
        Preuve: <img src={secu}/>,
    },
    {
        Activié: "Mouvement de jeunesse",
        HPresté: "+100h",
        HValidé: "10h",
        Thème: "Soft Skill",
        Description: "Depuis tout petit, j'ai toujours été dans les mouvements de jeunesse et donc quand j'ai eu l'age, j'ai animé à mon tour pendant un long moment.",
        Preuve: <img src={patro}/>,
    },
    
    {
        Activié: "L'affaire Patterson",
        HPresté: "72h",
        HValidé: "10h",
        Thème: "Acting",
        Description: "J'ai un ami qui m'a proposé de jouer dans le film qu'il avait imaginé et écris. J'ai donc accepté et on s'est retrouvé entre amis pour réaliser ce projet fou. ",
        Preuve: <img src={patterson}/>,
    },
]
export default data