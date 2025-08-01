import Navbar from "../componentes/navBar";
import CardInicio from "../componentes/card";

const Home = ({usuario}) => {
    return (
        <div>
            <Navbar 
                opcion1="INICIO"
                opcion2="APRENDIZAJE DINAMICO"
                opcion3="SIMULACION HISTORICA"
                usuario = {usuario}
            />
            <CardInicio 
                titulo = "TIULO1"
                imagen = "tirulo1"
                texto = "titulo1"
            />
        </div>
    );
}

export default Home;