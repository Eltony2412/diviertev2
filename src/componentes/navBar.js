import Login from "../login/login";

const Navbar = ({opcion1, opcion2, opcion3, usuario}) => {

    return ( 

        <div>
            <img src = "" alt = "icon"></img>
            <h1>DIVIERTE V2</h1>
            <a href = "#">{opcion1}</a><br></br>
            <a href = "#">{opcion2}</a><br></br>
            <a href = "#">{opcion3}</a>
            <h2>Bienvenido {usuario}</h2>
        </div>
    );
}
 
export default Navbar;