import Hover from "./components/hover";
import './App.css'
import Inicio from "./components/inicio";
import Sobre from "./components/sobre";
import Contatos from "./components/contatos";
import ProjetoLayout from "./components/projetolayout";

function App(){
  return(
    <div className="geral">
          <Hover/>
          <Inicio/>
          <Sobre/>
          <ProjetoLayout/>
          <Contatos/>
    </div>
  )
}

export default App;