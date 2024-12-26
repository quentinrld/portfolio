import data from './About-Api'
import About_Card from './About-Card'
import './About.css'

const About = () => {
    return (
        <>
            <section className='About' id='about'>
                <div className="container">
                    <div className="About-title">
                        <h3>Mes Compétences</h3>
                    </div>
                    <div className='About-title'>
                        <h4>Frontend</h4>
                    </div>
                    <div className="About-content">
                        {
                            data.map((item, index) => {
                                if(item.domaine == 'Frontend')
                                return <About_Card key={index} image={item.image} title={item.title}/>
                            })
                        }
                    </div>
                    <div className='About-title'>
                        <h4>Backtend</h4>
                    </div>
                    <div className="About-content">
                        {
                            data.map((item, index) => {
                                if(item.domaine == 'Backend')
                                return <About_Card key={index} image={item.image} title={item.title}/>
                            })
                        }
                    </div>
                    <div className='About-title'>
                        <h4>Base de données</h4>
                    </div>
                    <div className="About-content">
                        {
                            data.map((item, index) => {
                                if(item.domaine == 'Data')
                                return <About_Card key={index} image={item.image} title={item.title}/>
                            })
                        }
                    </div>
                    <div className='About-title'>
                        <h4>Outils & Déploiment</h4>
                    </div>
                    <div className="About-content">
                        {
                            data.map((item, index) => {
                                if(item.domaine == 'Outil')
                                return <About_Card key={index} image={item.image} title={item.title}/>
                            })
                        }
                    </div>
                </div>
            </section>
        </>
        
    )
}

export default About