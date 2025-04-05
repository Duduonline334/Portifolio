import '../styles/inicio.css'
import foto from '../assets/rostoSemFundo.png'

function Inicio(){

    return(
        <div className="inicio textInicio">
            <div className='nome'>
                <h1>Olá, eu sou <br/><span>Carlos Eduardo</span></h1>
                <h4>Estudante de programação</h4>
            </div>
            <div className='image'>
                <img src={foto} alt="" width="128" height="128"/>
            </div>
        </div>
    )
}

export default Inicio;