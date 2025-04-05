import '../styles/bolota.css'

function Bolota(props){

    return(
        <div className='bolotaGeral'>
            <a href={props.link} className='bolota'>
                <img src={props.src} alt="" width={props.tamanho}/>
            </a>
            <div className='textBolota'>
                <h5>{props.texto}</h5>
            </div>
        </div>
    )
}

export default Bolota;