import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);   //registro l'errore nello state error


    //prendo i dati dall'API e li inserisco nello state blogs
    //prima di richiedere i dati, devo avviare il server (json-server --watch data/db.json --port 8000)
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                if(!res.ok){    //se non ritorna i dati, viene lanciato un errore
                    throw Error('non è stato possibile ottenere i dati');   //questo messaggio viene mostrato nel console.log della catch
                }
                 return res.json()
                })
            .then(data => {
                setBlogs(data)
                setIsLoading(false);    //quando ho i dati, non viene più mostrato il messaggio di caricamento
                setError(null);  //l'errore viene resettato nullo
            }).catch(err => {
                setIsLoading(false);  //non viene più mostrato il messaggio di caricamento
                setError(err.message);  //l'errore viene registrato nello state error
            });
                

    });


    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}

        </div>
    );
}

export default Home;