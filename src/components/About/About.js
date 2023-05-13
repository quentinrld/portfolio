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
                    <div className="About-content">
                        {
                            data.map((item, index) => {
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