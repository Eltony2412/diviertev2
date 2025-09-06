import { useState } from "react";
import Home from "../home/home";
import Carrusel from "../componentes/carrrusel"

  let slides = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];


const Login = () => {

    const [error, setError] = useState("");
    const [isLogged, setIsLogged] = useState(false);

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const usuario = "Elberth";
    const contraseña = "Elberth";

    const verificarSesion = () => {


        if (usuario === user.trim() && contraseña === pass.trim()) {
            setError("")
            setIsLogged(true);
        }
        else {
            setError("Credenciales incorrectas");
            setIsLogged(false);
        }
    }

    if (isLogged) {
        return (
            <div>
                <Home
                    usuario={user.trim()}
                />
                <Carrusel
                />
            </div>



        );
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <main>
            <form onSubmit={onSubmit}>
                <label>USUARIO</label>
                <input type="text" id="user" value={user} onChange={(e) => setUser(e.target.value)}></input>

                <label>CONTRASEÑA</label>
                <input type="password" id="contra" value={pass} onChange={(e) => setPass(e.target.value)}></input>

                {error && <h3>{error}</h3>}

                <button onClick={() => verificarSesion()}>INGRESAR</button>
                <a href=""><button>exit</button></a>
            </form>
        </main>
    );
}

export default Login;