import Biobanque from '../../assets/Biobanque.jpg'
import Portfolio from '../../assets/portfolio.png'

const data = [
    {
        projetName: "Profolio",
        techStack: "React, CSS, API",
        equipe: "Personnel",
        Description: "Ce projet de Portfolio personnel présente une collection de mes réalisations en développement web. Il est conçu pour offrir un aperçu de mes compétences techniques et créatives, avec des sections détaillant mes projets récents, les technologies que j’utilise, ainsi que des informations sur mon parcours professionnel. Ce portfolio est entièrement responsive, construit avec React pour le front-end et une gestion des données via une API local. L’objectif de ce projet est de créer une interface moderne et fonctionnelle pour mettre en valeur mes projets professionnels, tout en permettant une expérience utilisateur fluide et agréable.",
        apercu: <img src={Portfolio}/>,
    },
    {
        projetName: "BioBanque",
        techStack: "Spring, Angular, PostgreSQL",
        equipe: "7 développeurs, 1 BA",
        Description: "RumExperts réalise des essais cliniques en ferme et collecte des échantillons biologiques qui sont ensuite conservés au congélateur pour pouvoir être utilisé dans de futures analyses.Ce projet a pour objectif de créer un outil dédié à l'encodage et au stockage des données des échantillons biologiques, ainsi qu'au suivi de leurs entrées, sorties et dates de péremption. Cet outil permettra une gestion efficace des échantillons conservés dans la biobanque.",
        apercu: <img src={Biobanque}/>,
    },
    
]
export default data
