import data from './Portfolio_Api'
import Portfolio_Card from './Portfolio_Card'
import "./Portfolio.css"

const Portfolio = () => {
    return (
        <>
            <section className="Portfolio" id="portfolio">
                <div className="container">
                    <div className="Protfolio-title">
                        <h3>Mon Portfolio</h3>
                    </div>
                    <div className="Portfolio-content">
                        {
                            data.map((item, index) => {
                                return (
                                        <Portfolio_Card key={index} apercu={item.apercu} projetName={item.projetName} techStack={item.techStack} equipe={item.equipe} Description={item.Description}/>                          
                            )})
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio
