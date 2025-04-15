import '../styles/sobre.css'
import Bolota from './bolota';
import javaIcon from '../assets/java.png'
import htmlIcon from '../assets/html5 (1).png'
import cssIcon from '../assets/css.png'
import postgreeIcon from '../assets/postgresql.png'
import pythonIcon from '../assets/python.png'

function Sobre(){

    return(
        <div className='sobre'>
            <div className='textSobre'>
                <h3>Sobre Mim</h3>
                <h4>Aspirante a desenvolvedor, dedicado ao 
                    <br /> aprendizado de novas tecnologias, aplicando meus 
                    <br /> conhecimentos em Java e Python para a criação de 
                    <br /> diversos projetos</h4>
            </div>
            <div className='conhecimentos'>
                <h3>Conhecimentos</h3>
                <div className='conhecimentosBolotas'>
                    <div className='html'><Bolota src={htmlIcon} texto="Html5" tamanho="85%"/></div>
                    <div className='css'><Bolota src={cssIcon} texto="CSS" tamanho="85%"/></div>
                    <div className='java'><Bolota src={javaIcon} texto="Java" tamanho="85%"/></div>
                    <div className='python'><Bolota src={pythonIcon} texto="Python" tamanho="85%"/></div>
                    <div className='postgre'><Bolota src={postgreeIcon} texto="Postgresql" tamanho="85%"/></div>
                </div>
                
            </div>
        </div>
    )
}

export default Sobre;