import '../styles/projetolayout.css'
import trbalhando from '../assets/working (1).png'


function ProjetoLayout(){

    return(
        <div className='projetolayout'>
            <h2>PROJETOS</h2>
            <div className='projetoGrid'>
                <p>Trabalhando...</p>
                <img src={trbalhando} alt="" />
            </div>
        </div>
    )
}

export default ProjetoLayout;