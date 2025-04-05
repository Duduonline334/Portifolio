import '../styles/contatos.css'
import Bolota from './bolota'
import githubIcon from '../assets/github.png'
import linkedinIcon from '../assets/linkedin.png'
import outlookIcon from '../assets/outlook.png'


function Contatos(){

    return(
        <div className='contatos'>
            <h3>CONTATOS</h3>
            <div className='contatosBolotas'>
                <div><Bolota src={githubIcon} tamanho="100%" link="https://github.com/Duduonline334"/></div>
                <div><Bolota src={linkedinIcon} tamanho="70%" link="http://www.linkedin.com/in/carlos-eduardo334"/></div>
                <div><Bolota src={outlookIcon} tamanho="65%" link="https://outlook.live.com/people/0/"/></div>
            </div>
        </div>
    )
}

export default Contatos