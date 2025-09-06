import Carrusel from "./carrrusel";

const CardInicio = ({ titulo, imagen, texto }) => {


    return (



        <div className="card-Base">
            <header className="card-Header">
                <div className="card-Titulo">
                    {titulo}
                </div>
                <img
                    className="card-imagen"
                    alt={imagen}
                    src={`imagenes/${imagen}`}
                />
            </header>
            <aside>
                <p className="card-P">
                    <strong>{texto}</strong>
                </p>
            </aside>
        </div>
    );
}

export default CardInicio;