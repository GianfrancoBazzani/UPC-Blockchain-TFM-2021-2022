import { Link } from "react-router-dom";

const MenuConceptos = () =>{
    return(
        <nav>
            <ol>
                <li>
                    <span>Enlaces HTML no recomendado</span>
                        <a href='/'> Home</a>
                        <a href='/acerca'> Acerca</a>   
                        <a href='/contacto'> Contacto</a>  
                </li>

                <li>
                    <span>Componente Link</span>
                        <Link to="/">Home</Link>
                        <Link to="/acerca">Acerca</Link>
                        <Link to="/contacto">Contacto</Link>
                        <Link to="/no-existe">Error 404</Link>
                </li>
            </ol>
        </nav>
    )
}
export default MenuConceptos;