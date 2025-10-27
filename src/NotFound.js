import { Link } from "react-router-dom";

const NotFound = () =>{
    return(
        <div className="not-found">
            <h2>Spiacente</h2>
            <p>questa pagina non è stata trovata</p>
            <Link to={"/"}>Torna all' Homepage</Link>
        </div>
    )

}

export default NotFound;